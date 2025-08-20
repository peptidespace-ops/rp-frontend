import WebApp from '@twa-dev/sdk'

class TelegramWebApp {
  constructor() {
    this.tg = WebApp
    this.user = null
    this.isInitialized = false
  }

  init() {
    try {
      this.tg.ready()
      this.tg.expand()
      this.user = this.tg.initDataUnsafe?.user
      this.isInitialized = true
      
      // Настройка темы
      document.documentElement.style.setProperty('--tg-theme-bg-color', this.tg.themeParams.bg_color || '#ffffff')
      document.documentElement.style.setProperty('--tg-theme-text-color', this.tg.themeParams.text_color || '#000000')
      document.documentElement.style.setProperty('--tg-theme-hint-color', this.tg.themeParams.hint_color || '#999999')
      document.documentElement.style.setProperty('--tg-theme-link-color', this.tg.themeParams.link_color || '#2481cc')
      document.documentElement.style.setProperty('--tg-theme-button-color', this.tg.themeParams.button_color || '#2481cc')
      document.documentElement.style.setProperty('--tg-theme-button-text-color', this.tg.themeParams.button_text_color || '#ffffff')

      console.log('Telegram Web App initialized', {
        user: this.user,
        platform: this.tg.platform,
        version: this.tg.version
      })
    } catch (error) {
      console.error('Failed to initialize Telegram Web App:', error)
    }
  }

  getUser() {
    return this.user
  }

  showMainButton(text, onClick) {
    this.tg.MainButton.setText(text)
    this.tg.MainButton.onClick(onClick)
    this.tg.MainButton.show()
  }

  hideMainButton() {
    this.tg.MainButton.hide()
  }

  showBackButton(onClick) {
    this.tg.BackButton.onClick(onClick)
    this.tg.BackButton.show()
  }

  hideBackButton() {
    this.tg.BackButton.hide()
  }

  close() {
    this.tg.close()
  }

  sendData(data) {
    this.tg.sendData(JSON.stringify(data))
  }

  hapticFeedback(type = 'impact', style = 'medium') {
    if (this.tg.HapticFeedback) {
      if (type === 'impact') {
        this.tg.HapticFeedback.impactOccurred(style)
      } else if (type === 'notification') {
        this.tg.HapticFeedback.notificationOccurred(style)
      } else if (type === 'selection') {
        this.tg.HapticFeedback.selectionChanged()
      }
    }
  }
}

export const telegramWebApp = new TelegramWebApp()
export default telegramWebApp