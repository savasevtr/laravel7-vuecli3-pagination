import axios from 'axios'

export const actions = {

    getPosts({ commit, state }) {
        state.posts_loading = true

        axios.get('/posts?page=' + state.pagination.current_page)
            .then(response => {
                commit('setPosts', response.data)
            })
    },

}