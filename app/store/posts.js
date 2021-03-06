//import moment from '~plugins/moment'
import 'moment/locale/ja'
import moment from 'moment'
moment.locale('ja')
export default moment

export const state = () => ({
    posts: []
})

export const getters = {
    posts: (state) => state.posts
}

export const mutations = {
    addPost(state, { post }) {
        state.posts.push(post)
    },
    updatePost(state, { post }){
        state.posts = state.posts.map((p) => (p.id === post.id ? post : p))
    },
    clearePosts(state) {
        state.posts = []
    }
}

export const actions = {
    async publishPost({ commit }, { payload }) {
        const user = await this.$axios.$get(`/users/${payload.user.id}.json`)
        const post_id = (await this.$axios.$post('/posts.json', payload)).name
        const created_at = moment().format()
        const post = { id: post_id, ...payload, created_at }
        const putData = { id: post_id, ...payload, created_at }
        delete putData.user
        await this.$axios.$put(`/user/${user.id}/posts.json`, [
            ...this(user.posts || []),
            putData
        ])
        commit('addpost', { post })
    }
}