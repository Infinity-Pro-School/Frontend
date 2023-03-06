import { StyledPageTitle } from "@/styles/globals";
import { Heading, HTMLChakraProps } from "@chakra-ui/react";
import { ReactNode } from 'react';
import AnimateSlideFade from "../animations/AnimateText";
interface PageTitleProps extends HTMLChakraProps<"h2"> {
    children: ReactNode
}

export default function PageTitle({ children, textAlign = "unset", ...rest }: PageTitleProps) {
    return (
        <>
            <AnimateSlideFade>
                <Heading {...rest} textAlign={textAlign} marginBottom="12" fontFamily={"Bungee"} as={StyledPageTitle} fontSize={["2xl", "2xl", "4xl", "6xl"]}>
                    {children}
                </Heading>
            </AnimateSlideFade>
        </>
    )
}

