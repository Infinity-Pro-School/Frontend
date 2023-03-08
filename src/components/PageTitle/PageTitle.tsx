import { StyledPageTitle } from "@/styles/globals";
import { Heading, HTMLChakraProps } from "@chakra-ui/react";
import { ReactNode } from 'react';
import { useTranslation } from "react-i18next";
import AnimateSlideFade from "../animations/AnimateText";
interface PageTitleProps extends HTMLChakraProps<"h2"> {
    children: ReactNode
}

export default function PageTitle({ children, ...rest }: PageTitleProps) {
    const { i18n: { language } } = useTranslation();
    console.log(language);
    
    return (
        <>
            <AnimateSlideFade>
                <Heading {...rest} marginBottom={["2", "4", "6", "8", "10"]} fontFamily={language === "ru" ? "Roboto" : "Bungee"} as={StyledPageTitle} fontSize={["2xl", "2xl", "4xl", "6xl"]}>
                    {children}
                </Heading>
            </AnimateSlideFade>
        </>
    )
}

