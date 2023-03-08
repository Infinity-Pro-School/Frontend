import { StyledPageText } from "@/styles/globals"
import { HTMLChakraProps, Text } from "@chakra-ui/react"
import AnimateSlideFade from "../animations/AnimateText"

interface PageTextProps extends HTMLChakraProps<"p"> {

}

export default function PageText({ children, ...rest }: PageTextProps) {
    return (
        <AnimateSlideFade>
            <Text {...rest} marginBottom={["2", "4", "6", "8", "10"]} as={StyledPageText} fontSize={["xl", "2xl", "3xl", "4xl"]}>
                {children}
            </Text>
        </AnimateSlideFade>
    )
}
