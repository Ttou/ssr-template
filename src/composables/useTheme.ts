export enum ColorModeEnum {
  DARK = 'dark',
  LIGHT = 'light'
}

export function useTheme() {
  const colorMode = useColorMode()
  const toggleDark = useToggle(toRef(colorMode, 'preference'), {
    truthyValue: ColorModeEnum.DARK,
    falsyValue: ColorModeEnum.LIGHT
  })

  return {
    colorMode,
    toggleDark
  }
}
