import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseInput from './components/BaseInput.vue'
import TagsInput from './components/TagsInput.vue'
import IconButton from './components/IconButton.vue'
import Avatar from './components/Avatar.vue'
import './assets/index.css'
import VueFeather from 'vue-feather'


const app = createApp(App)
app.component('BaseInput', BaseInput)
app.component('TagsInput', TagsInput)
app.component('IconButton', IconButton)
app.component('Avatar', Avatar)
app.component(VueFeather.name, VueFeather)
app.use(router)

app.mount('#app')

