export const storage = {
    state: {
        data:[],
        country: '',
        city: '',
        uniqcity: [],
    },
    getters:{
        getData(state){
            return state.data
        },
        getCountry(state){
            return state.country
        },
        getCity(state){
            return state.city
        },
        getUniqCity(state){
            return state.uniqcity
        },
       
      
    },
    mutations: {
       
        setData(state, payload) {
          state.data = payload
        },
        
        setCountry(state, payload) {
          state.country = payload
        },
        setCity(state, payload) {
          state.city = payload
        },
        setUniqCity(state, payload) {
          state.city = payload
        },
        clrCity(state, payload) {
          state.city = ''
        },
       
    }
}
