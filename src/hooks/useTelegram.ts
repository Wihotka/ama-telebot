declare global {
  interface Window {Telegram:any}
}

const tg = window.Telegram.WebApp;

export function useTelegram() {
  
  const onToggleBtn = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }

  return {
    onToggleBtn,
    tg,
    user: tg.initDataUnsafe?.user
  }
}