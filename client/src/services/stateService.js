import axios from 'axios'

//export methods for rest of code
export default {
    getAllStates() {
        return axios.get('/api/states').then(response => {
            return response.data
            //request to route to return list of states
        })
    },

    setVisited(stateName, visited) {
        //request to api/states/Iowa for example
        let data = {visited: visited}
        return axios.patch('/api/states/' + stateName, data).then(response => {
            return response.data
        })
    }
}