<template>
<div>
    <!--display different message if no states visited-->
    <div v-if="noStatesVisited">
        <h2>You have not visited any states.</h2>
    </div>
    <div v-else>
        <h2>You have visited:</h2>
        <!--display state name for each state visited-->
        <!--I made these links to the map page for each state-->
        <div id="state-links" v-for="state in statesVisited" v-bind:key="state.id">
        <router-link v-bind:to=" {name: 'StateMap', params: {state: state.name}}">
        {{state.name}}
        </router-link>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'StatesVisited',
    data() {
        return {
            statesVisited: [],
        }
    },
    computed: {
        noStatesVisited() {
            return this.statesVisited.length === 0
        },
    },
    mounted() {
        this.getVisitedStates()
    },
    methods: {
        getVisitedStates() {
            this.$stateService.getAllStatesVisited().then(statesVisited => {
                //set data in this component = json response from call to states
                this.statesVisited = statesVisited
            })
            .catch (err => {
                alert('Sorry, can\'t fetch state list.')
                console.error(err)
            })
        }
    }
}

</script>

<style scoped>
#state-links {
    font-size: 1.3rem;
    margin: 1rem;
}
#state-links a {
    text-decoration: none;
}
</style>