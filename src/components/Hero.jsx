"use client"
import { motion } from "framer-motion"
import { Play, Zap } from "lucide-react"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/colorful-hd-animation-hero-banner-with-vibrant-col.jpg" alt="Hero Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          variants={fadeInUp}
        >
          Discover the Magic of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-500">HD Animation</span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          Your favorite animated stories, beautifully crafted in every frame. Experience cinema-quality animation like
          never before.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
          <motion.button
            className="px-8 py-4 bg-rose-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-rose-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play size={20} />
            Explore Series
          </motion.button>
          <motion.button
            className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap size={20} />
            Watch Trailer
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div className="grid grid-cols-3 gap-8 mt-16 text-center" variants={fadeInUp}>
          {[
            { label: "500+", value: "Episodes" },
            { label: "4K", value: "Quality" },
            { label: "24/7", value: "Streaming" },
          ].map((stat) => (
            <motion.div key={stat.value} whileHover={{ scale: 1.05 }}>
              <p className="text-3xl sm:text-4xl font-bold text-rose-600">{stat.label}</p>
              <p className="text-gray-600 font-medium">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
