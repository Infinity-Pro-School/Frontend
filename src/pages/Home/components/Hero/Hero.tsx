import { RegisterButton } from "@/components/Button/Button";
import { StyledContainer, StyledEvenColumns, StyledPageTitle, StyledSection, StyledTextContainer } from "@/styles/globals";
import { Image, Text } from "@chakra-ui/react";
import PageTitle from "@/components/PageTitle";
import PageText from "@/components/PageText";
import StyledHero from "./hero.styles";
import HeroImg from "/home/hero.svg";

export default function Hero() {
    return (
        <StyledHero>
            <StyledContainer>
                <StyledEvenColumns>
                    <StyledTextContainer className="pt-24 overflow-hidden" marginX="auto" maxW="600px">
                        <PageTitle>
                            Infinity - we develop passion for learning!
                        </PageTitle>
                        <PageText>
                            Take your General English skills to the next level!
                            Sign up for our courses for just <Text color="red" fontFamily="Bungee" as="span" className="underline">350.000</Text> soums!
                        </PageText>
                        <RegisterButton />
                    </StyledTextContainer>
                    <Image width={["200px", "300px", "350px", "450px", "480px"]} margin="auto" height={300} aria-hidden="true" alt="Infinity brand image" className="w-full" src={HeroImg} />
                </StyledEvenColumns>
            </StyledContainer>
        </StyledHero>
    )
}
