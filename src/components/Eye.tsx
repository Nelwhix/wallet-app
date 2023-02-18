export default function Eye({ show, onEyeClick }: EyeProp) {
    if (show) {
        return <span onClick={onEyeClick} className='eye'> <i className='fa fa-eye'></i></span>
    } else {
        return <span onClick={onEyeClick} className='eye'> <i className='fa fa-eye-slash'></i></span>
    }
}

type EyeProp = {
    show: boolean
    onEyeClick: () => void
}