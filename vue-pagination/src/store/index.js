import { createStore } from 'vuex'

import { postModule } from './posts/index';

export default createStore({
    // state: {},
    // mutations: {},
    // actions: {},
    modules: {
        namespaced: true,
        post: postModule,
    }
})