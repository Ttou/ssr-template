import 'dayjs/locale/zh-cn'

import type { ConfigProviderProps } from 'ant-design-vue/lib/config-provider'
import antdLocale from 'ant-design-vue/lib/locale/zh_CN'
import dayjs from 'dayjs'

dayjs.locale('zh-cn')

export function useConfig(): ConfigProviderProps {
  return {
    locale: antdLocale
  }
}
