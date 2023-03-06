import AnimatePage from "@/components/animations/AnimatePage";
import AnimateSlideFade from "@/components/animations/AnimateText";
import { QuickTipButton } from "@/components/Button/Button";
import PageSection from "@/components/PageSection";
import PageTitle from "@/components/PageTitle";
import courses from "@/data/courses";
import { StyledContainer, StyledSection } from "@/styles/globals";
import { Box, Card, CardBody, CardFooter, CardHeader, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CourseImage from "/courses/teaching.svg";
export default function Courses() {
  return (
    <>
      <AnimatePage>
        <PageSection pageTitle="Take your General English skills to the next level!" pageText="We mainly focus on general English to make sure that you will have a better understanding of core English!" pageImage={CourseImage} />
        <StyledSection>
          <StyledContainer>
            <Box mb="12">
              <PageTitle textAlign="center">
                Courses
              </PageTitle>
            </Box>
            <Grid templateColumns={["repeat(auto-fit,min(250px,100%))", "repeat(auto-fit,min(300px,100%))", "repeat(auto-fit,min(350px,100%))"]} justifyContent="center" gap=
              "8" as="ul">
              {courses.map(course => (
                <AnimateSlideFade key={course.id} as="li">
                  <GridItem as={motion.div} initial={{ opacity: 0, y: "20%" }} whileInView={{ opacity: 1, y: 0 }} key={course.id}>
                    <Card height={"100%"} justifyContent="space-between" py="8" px="4" bg="blackAlpha.900" color="white" cursor="pointer" transition="all 300ms ease-in-out" _hover={{ background: "blackAlpha.800" }}>
                      <CardHeader>
                        <Heading textAlign="center" fontSize={["1.6rem", "2rem", "2.5rem"]} fontFamily="Lobster Two" as="h3">
                          {course.name}
                        </Heading>
                      </CardHeader>
                      <CardBody>
                        <Text textAlign="center" size={["xl", "xl", "2xl", "3xl"]}>
                          {course.description}
                        </Text>
                      </CardBody>
                      <CardFooter>
                        <QuickTipButton to="/course/signup">
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
