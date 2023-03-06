import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Button as ChakraButton, Link, LinkProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Link as RouterLink, To } from "react-router-dom";
export default function Button() {
  return (
    <div>Button</div>
  )
}

export function RegisterButton() {
  return <ChakraButton colorScheme="red" rounded="full" fontSize={["1rem", "2rem", "2.5rem"]} padding={["1em", "1.5em 2em"]} rightIcon={<ArrowForwardIcon />} className="px-4 py-4 md:px-8 shadow-[0px_15px_15px_-10px_#FF9F8E]">
    <RouterLink to="/course/signup" >
      Register now
    </RouterLink>
  </ChakraButton>
}

export function QuickTipButton({ children, to }: { children: ReactNode, to: To }) {
  return <ChakraButton width="max-content" mx="auto" colorScheme="red" rounded="full" fontSize={["1rem", "1.2rem", "1.75rem"]} padding={["1em"]} rightIcon={<ArrowForwardIcon />}>
    <RouterLink to={to}>
      {children}
    </RouterLink>
  </ChakraButton>
}