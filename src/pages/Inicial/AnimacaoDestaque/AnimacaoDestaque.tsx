import Lottie from 'react-lottie'
import destaque from './destaque.json'

export default function AnimacaoDestaque() {
    
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: destaque,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };


    return (
        <div>
            <Lottie 
                options={defaultOptions}
                width={500}
                height={500}
            />
        </div> 
    )
}