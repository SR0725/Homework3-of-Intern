import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import { loadFonts } from './plugins/webfontloader'
loadFonts()

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faBars,
    faTrash
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faBars,
    faTrash
)

import './style.css'


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(vuetify)
    .mount('#app')
