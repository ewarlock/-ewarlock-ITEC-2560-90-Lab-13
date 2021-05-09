<template>
<div>
    <div>
        <state-summary v-bind:states="states"></state-summary>
    </div>
    <div class="state-list-container">
        <div v-for="state in states" v-bind:key="state.name" class="state-container">
            <!--one state detail component per state in states-->
            <!--bind state to state property in state detail-->
            <state-detail v-bind:state="state"
            v-on:update-visited="updateVisited"
            ></state-detail>
        </div>
    </div>
</div>
</template>

<script>

import StateDetail from '@/components/StateDetail.vue'
import StateSummary from '@/components/StateSummary.vue'

export default {
    name: 'StateList',
    components: {
        StateDetail,
        StateSummary,
    },
    data() {
        return {
            states: []
        }
    },
    mounted() {
    //lifecycle hooks
        this.fetchAllStates()
    },
    methods: {
        fetchAllStates() {
            this.$stateService.getAllStates().then(states => {
                //set data in this component = json response from call to states
                this.states = states
            })
            .catch (err => {
                alert('Sorry, can\'t fetch state list.')
                console.error(err)
            })
        },
        updateVisited(stateName, visited) {
            this.$stateService.setVisited(stateName, visited).then( () => {
                //fetches all states again after visited is changed
                this.fetchAllStates()
            })
            .catch (err => {
                alert('Sorry, can\'t update states.')
                console.error(err)
            })
        }
    }
}
</script>

<style scoped>

.state-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.state-container {
    margin: .5rem;
}
</style>