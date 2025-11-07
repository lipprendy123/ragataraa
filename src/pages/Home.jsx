import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import FeaturedSeries from "../components/FeaturedSeries"
import PopularVideos from "../components/PopularVideoCard"
import AboutSection from "../components/About"
import Footer from "../components/Footer"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export default function Home() {
  return (
    <motion.div className="min-h-screen bg-white" initial="hidden" animate="visible" variants={containerVariants}>
      <Navbar />
      <Hero />
      <FeaturedSeries />
      {/* <PopularVideos /> */}
      <AboutSection />
      <Footer />
    </motion.div>
  )
}
