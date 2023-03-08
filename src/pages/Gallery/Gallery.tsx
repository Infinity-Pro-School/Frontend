import AnimatePage from "@/components/animations/AnimatePage";
import AnimateSlideFade from "@/components/animations/AnimateText";
import PageTitle from "@/components/PageTitle";
import galleryImgs from "@/data/gallery";
import { StyledContainer, StyledSection } from "@/styles/globals";
import { Box, Card, CardBody, Grid, GridItem, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { lazy } from "react";
import { useTranslation } from "react-i18next";

const PageSection = lazy(() => import("@components/PageSection"));

import galleryImage from "/gallery/gallery.svg";

export default function Gallery() {
    const { t } = useTranslation();
    return (
        <>
            <AnimatePage>
                <PageSection pageTitle={t("gallery")} pageText={t("gallery_description")} pageImage={galleryImage} />
                <StyledSection>
                    <StyledContainer>
                        <Box mb="12" mt="96">
                            <PageTitle textAlign="center">
                                {t("gallery")}
                            </PageTitle>
                        </Box>
                        <Grid templateColumns={["repeat(auto-fit,min(250px,100%))", "repeat(auto-fit,min(300px,100%))", "repeat(auto-fit,min(350px,100%))"]} justifyContent="center" gap=
                            "8" as="ul">
                            {galleryImgs.map(img => (
                                <AnimateSlideFade as="li">
                                    <GridItem key={img.id} as={motion.div} initial={{ opacity: 0, y: "20%" }} whileInView={{ opacity: 1, y: 0 }}>
                                        <Card height={"100%"} justifyContent="space-between" py="8" px="4" bg="blackAlpha.900" color="white" cursor="pointer" transition="all 300ms ease-in-out" _hover={{ background: "blackAlpha.800" }}>
                                            <CardBody>
                                                <Image width="100%" loading="lazy" height="100%" src={img.imgUrl} alt="Enjoy the views of the amazing moments that we had with our students!" />
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
