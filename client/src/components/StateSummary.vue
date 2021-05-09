<template>
<div>

<p>There are {{states.length}} states.</p>

<h2 id="all-visited-message" v-if="areAllVisited">You have visited all the states.</h2>
<h2 v-else>You have visited {{totalVisited}} {{units}}.</h2>


</div>
</template>

<script>

export default {
    name: 'StateSummary',
    props: {
        states: Array
    },
    computed: {
        totalVisited() {
            let visitedCount = 0
            this.states.forEach(state => {
                if (state.visited)
                    visitedCount++
            })
            return visitedCount
        },
        units() {
            if (this.totalVisited ==1) {
                return 'state'
            } else {
                return 'states'
            }
        },
        areAllVisited() {
            return this.totalVisited === this.states.length
        }
    }
}

</script>

<style scoped>
#all-visited-message {
    color: darkgreen;
}
</style>