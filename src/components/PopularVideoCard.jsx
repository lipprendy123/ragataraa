"use client"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { seriesData } from "../data/seriesData"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function PopularVideos() {
  const popularVideos = seriesData
    .flatMap((series) => series.episodes.map((ep) => ({ ...ep, seriesTitle: series.title })))
    .slice(0, 4)

  return (
    <motion.section
      className="py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-12" variants={fadeInUp}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Popular Now</h2>
          <p className="text-xl text-gray-600">What everyone is watching this week</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {popularVideos.map((video) => (
            <motion.div
              key={`${video.seriesTitle}-${video.id}`}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-video bg-gray-900"
              whileHover={{ scale: 1.02 }}
              variants={fadeInUp}
            >
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <motion.div
                  className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Play size={20} className="text-white ml-1" fill="white" />
                </motion.div>
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white text-sm font-medium">{video.seriesTitle}</p>
                <h3 className="text-white font-bold text-lg">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
