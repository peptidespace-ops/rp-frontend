import React from 'react'
import { motion } from 'framer-motion'
import { FaFlask, FaShieldAlt, FaCertificate } from 'react-icons/fa'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Russian Peptide
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Разработка и производство пептидов и биоактивных соединений
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Перейти к каталогу
          </motion.button>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <FaFlask className="text-4xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Качественные пептиды</h3>
            <p className="text-gray-600">
              Высококачественные пептиды для исследований и применения
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <FaShieldAlt className="text-4xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
            <p className="text-gray-600">
              Строгий контроль качества и безопасности продукции
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <FaCertificate className="text-4xl text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Сертификация</h3>
            <p className="text-gray-600">
              Все продукты имеют необходимые сертификаты качества
            </p>
          </motion.div>
        </div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-6">О компании</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Russian Peptide - ведущая компания в области разработки и производства 
            пептидов и биоактивных соединений. Мы специализируемся на создании 
            высококачественных продуктов для научных исследований и практического применения.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default HomePage