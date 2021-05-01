<template>
    <div>
        <div id="navigation">
        <span class="navlink">
            <router-link to="/">Home</router-link>
        </span>
        
        <span class="navlink">
            <router-link to="about">About This Site</router-link>
        </span>
        </div>

        <div id="credits">
        Header image by 
        <a href="https://unsplash.com/@joey_csunyo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Joey Csunyo</a> on 
        <a href="https://unsplash.com/s/photos/united-states?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Unsplash</a>
        </div>

    </div>
</template>

<script>

export default {
    name: 'PageFooter'
}
</script>

<style scoped>
.navlink {
    margin: 1rem;
}
</style>
