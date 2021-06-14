<template>
    <div>
        <section>
            <div class=" h-screen bg-cover" style="background: url(newFood.png)">
                <div class="bg-blue-800 bg-opacity-50">
                    <div class="mx-auto h-screen flex text-white justify-left sm:w-4/5 items-center">
                        <div class="text-left font-montserrat mx-5 z-10">
                            <h1 class="text-6xl font-black my-10 z-10">
                                FIND THE
                                <br>
                                WORLD'S BEST
                                <br> 
                                RECIPES ONLINE 
                            </h1>
                            <router-link to='/explore' class="py-5 px-10 text-xl bg-green-600 z-10">
                                Search Recipes
                                <font-awesome-icon class="ml-3" :icon="['fas', 'arrow-right']" /> 
                            </router-link>                       
                        </div>

                        <div class="text-8xl absolute right-0 font-lato hidden sm:block font-bold overflow-y-hidden w-1/2"> 
                        <img src="../assets/undraw_breakfast-removebg-preview.png" alt="" class="w-full"> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'HeroSection'
    }
</script>

<style scoped>

</style>