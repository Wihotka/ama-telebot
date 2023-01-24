declare global {
  interface Window {Telegram:any}
}

const tg = window.Telegram.WebApp;

export function useTelegram() {
  return {
    tg,
    user: tg.initDataUnsafe?.user?.first_name
  }
}