<template>

    <!--when testing the site I kept wanting to click on the header to go to the home page-->
    <!--so I decided to just make it a link to the home page...-->
    <router-link to="/">
        <div id="block-header">
            <h1 id="title">Have you visited every state?</h1>
        </div>
    </router-link>

</template>

<script>

export default {
    name: 'PageHeader',
}
</script>

<style scoped>
a {
    text-decoration: none;
}

#block-header {
    padding: 2rem;
    margin-bottom: 1rem;
    border: 3px ghostwhite solid;
    border-radius: .3rem;
    background-color: burlywood;
    background-image: url('~@/assets/header-us-map.jpg');
    background-size: cover;
    background-blend-mode: multiply;
    background-position: center;
}

#title {
    color: ghostwhite;
    text-align: left;
    text-indent: 1rem;
    font-style: italic;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: lighter;
    text-shadow: darkslategray 1px 1px;
    }
</style>
