import AnimatePage from "@/components/animations/AnimatePage";
import AnimateSlideFade from "@/components/animations/AnimateText";
import { QuickTipButton } from "@/components/Button/Button";
import quickTips from "@/data/tips";
import { useThemeStore } from "@/features"
import { StyledContainer, StyledSection } from "@/styles/globals";
import { Box, Card, CardBody, CardFooter, CardHeader, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { lazy } from "react";

const PageTitle = lazy(() => import("@components/PageTitle"));
const Hero = lazy(() => import("./components/Hero"));

export default function Home() {
  const { theme, setTheme } = useThemeStore();
  return (
    <>
      <AnimatePage>
        <Hero />
        <StyledSection>
          <StyledContainer>
            <Box mb="12">
              <PageTitle textAlign="center">
                Quick tips
              </PageTitle>
            </Box>
            <Grid templateColumns={["repeat(auto-fit,min(250px,100%))", "repeat(auto-fit,min(300px,100%))", "repeat(auto-fit,min(350px,100%))"]} justifyContent="center" gap=
              "8" as="ul">
              {quickTips.map(tip => (
                <AnimateSlideFade key={tip.title} style={{ height: "100%" }} as="li">
                  <GridItem as={motion.div} initial={{ opacity: 0, y: "20%" }} whileInView={{ opacity: 1, y: 0 }} height={"100%"} key={tip.title}>
                    <Card height={"100%"} justifyContent="space-between" py="8" px="4" bg="blackAlpha.900" color="white" cursor="pointer" transition="all 300ms ease-in-out" _hover={{ background: "blackAlpha.800" }}>
                      <CardHeader>
                        <Heading textAlign="center" fontSize={["1.6rem", "2rem", "2.5rem"]} fontFamily="Lobster Two" as="h3">
                          {tip.title}
                        </Heading>
                      </CardHeader>
                      <CardBody>
                        <Text textAlign="center" size={["xl", "xl", "2xl", "3xl"]}>
                          {tip.body}
                        </Text>
                      </CardBody>
                      <CardFooter>
                        <QuickTipButton to={tip.link}>
                          Find out more
                        </QuickTipButton>
                      </CardFooter>
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
