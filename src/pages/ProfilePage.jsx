import React from 'react'
import { motion } from 'framer-motion'

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Профиль</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <p className="text-gray-600">Профиль пользователя</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ProfilePage