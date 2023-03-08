import AnimatePage from "@/components/animations/AnimatePage";
import AnimateSlideFade from "@/components/animations/AnimateText";
import PageSection from "@/components/PageSection";
import PageTitle from "@/components/PageTitle";
import ratingInfo from "@/data/ratings";
import { StyledContainer, StyledSection } from "@/styles/globals";
import { Box, Card, CardBody, Grid, GridItem, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import RatingsImage from "/ratings/ratings.svg";

export default function Ratings() {
  const { t } = useTranslation();
  return (
    <>
      <AnimatePage>
        <PageSection pageTitle={t("ratings")} pageText={t("ratings_description")} pageImage={RatingsImage} />
        <StyledSection className="pb-12 pt-96">
          <StyledContainer>
            <Box mb="12">
              <PageTitle textAlign={"center"}>
                {t("top_students")}
              </PageTitle>
            </Box>
            <Grid templateColumns={["repeat(auto-fit,min(300px,100%))", "repeat(auto-fit,min(350px,100%))", "repeat(auto-fit,min(400px,100%))"]} justifyContent="center" gap=
              "8" as="ul">
              {ratingInfo.ratings.map(rating => (
                <AnimateSlideFade key={rating.id} as="li">
                  <GridItem as={motion.div} initial={{ opacity: 0, y: "20%" }} whileInView={{ opacity: 1, y: 0 }} key={crypto.randomUUID()}>
                    <Card height={"100%"} justifyContent="space-between" py="8" px="4" bg="blackAlpha.900" color="white" cursor="pointer" transition="all 300ms ease-in-out" _hover={{ background: "blackAlpha.800" }}>
                      <CardBody>
                        <Image width="100%" loading="lazy" height="100%" src={rating.imgSrc} alt={ratingInfo.description} />
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
