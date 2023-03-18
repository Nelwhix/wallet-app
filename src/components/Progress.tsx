import Container from "./Container";
import Bar from "./Bar";
import Spinner from "./Spinner";
import { useNProgress } from '@tanem/react-nprogress'


export default function Progress({ isAnimating}: ProgressProps) {
    const { animationDuration, isFinished, progress } = useNProgress({
        isAnimating,
      })

    return <Container animationDuration={animationDuration} isFinished={isFinished}>
        <Bar animationDuration={animationDuration} progress={progress} />
        <Spinner />
  </Container>
}

interface ProgressProps {
    isAnimating: boolean
}