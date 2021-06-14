import Vue from "vue";

const state = {
    searchParam: '',
    searchResults: [],
    bookmarks: JSON.parse(window.localStorage.getItem('bookmarks'))
}

const getters = {
    getSearchResults: state => state.searchResults,

    getSearchParam: state => state.searchParam,

    getBookmarks: state => {
        return state.bookmarks
    }
}

const actions = {
    async fetchSearchResult ({ commit }, searchItem) {
         
        const res = await Vue.axios.get(`https://api.edamam.com/search?q=${searchItem}&app_id=fff942a6&app_key=f8072cf215a378725c6fbe01b13b7364&from=0&to=20`)
        console.log(res)
        const results = res.data.hits
        commit('updateSearchResults', results)
    },

    async fetchSearchItem ({ commit }, item) {
        commit('updateSearchItem', item)
    },

    // async addBookmark({ commit }, bookmarkItem) {
    //     const bookmarks = JSON.parse(window.localStorage.getItem('userData')).bookmarks
    //     bookmarks.length === 0 ? bookmarks.push(item) :
    //         bookmarks.findIndex(recipe => recipe.label === item.label) === -1 ?
    //             bookmarks.push(item) : ''
    //     commit('updateBookmark', bookmarkItem)
    // },

    // async addBookmarkToBackend({ commit }, bookmarkItem) {
        
    // }
}

const mutations = {
    updateSearchResults: (state, results) => {
        state.searchResults = results
    },

    updateSearchItem: (state, item) => {
        state.searchParam = item
    },

    // updateBookmark: (state, item) => {
    //     // console.log(`item`, state.bookmarks.find((recipe) => 
    //     //         recipe.label === item.label))
       
    //     state.bookmarks.length === 0 ? state.bookmarks.push(item) :
    //         state.bookmarks.findIndex(recipe => recipe.label === item.label) === -1 ?
    //             state.bookmarks.push(item) : ''

    
    // }
}

export default {
    state,
    getters,
    actions,
    mutations
}