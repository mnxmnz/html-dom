export const setFavicon = () => {
  const favicon = document.querySelector('link[rel="icon"]');

  if (favicon instanceof HTMLLinkElement) {
    favicon.href = window.matchMedia('(prefers-color-scheme: light)').matches
      ? './01/assets/light-mode-favicon.png'
      : './01/assets/dark-mode-favicon.png';
  }
};
