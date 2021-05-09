<template>
<div>
    <h2>Page Not Found</h2>

    <div id="go-home-link">
        <!--navigation link with route name. uses name of router path-->
        Would you like to <router-link v-bind:to="{name: 'StateList'}"> go to the home page?</router-link>
    </div>
</div>
</template>

<script>


export default {
    name: 'NotFound',
}
</script>

<style scoped>
#go-home-link {
    margin: 1rem;
}
</style>
