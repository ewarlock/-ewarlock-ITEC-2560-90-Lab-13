//vue router info

import {createRouter, createWebHashHistory} from 'vue-router'
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            //path is homepage of app
            path: '/',
            //associate homepage with StateList component
            name: 'StateList',
            component: StateList
        },
        {
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        }
    ]
})