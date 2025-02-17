import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './styles.css';

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
app.use(router)
app.use(vuetify)
registerPlugins(app)

app.mount('#app')
