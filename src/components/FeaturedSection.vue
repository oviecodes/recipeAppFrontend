<template>
    <div>
        <section>
            <div class="relative">
                <div class="sm:flex block mx-auto my-20 justify-center items-center">
                <div class="z-10">
                    <div class="mx-auto mb-5 sm:mb-0 w-4/5 bg-pink-300 p-20">
                    <img src="../assets/burger.png" alt="" class=""> 
                    </div>
                </div>
                
                <div class="absolute top-0 right-0">
                    <img src="../assets/watercolor_stain.png" alt="" class="opacity-40 sm:opacity-70">
                </div>

                <div class="z-10">
                    <div class="mx-auto w-4/5 text-left font-raleway z-10">
                    <h1 class="font-bold text-black text-6xl mb-10">
                        THE BEST MEALS
                        <br>
                        IN THE UNIVERSE AWAITS
                    </h1>

                    <p class="text-sm tracking-wide font-montserrat mb-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        <br>
                        Facilis ex iure rem vero voluptate, sint praesentium quidem,
                        <br>
                        eius sequi, officia itaque? Eveniet quaerat eos qui sunt suscipit nisi sequi? Soluta.
                    </p>

                    <p class="text-xl text-black font-bold font-raleway">
                        EXPLORE
                        <font-awesome-icon class="" :icon="['fas', 'arrow-right']" /> 
                    </p>
                    </div>
                </div>
                </div>
            </div>

            <div class="relative">
                <div class="block sm:flex my-20 justify-center items-center">

                <div class="absolute top-0 left-0">
                    <img src="../assets/watercolor_drops.png" alt="" class="opacity-70">
                </div>
                
                <div class="z-10">
                    <div class="w-4/5 mx-auto text-left font-raleway z-10">
                    <h1 class="font-bold text-black text-6xl mb-10">
                        LEARN HOW
                        <br>
                        TO PREPARE MEALS YOU LOVE
                    </h1>

                    <p class="text-sm tracking-wide font-montserrat mb-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        <br>
                        Facilis ex iure rem vero voluptate, sint praesentium quidem,
                        <br>
                        eius sequi, officia itaque? Eveniet quaerat eos qui sunt suscipit nisi sequi? Soluta.
                    </p>

                    <p class="text-xl mb-5 sm:mb-0 text-black font-bold font-raleway">
                        EXPLORE
                        <font-awesome-icon class="" :icon="['fas', 'arrow-right']" /> 
                    </p>
                    </div>
                </div>

                <div class="">
                    <div class="mx-auto w-4/5 bg-green-300 p-20">
                    <img src="../assets/barbercue.png" alt="" class=""> 
                    </div>
                </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'FeaturedSection'
    }
</script>

<style scoped>

</style>