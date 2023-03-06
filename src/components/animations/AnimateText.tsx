import { As, Box, SlideFade } from "@chakra-ui/react";
import { CSSProperties, ReactNode } from "react";

type AnimateSlideFadeProps = {
    children: ReactNode,
    as?: As<any> | undefined,
    style?: CSSProperties | undefined,
    duration?: number,
    opacity?: number,
    y?: string,
}

export default function AnimateSlideFade({ children, as = "div", style = {}, duration = 1, y = "100%", opacity = 0 }: AnimateSlideFadeProps) {
    return (
        <Box overflow="hidden" as={as}>
            <SlideFade initial={{ opacity, y }} style={style} transition={{
                enter: {
                    duration: duration
                },
                exit: {
                    duration: duration
                }
            }} in={true}>
                {children}
            </SlideFade>
        </Box>
    )
}
