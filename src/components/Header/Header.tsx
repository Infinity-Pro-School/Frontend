import { lazy } from "react";
import { Box, Flex, Image, Link } from "@chakra-ui/react"
import { StyledContainer } from "@/styles/globals";
import { Link as RouterLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavStore } from "@/features";
import SiteLogo from "/logo.svg";
import LanguageSelect from "@components/LanguageSelect";
const Navigation = lazy(() => import("@components/Navigation"));
export default function Header() {
    const { toggle, display } = useNavStore();
    return (
        <Box as="header" paddingY={12}>
            <StyledContainer>
                <Flex justifyContent="space-between" alignItems="center">
                    <Link to="/" as={RouterLink}>
                        <Image src={SiteLogo} width={140} height={35} objectFit="cover" alt="Infinity Logo" rounded={"md"} />
                    </Link>
                    <Box onClick={toggle} display={{
                        base: "block",
                        md: "none"
                    }} as="button" type="button">
                        <HamburgerIcon aria-hidden="true" width={"32px"} height={"32px"} />
                    </Box>
                    <Navigation />
                    <LanguageSelect />
                </Flex>
            </StyledContainer>
        </Box>
    )
}
