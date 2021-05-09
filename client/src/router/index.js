//vue router info

import {createRouter, createWebHashHistory} from 'vue-router'
//import my components to be used for router
import StateList from '@/components/StateList'
import AboutSite from '@/components/AboutSite'
import StateMap from '@/components/StateMap'
import StatesVisited from '@/components/StatesVisited'
import NotFound from '@/components/NotFound'

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
            //for about page
            path: '/about',
            name: 'AboutSite',
            component: AboutSite
        },
        {
            //for state map page
            path: '/map/:state',
            name: 'StateMap',
            component: StateMap
        },
        {
            //for all states visited page
            path:'/visited',
            name: 'StatesVisited',
            component: StatesVisited
        },
        {
            //matches everything else
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})