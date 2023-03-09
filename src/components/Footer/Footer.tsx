import socialLinks from "@/data/social";
import { StyledContainer } from "@/styles/globals";
import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{
      duration: 1
    }} className="mt-12 py-12 px-8 text-white bg-red-500" style={{
      scrollMargin: "100px"
    }}>
      <StyledContainer>
        <motion.div className="overflow-hidden flex flex-col gap-4 items-center justify-between lg:flex-row">
          <motion.strong initial={{ x: 10 }} animate={{ x: 0 }} transition={{
            duration: 1,
            delay: 0.3
          }} className="text-center">
            <Link href="tel:977771188" fontSize="inherit">
              +998 97 777 11 88
            </Link>
          </motion.strong>
          <Flex as="ul" gap="1rem">
            {socialLinks.map(socialLink => (
              <Box key={socialLink.title} as="li">
                <Link href={socialLink.link} aria-label={`Click to visit our ${socialLink.title} page`}>
                  <Image src={socialLink.iconPath} width="32px" height="32px" aria-hidden alt={`${socialLink.title} icon`} />
                </Link>
              </Box>
            ))}
          </Flex>
        </motion.div>
      </StyledContainer>
    </motion.footer>
  )
}
