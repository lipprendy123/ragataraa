"use client"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

export default function SeriesCard({ series }) {
  return (
    <motion.div
      className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
      whileHover={{ y: -8 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-900 aspect-[3/4]">
        <img
          src={series.thumbnail || "/placeholder.svg"}
          alt={series.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
          <motion.div
            className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <Play size={24} className="text-white ml-1" fill="white" />
          </motion.div>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-6">
        <h3 className="font-bold text-xl text-gray-900 mb-2 line-clamp-1 group-hover:text-rose-600 transition-colors">
          {series.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{series.description}</p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-medium bg-rose-100 text-rose-700 px-3 py-1 rounded-full">{series.genre}</span>
          <span className="text-xs text-gray-500">{series.episodes.length} Episodes</span>
        </div>

        <motion.button
          className="w-full py-2 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-rose-600 hover:text-white transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View Series
        </motion.button>
      </div>
    </motion.div>
  )
}
