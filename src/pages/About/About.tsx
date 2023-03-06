import AnimatePage from "@/components/animations/AnimatePage";
import AnimateSlideFade from "@/components/animations/AnimateText";
import features from "@/data/features";
import { StyledContainer, StyledEvenColumns, StyledSection, StyledTextContainer } from "@/styles/globals";
import { Box, Card, CardBody, CardHeader, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { lazy } from "react";
import AboutImg from "/home/hero.svg";

const PageText = lazy(() => import("@components/PageText"));
const PageTitle = lazy(() => import("@components/PageTitle"));
const PageImage = lazy(() => import("@components/PageImage"));
const RegisterButton = lazy(() => import("@components/Button/Button").then(module => ({ default: module.RegisterButton })));

export default function About() {
  return (
    <>
      <AnimatePage>
        <StyledSection className="mb-48" id="about" title="Welcome to our about section. In this section, you can find all the information you need about us...">
          <StyledContainer>
            <StyledEvenColumns>
              <StyledTextContainer className="pt-24" marginX="auto" maxW="600px">
                <PageTitle>
                  What's different about us?
                </PageTitle>
                <PageText>
                  <Text fontSize={["2.5rem", "2.9rem", "3.5rem", "4rem"]} marginInlineEnd=".5rem" as="span" fontFamily="Lobster Two" cursor="pointer" colorScheme="telegram" color="cyan.700">
                    Infinity
                  </Text>
                  provides you with full game-changer knowledge of general English that you need in order to step up your English skills to the next level!
                </PageText>
                <RegisterButton />
              </StyledTextContainer>
              <PageImage imageSource={AboutImg} />
            </StyledEvenColumns>
          </StyledContainer>
        </StyledSection>
        <StyledSection className="pb-12">
          <StyledContainer>
            <Box mb="12">
              <PageTitle textAlign={"center"}>
                Why choose us?
              </PageTitle>
            </Box>
            <Grid templateColumns={["repeat(auto-fit,min(300px,100%))", "repeat(auto-fit,min(350px,100%))", "repeat(auto-fit,min(400px,100%))"]} justifyContent="center" gap=
              "8" as="ul">
              {features.map((feature) => (
                <AnimateSlideFade duration={0.5} y="20%" key={feature.title} style={{ height: "100%" }} as="li">
                  <GridItem as={motion.div} initial={{ opacity: 0, y: "20%" }} whileInView={{ opacity: 1, y: 0 }} key={crypto.randomUUID()}>
                    <Card height={"100%"} justifyContent="space-between" py="8" px="4" bg="blackAlpha.900" color="white" cursor="pointer" transition="all 300ms ease-in-out" _hover={{ background: "blackAlpha.800" }}>
                      <CardHeader>
                        <Heading textAlign="center" fontSize={["1.6rem", "2rem", "2.5rem"]} fontFamily="Lobster Two" as="h3">
                          {feature.title}
                        </Heading>
                      </CardHeader>
                      <CardBody>
                        <Text textAlign="center" size={["xl", "xl", "2xl", "3xl"]}>
                          {feature.body}
                        </Text>
                      </CardBody>
                    </Card>
                  </GridItem>
                </AnimateSlideFade>
              ))}
            </Grid>
          </StyledContainer>
        </StyledSection>
      </AnimatePage>
    </>
  )
}
