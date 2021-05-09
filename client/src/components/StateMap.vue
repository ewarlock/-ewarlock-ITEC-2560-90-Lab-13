<template>
    <div class="state-map">
        <h2>The state of {{state.name}}</h2>

        <p>{{stateFact}}</p>

        <p v-if="state.visited">You have visited this state.</p>
        <p v-else>You have not visited this state.</p>

        <!--only show map if data ready-->
        <div id="map-container" v-if="dataReady">
            <!--leaflet component defined in library-->
            <!--ref is a reference to our html element-->
            <l-map ref="map" v-on:ready="onMapReady" v-bind:center="mapCenter" v-bind:zoom="state.zoom">
                <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution ="&copy; OpenStreetMap contributors">
                </l-tile-layer>
            </l-map>

        </div>

    </div>
</template>

<script>
//import them like you do with other vue components
import {LMap, LTileLayer} from '@vue-leaflet/vue-leaflet'

export default {
    name: 'StateMap',
    components: {
        LMap, LTileLayer
    },
    data() {
        return {
            state: {},
            stateFact: "",
            dataReady: false,
            mapReady: false
        }
    },
    mounted() {
        //$route is global property by vue router
        //so information for page is being set by router
        this.state.name = this.$route.params.state
        this.fetchStateData()
        this.getStateFact()
    },
    methods: {
        fetchStateData() {
            //argument comes from the state name provided from vue router
            this.$stateService.getOneState(this.state.name).then(state => {
                this.state = state
                this.dataReady = true
            }).catch( err => {
                //404 not found
                if (err.response && err.response.status === 404) {
                    this.$router.push({name: 'NotFound'})
                } else {
                //500 error, server error
                    alert('Sorry, error fetching data about the state.') //for the user
                    console.error(err) //for the developer
                }
            })
        },
        getStateFact() {
            //added this to get a state fact
            if (this.state.name === "Washington DC") //doesn't let us ask the state fact API for a state they don't have...
                this.stateFact = "Washington DC has been the federal capital of the United States since 1800."
            else {
                this.$stateService.getStateFact(this.state.name).then(state => {
                //set data in this component = json response from call to states
                    this.stateFact = state.fact
                })
                .catch (err => {
                alert('Sorry, can\'t get state fact.')
                console.error(err)
                })
            }
        },
        onMapReady() {
            this.mapReady = true
        },
        setMapView() {
            if (this.mapReady && this.dataReady) {
                //make show map shows correct part of world and zoom level
                //fixes the issue of map and fetch request taking time to load

                //refer to html element with ref map
                this.$refs.map.leafletObject.setView(this.mapCenter, this.zoom)
            }
        }
    },
    computed: {
        mapCenter() {
            //refer to computer properties as properties don't put ()
            return [this.state.lat, this.state.lon]
        }
    }
}
</script>

<style scoped>

#map-container {
    height: 30rem;
    margin: 0rem 1.5rem;
    border: 3px solid ghostwhite;
}

</style>