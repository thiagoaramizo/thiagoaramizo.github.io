

import Lottie from 'react-lottie'
import { useState } from 'react'
import like from './like.json'

export default function BotaoAmei() {
    
    const [animar, setAnimar] = useState({isStopped: true, isPaused: false})
    
    const defaultOptions = {
        loop: false,
        autoplay: false, 
        animationData: like,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div>
            <button onClick={() => {
                setAnimar( {
                    ...animar,
                    isStopped: !animar.isStopped
                })
            }}>play</button>
            <Lottie 
                options={defaultOptions}
                height={150}
                width={150}
                isStopped={animar.isStopped}
                isPaused={animar.isPaused}
            />
        </div> 
    )
}