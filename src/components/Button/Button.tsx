import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Box, Button as ChakraButton, Link, LinkProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink, To } from "react-router-dom";
export default function Button() {
  return (
    <div>Button</div>
  )
}

export function RegisterButton() {
  const { t } = useTranslation();
  return <Box display="flex" justifyContent={{
    base: "center",
    lg: "start"
  }} alignItems="center" className="mb-8 lg:mb-0">
    <ChakraButton colorScheme="red" rounded="full" fontSize={["1rem", "2rem", "2.5rem"]} padding={["1em", "1em", "1em", "1.5em 2em"]} rightIcon={<ArrowForwardIcon />} className="shadow-[0px_15px_15px_-10px_#FF9F8E]">
      <RouterLink to="/course/signup" >
        {t("register")}
      </RouterLink>
    </ChakraButton>
  </Box>
}

export function QuickTipButton({ children, to }: { children: ReactNode, to: To }) {
  return <ChakraButton width="max-content" mx="auto" colorScheme="red" rounded="full" fontSize={["1rem", "1.2rem", "1.75rem"]} padding={["1em"]} rightIcon={<ArrowForwardIcon />}>
    <RouterLink to={to}>
      {children}
    </RouterLink>
  </ChakraButton>
}