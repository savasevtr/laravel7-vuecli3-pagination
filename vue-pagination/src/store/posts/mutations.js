export const mutations = {

    // setPosts(state, payload) {
    //     state.posts = payload.data.data
    //     state.pagination = payload.pagination;
    //     state.posts_loading = false
    // },

    setPosts(state, payload) {
        state.posts = payload.data

        state.pagination = {
            'total': payload.total,
            'per_page': payload.per_page,
            'current_page': payload.current_page,
            'last_page': payload.last_page,
            'from': payload.from,
            'to': payload.to
        };

        state.posts_loading = false
    },
}