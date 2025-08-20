import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaFlask, FaUser } from 'react-icons/fa'
import { useAuth } from '../../contexts/AuthContext'
import telegramWebApp from '../../utils/telegram'

const Header = () => {
  const location = useLocation()
  const { user } = useAuth()
  const telegramUser = telegramWebApp.getUser()

  const handleLogoClick = () => {
    telegramWebApp.hapticFeedback('selection')
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={handleLogoClick}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <FaFlask className="text-2xl text-indigo-600" />
              <span className="text-xl font-bold text-gray-800">
                Russian Peptide
              </span>
            </motion.div>
          </Link>

          {/* User Info */}
          <div className="flex items-center space-x-3">
            {telegramUser && (
              <div className="flex items-center space-x-2">
                {telegramUser.photo_url ? (
                  <img 
                    src={telegramUser.photo_url} 
                    alt={telegramUser.first_name}
                    className="w-8 h-8 rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <FaUser className="text-indigo-600 text-sm" />
                  </div>
                )}
                <span className="text-sm font-medium text-gray-700 hidden sm:block">
                  {telegramUser.first_name}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header