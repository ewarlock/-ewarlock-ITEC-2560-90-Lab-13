import axios from 'axios'

//export methods for rest of code
export default {
    getAllStates() {
        return axios.get('/api/states').then(response => {
            return response.data
            //request to route to return list of states
        })
    },

    getAllStatesVisited() {
        //to return only states with visited true
        return axios.get('/api/states/visited').then(response => {
            return response.data
        })
    },

    setVisited(stateName, visited) {
        //request to api/states/Iowa for example
        let data = {visited: visited}
        return axios.patch('/api/states/' + stateName, data).then(response => {
            return response.data
        })
    },

    getOneState(stateName) {
        //don't forget forward slash
        return axios.get('/api/state/' + stateName).then(response => {
            return response.data
        })
    },

    getStateFact(stateName) {
        //I am not sure if this should go here or in the component? I put it here
        //putting it here makes it available for other components, right? which might be useful?
        return axios.get('https://state-facts.herokuapp.com/api/fact/' + stateName).then(response => {
            return response.data
        })
    }
}