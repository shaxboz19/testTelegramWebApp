const telegram = window.Telegram.WebApp

export default (_, inject) => {
  inject('telegram', telegram)
}
