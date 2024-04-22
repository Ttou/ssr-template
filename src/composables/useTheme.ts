export enum ColorModeEnum {
  DARK = 'dark',
  LIGHT = 'light'
}

export function useTheme() {
  const colorMode = useColorMode()

  function handleToggleTheme() {
    if (colorMode.preference !== ColorModeEnum.DARK) {
      colorMode.preference = ColorModeEnum.DARK
    } else {
      colorMode.preference = ColorModeEnum.LIGHT
    }
  }

  return {
    colorMode,
    handleToggleTheme
  }
}
