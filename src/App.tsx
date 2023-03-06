import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Loader from "@components/Loader";

const RootLayout = lazy(() => import("@layouts/root"));
const Home = lazy(() => import("@pages/Home"));
const Courses = lazy(() => import("@pages/Course"));
const Ratings = lazy(() => import("@pages/Rating"));
const About = lazy(() => import("@pages/About"));
const Gallery = lazy(() => import("@pages/Gallery"));

function App() {

  return (
    <>
      
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/ratings" element={<Ratings />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
