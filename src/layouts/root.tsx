import { StyledMain } from "@/styles/globals";
import { lazy } from "react";
import { Outlet } from "react-router-dom";
import { AnimatePresence, motion, useScroll } from "framer-motion";
const Header = lazy(() => import("@components/Header"));
const Footer = lazy(() => import("@components/Footer"));

export default function RootLayout() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div style={{ scaleX: scrollYProgress }}></motion.div>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  )
}
