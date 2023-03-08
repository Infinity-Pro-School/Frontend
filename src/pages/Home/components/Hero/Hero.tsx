import { RegisterButton } from "@/components/Button/Button";
import { StyledContainer, StyledEvenColumns, StyledPageTitle, StyledSection, StyledTextContainer } from "@/styles/globals";
import { Image, Text } from "@chakra-ui/react";
import PageTitle from "@/components/PageTitle";
import PageText from "@/components/PageText";
import StyledHero from "./hero.styles";
import HeroImg from "/home/hero.svg";
import PageImage from "@/components/PageImage";
import { useTranslation } from "react-i18next";

export default function Hero() {
    const { t } = useTranslation();
    return (
        <StyledHero>
            <StyledContainer>
                <StyledEvenColumns>
                    <StyledTextContainer className="pt-24 overflow-hidden" marginX="auto" maxW="600px">
                        <PageTitle>
                            {t("main_title")}
                        </PageTitle>
                        <PageText>
                            {t("main_description")} <Text color="red" fontFamily="Bungee" as="span" className="underline">{t("main_price")}</Text> {t("main_soums")}!
                        </PageText>
                        <RegisterButton />
                    </StyledTextContainer>
                    <PageImage imageSource={HeroImg} />
                </StyledEvenColumns>
            </StyledContainer>
        </StyledHero>
    )
}
