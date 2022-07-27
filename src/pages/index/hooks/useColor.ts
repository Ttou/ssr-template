export function useColor() {
  const colorMode = useColorMode()

  function handleToggleMode() {
    colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
  }

  return {
    handleToggleMode
  }
}
