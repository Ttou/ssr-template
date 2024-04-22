export function useTheme() {
  const colorMode = useColorMode()

  function handleToggleTheme() {
    colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
  }

  return {
    handleToggleTheme
  }
}
