export function useTheme() {
  const isDark = useDark({
    valueDark: 'dark-mode',
    valueLight: 'light-mode'
  })
  const toggleDark = useToggle(isDark)

  function handleToggleTheme() {
    toggleDark()
  }

  return {
    handleToggleTheme
  }
}
