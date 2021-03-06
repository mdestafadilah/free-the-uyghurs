export const adjustHeight = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

export const openDialog = (dialogElement) => (event) => {
  event.preventDefault()

  if (typeof dialogElement.showModal === 'function') {
    dialogElement.showModal()

    dialogElement.addEventListener('click', (event) => {
      const rect = dialogElement.getBoundingClientRect()
      const isInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      if (!isInDialog) {
        dialogElement.close()
      }
    })
  }
}
