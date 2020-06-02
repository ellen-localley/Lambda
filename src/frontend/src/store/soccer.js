import axios from 'axios'

const state = {
    soccer: [],
    movie: [],
    music: [],
    context: "http://localhost:5000/",
    pageNumber: 0
}
const actions = {
    async find({commit},searchWord){
        alert('>>>>'+searchWord)
        commit('TEST',searchWord)
        switch (searchWord) {
            case '영화': router.push('/Movie')
                break
            case '음악': router.push('/Music')
                break
            case '축구': router.push('/Soccer')
                break
        }
    },
    async movieInit(){
        axios.get(state.context+"movie/list/0/none")
            .then(({data}) => {
                commit("SEARCH",data)
                router.push("/movie")
            })
            .catch(()=>{
                alert("영화 통신 실패")
            })
    }
}
const mutations = {
    SEARCH(){
        alert('뮤테이션 진입')
    }
}
const getters = {

}
export default {
    name: 'search',
    namespaced: true,
    state,
    actions,
    mutations,
    getters

}