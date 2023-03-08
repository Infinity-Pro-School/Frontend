import AnimatePage from "@/components/animations/AnimatePage";
import AnimateSlideFade from "@/components/animations/AnimateText";
import PageSection from "@/components/PageSection";
import features from "@/data/features";
import { StyledContainer, StyledEvenColumns, StyledSection, StyledTextContainer } from "@/styles/globals";
import { Box, Card, CardBody, CardHeader, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { lazy } from "react";
import { useTranslation } from "react-i18next";
import AboutImg from "/home/hero.svg";

const PageText = lazy(() => import("@components/PageText"));
const PageTitle = lazy(() => import("@components/PageTitle"));
const PageImage = lazy(() => import("@components/PageImage"));
const RegisterButton = lazy(() => import("@components/Button/Button").then(module => ({ default: module.RegisterButton })));

export default function About() {
  const { t, i18n: { language } } = useTranslation();
  return (
    <>
      <AnimatePage>
        <PageSection pageTitle={t("about_title")} pageText={<>
          <Text fontSize={["2.5rem", "2.9rem", "3.5rem", "4rem"]} marginInlineEnd=".5rem" as="span" fontFamily="Lobster Two" cursor="pointer" colorScheme="telegram" color="cyan.700">
            Infinity
          </Text>
          {t("about_description")}
        </>} pageImage={AboutImg} />
        <StyledSection className="pb-12">
          <StyledContainer>
            <Box mb="12">
              <PageTitle textAlign={"center"}>
                {t("about_title")}
              </PageTitle>
            </Box>
            <Grid templateColumns={["repeat(auto-fit,min(300px,100%))", "repeat(auto-fit,min(350px,100%))", "repeat(auto-fit,min(400px,100%))"]} justifyContent="center" gap=
              "8" as="ul">
              {features.map((feature) => (
                <AnimateSlideFade duration={0.5} y="20%" key={feature.title} style={{ height: "100%" }} as="li">
                  <GridItem as={motion.div} initial={{ opacity: 0, y: "20%" }} whileInView={{ opacity: 1, y: 0 }} key={crypto.randomUUID()}>
                    <Card height={"100%"} justifyContent="space-between" py="8" px="4" bg="blackAlpha.900" color="white" cursor="pointer" transition="all 300ms ease-in-out" _hover={{ background: "blackAlpha.800" }}>
                      <CardHeader>
                        <Heading textAlign="center" fontSize={["1.6rem", "2rem", "2.5rem"]} fontFamily={language === "ru" ? "Lobster" : "Lobster Two"} as="h3">
                          {t(feature.title)}
                        </Heading>
                      </CardHeader>
                      <CardBody>
                        <Text textAlign="center" size={["xl", "xl", "2xl", "3xl"]}>
                          {t(`${feature.title}_body`)}
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
