import { useNavStore } from "@/features";
import { Box, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { t } = useTranslation();
  const { display } = useNavStore();
  return (
    <Box display={{
      base: display ? "block" : "none",
      md: "block"
    }} className="primary-navigation fixed top-[95px] left-10 right-10 hidden mx-auto py-10 shadow-lg bg-white sm:left-20 sm:right-20 md:static md:p-0 md:m-0 md:bg-transparent md:shadow-none min-[680px]:left-32 min-[680px]:right-32 min-[740px]:left-34 min-[740px]:right-34" as="nav" id="primaryNavigation">
      <Flex flexDirection={{
        base: "column",
        md: "row"
      }} justifyContent="center" alignItems="center" className="navigation-list gap-6 lg:gap-3" as="ul" gap="2rem">
        <Box as="li">
          <Link to="/" as={RouterLink}>
            {t("home")}
          </Link>
        </Box>
        <Box as="li">
          <Link to="/about" as={RouterLink}>
            {t("about")}
          </Link>
        </Box>
        <Box as="li">
          <Link to="/courses" as={RouterLink}>
            {t("courses")}
          </Link>
        </Box>
        <Box as="li">
          <Link to="/ratings" as={RouterLink}>
            {t("ratings")}
          </Link>
        </Box>
        <Box as="li">
          <Link to="/gallery" as={RouterLink}>
            {t("gallery")}
          </Link>
        </Box>
      </Flex>
    </Box>
  )
}
