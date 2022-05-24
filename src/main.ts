import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createRouter, createWebHashHistory} from 'vue-router';
import Justice from './components/Justice.vue';
import Justice2 from './components/Justice2.vue';

const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Justice},
        {path: '/xxx', component: Justice2}
    ]
});
const app = createApp(App);
app.use(router);
app.mount('#app');