<template>
    
    <div id="block-header">
        <h1 id="title">Have you visited every state?</h1>
    </div>
</template>

<script>

export default {
    name: 'PageHeader',
}
</script>

<style scoped>

#block-header {
    padding: 2rem;
    margin-bottom: 1rem;
    border: 1px ghostwhite solid;
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
