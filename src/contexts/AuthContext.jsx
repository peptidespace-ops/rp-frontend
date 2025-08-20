import React, { createContext, useContext, useState } from 'react'
import telegramWebApp from '../utils/telegram'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  React.useEffect(() => {
    // Инициализация Telegram Web App
    telegramWebApp.init()
    
    // Получение пользователя из Telegram
    const telegramUser = telegramWebApp.getUser()
    if (telegramUser) {
      setUser({
        id: telegramUser.id,
        firstName: telegramUser.first_name,
        lastName: telegramUser.last_name,
        username: telegramUser.username,
        photoUrl: telegramUser.photo_url,
        languageCode: telegramUser.language_code
      })
      setIsAuthenticated(true)
    }
    
    setIsLoading(false)
  }, [])

  const login = (userData) => {
    setUser(userData)
    setIsAuthenticated(true)
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
  }

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}