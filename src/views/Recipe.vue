<template>
    <div>
        <Nav class="relative" />
        <div class="w-4/5 sm:w-3/5 mx-auto mt-10 text-left">

            <div class="sm:grid grid-cols-2 gap-2">
                <div>
                    <img class="mb-10" :src="`${curRecipe.image}`" alt="">
                </div>
                <h1 class="text-4xl sm:text-8xl font-bold font-montserrat">{{ name }}</h1>
            </div>
            
            <div class="text-xl mt-5 sm:mt-0 font-raleway tracking-wide flex space-x-5">
                <p>
                    {{ curRecipe.yield }} Servings 
                </p>
                <p> | </p>
                <p v-if="curRecipe.totalTime > 0">
                    <font-awesome-icon class="text-lg" :icon="['fas', 'clock']" /> {{ curRecipe.totalTime }} Minutes
                </p> 
            </div>

            <div class="mt-10">
                <h1 class="text-2xl sm:text-4xl font-montserrat font-bold mb-10">
                    {{ curRecipe.ingredientLines.length }} Ingredients
                </h1>
                <div class="w-4/5 sm:grid font-raleway grid-cols-2 gap-2">
                    <div class="mb-5 mr-5" v-for="(Ingredients, i) in curRecipe.ingredientLines" :key="i">
                        <font-awesome-icon class="text-xl ml-3 text-green-300" :icon="['fas', 'check']" />
                        {{ Ingredients }}
                    </div>
                </div>
            </div>

            <div class="mb-10 font-raleway">
                <p class="mb-10"> Courtsey of <span class="text-2xl">{{ curRecipe.source }} </span></p>
                <p >
                    
                    <a  class="py-5 px-10 text-xl bg-green-600 z-10 text-left text-white" target="blank" :href='`${curRecipe.url}`'>
                        Preparation Steps <font-awesome-icon class="ml-3" :icon="['fas', 'arrow-right']" />
                    </a>
                </p>
            </div>

        </div>
        
    </div>
</template>

<script>
    import Nav from '@/components/Nav.vue'
    import { mapGetters } from 'vuex'
    export default {
       components: {
           Nav
       },

        data() {
            return {
                name: this.$route.params.id,
                curRecipe: {}
            }
        },

        computed: {
            ...mapGetters(['getSearchResults'])
        },

        created() {
           const recipeItem =  this.getSearchResults.find(item => item.recipe.label === this.name)
           this.curRecipe = recipeItem.recipe
        } 
    }
</script>

<style scoped>

</style>