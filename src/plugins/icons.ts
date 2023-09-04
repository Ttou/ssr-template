import type { IconifyIcons } from '@iconify/types'
import { addCollection, loadIcons } from '@iconify/vue'

const files = import.meta.glob('~/assets/icons/json/*.json', {
  as: 'raw',
  eager: true
})

async function setupIcon() {
  const icons = {} as IconifyIcons
  const iconNames = [] as string[]

  Object.keys(files).forEach(key => {
    const icon = JSON.parse(files[key])

    icons[icon.key] = icon.value
    iconNames.push(`@local:custom:${icon.key}`)
  })

  addCollection({ prefix: 'custom', icons }, 'local')
  loadIcons(iconNames)
}
setupIcon()

export default defineNuxtPlugin(nuxtApp => {
  setupIcon()
})
