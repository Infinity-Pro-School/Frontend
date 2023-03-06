import { motion } from "framer-motion";
import styled from "styled-components";

type TextContainerProps = {
    display?: "grid" | "block";
    gap?: string;
    maxW: string;
    marginX: string;
};

export const StyledContainer = styled.div.attrs({
    className: "container mx-auto",
})``;
export const StyledMain = styled(motion.main).attrs({
    className: "flex-grow",
})``;
export const StyledPageTitle = styled(motion.h2).attrs({
    className:
        "font-bold text-center text-4xl font-bungee md:mb-8 md:text-left lg:6xl",
})`
    
`;
export const StyledPageText = styled(motion.p).attrs({
    className:
        "font-light text-center text-darkBlue-100 mb-12 opacity-50 md:text-left",
})`
    
`;
export const StyledEvenColumns = styled(motion.div)`
    display: grid;
    gap: 2rem;
    @media only screen and (min-width: 50em) {
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
    }
`;
export const StyledTextContainer = styled(motion.div)<TextContainerProps>`
    display: ${(props) => props.display || "block"};
    gap: ${(props) => props.gap || 0};
    width: min(100%, ${(props) => props.maxW});
    margin-inline: ${(props) => props.marginX};
`;
export const StyledRegisterButton = styled(motion.button).attrs({
    className:
        "px-4 py-4 md:px-8 shadow-[0px_15px_15px_-10px_#FF9F8E] rounded-[22px] text-white bg-red-600",
})``;
export const StyledSection = styled(motion.section)``;
export const StyledApp = styled.div.attrs({ className: "App bg-bodyBg" })``;
