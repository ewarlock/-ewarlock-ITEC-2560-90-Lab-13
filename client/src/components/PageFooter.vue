<template>
    <div id="footer">
        <div id="navigation">
        <span class="navlink">
            <router-link to="/">Home</router-link>
        </span>

        <span class="navlink">
            <!--note to self don't forget the / or else these links-->
            <!--won't work correcty on the map page...-->
            <router-link to="/visited">View Visited States</router-link>
        </span>
        
        <span class="navlink">
            <router-link to="/about">About This Site</router-link>
        </span>
        </div>

        <div id="credits">
        Header image by 
        <a href="https://unsplash.com/@joey_csunyo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Joey Csunyo</a> on 
        <a href="https://unsplash.com/s/photos/united-states?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Unsplash</a>

<!--the website we use for icons was not recognizing me as a user for some reason-->
<!--so I got impatient with that and just made my own...-->
        <p>Map icon by Edwin</p>

        <p>State facts from the <a href="https://state-facts.herokuapp.com/">State Facts API</a>.</p>
        </div>

    </div>
</template>

<script>

export default {
    name: 'PageFooter'
}
</script>

<style scoped>
#footer {
    border: 3px ghostwhite solid;
    border-radius: .3rem;
    background-color: wheat;
    margin-top: 2rem;
    padding: 1rem;
}
#navigation {
    margin: 1rem;
}
#navigation a {
    text-decoration: none;
}
.navlink {
    font-size: 1.2rem;
    margin: 1rem;
    border: 3px ghostwhite solid;
    padding: 0.5rem;
    background: ghostwhite;
}
.navlink:hover {
    background: ivory;
}
#credits {
    margin-top: 2rem;
}
</style>
