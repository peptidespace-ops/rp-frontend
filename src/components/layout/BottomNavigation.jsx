import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHome, FaList, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useCart } from '../../contexts/CartContext'
import telegramWebApp from '../../utils/telegram'

const BottomNavigation = () => {
  const location = useLocation()
  const { cartItems } = useCart()

  const navItems = [
    {
      path: '/',
      icon: FaHome,
      label: 'Главная',
      exact: true
    },
    {
      path: '/catalog',
      icon: FaList,
      label: 'Каталог'
    },
    {
      path: '/cart',
      icon: FaShoppingCart,
      label: 'Корзина',
      badge: cartItems.length
    },
    {
      path: '/profile',
      icon: FaUser,
      label: 'Профиль'
    }
  ]

  const handleNavClick = () => {
    telegramWebApp.hapticFeedback('selection')
  }

  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.path, item.exact)
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className="flex flex-col items-center justify-center flex-1 py-2 relative"
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={`flex flex-col items-center justify-center ${
                    active ? 'text-indigo-600' : 'text-gray-400'
                  }`}
                >
                  <div className="relative">
                    <Icon className="text-xl mb-1" />
                    {item.badge > 0 && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                      >
                        {item.badge > 99 ? '99+' : item.badge}
                      </motion.div>
                    )}
                  </div>
                  <span className="text-xs font-medium">{item.label}</span>
                </motion.div>
                
                {active && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-indigo-600 rounded-full"
                  />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default BottomNavigation