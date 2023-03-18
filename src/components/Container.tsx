

export default function Container({ animationDuration, children, isFinished}: ContainerProps) {
    
    const ContainerStyle = {
        opacity: isFinished ? 0 : 1,
        pointerEvents: 'none',
        transition: `opacity ${animationDuration}ms linear`
    }

    return <div style={ContainerStyle}>
        {children}
    </div>
}

interface ContainerProps {
    animationDuration: number,
    children: Array<JSX.Element>
    isFinished: boolean
}