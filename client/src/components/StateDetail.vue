<template>
<div class="state-info">
    <span class="state-name">{{state.name}}</span>

    <div>
        <input class="visit-state" type="checkbox" v-model="visited" v-on:change="visitedChanged">
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
            visited: this.state.visited
        }
    },
    methods: {
        visitedChanged() {
            this.$emit('update-visited', this.state.name, this.visited)
        }
    }
}

</script>

<style scoped>
.state-info {
    padding: 1rem;
    height: 8rem;
    width: 10rem;
    border: 1px ghostwhite solid;
    border-radius: .3rem;
    background-color: gainsboro;
    text-align: center;
}

.visit-state {
    margin: 1rem;
    text-align: center;
}
</style>