import { StyledContainer, StyledEvenColumns, StyledSection, StyledTextContainer } from "@/styles/globals"
import { RegisterButton } from "@components/Button/Button";
import PageText from "@components/PageText";
import PageTitle from "@components/PageTitle";
import { ReactNode } from "react";
import PageImage from "../PageImage";

type PageSectionProps = {
    pageTitle: string;
    pageText: ReactNode;
    shouldRegister?: boolean;
    pageImage: string;
}

export default function PageSection({ pageTitle, pageText, shouldRegister = true, pageImage }: PageSectionProps) {
    return (
        <StyledSection className="mb-24 pt-12 md:pt-24 lg:pt-36">
            <StyledContainer>
                <StyledEvenColumns>
                    <StyledTextContainer className="pt-24" marginX="auto" maxW="650px">
                        <PageTitle>
                            {pageTitle}
                        </PageTitle>
                        <StyledTextContainer maxW="470px" marginX="0">
                            <PageText>
                                {pageText}
                            </PageText>
                        </StyledTextContainer>
                        {shouldRegister && <RegisterButton />}
                    </StyledTextContainer>
                    <PageImage imageSource={pageImage} />
                </StyledEvenColumns>
            </StyledContainer>
        </StyledSection>
    )
}
