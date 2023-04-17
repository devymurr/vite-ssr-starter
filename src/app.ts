import { createSSRApp, defineComponent, h } from 'vue'
import App from './App.vue'
import { setPageContext } from './composables/usePageContext'
import type {
  Component,
  PageContext,
  PageProps,
} from './types/usePageContextTypes'

export { createApp }

function createApp(
  Page: Component,
  pageProps: PageProps | undefined,
  pageContext: PageContext
) {
  const PageWithLayout = defineComponent({
    render() {
      return h(App, null, {
        default() {
          return h(Page, pageProps || null)
        },
      })
    },
  })

  const app = createSSRApp(PageWithLayout)

  setPageContext(app, pageContext)

  return app
}
