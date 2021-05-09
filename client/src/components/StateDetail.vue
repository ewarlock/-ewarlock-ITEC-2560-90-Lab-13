<template>
<div class="state-info">
    <span class="state-name">{{state.name}}</span>

    <div>
        <!-- changes "visited" in data for selected state -->
        <input class="visit-state" type="checkbox" v-model="visited" v-on:change="visitedChanged">
    </div>

    <div>
        <!--navigating to /map/Iowa for example-->
        <router-link v-bind:to=" {name: 'StateMap', params: {state: state.name}}">
            <img class="map-icon" src="@/assets/map-icon.png">
        </router-link>
    </div>
</div>


</template>

<script>

export default {
    name: 'StateDetail',
    emits: ['update-visited'],
    props: {
        state: Object //don't modify props, ok to modify data
    },
    data() {
        return {
            visited: this.state.visited,
        }
    },
    methods: {
        visitedChanged() {
            this.$emit('update-visited', this.state.name, this.visited)
        },
    }
}

</script>

<style scoped>
.state-name {
    font-weight: bold;
}
.map-icon {
    max-width: 4rem;
}
.state-info {
    padding: 1rem;
    height: 8rem;
    width: 10rem;
    border: 3px ghostwhite solid;
    border-radius: .3rem;
    background-color: wheat;
    text-align: center;
}

.visit-state {
    margin: 1rem;
    text-align: center;
}
</style>