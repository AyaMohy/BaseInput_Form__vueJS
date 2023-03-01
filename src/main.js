import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
// import requireContext from 'require-context'

// const requireComponent = require.context(
//   './components',
//   false,
//   /Base[A-Z]\w+\.(vue|js)$/
// )

const app = createApp(App)

app.use(router)
app.mount('#app')