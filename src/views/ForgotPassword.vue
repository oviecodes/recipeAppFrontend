<template>
    <div>
        <div class="flex items-center justify-center h-screen">
            <div class="hidden sm:block w-1/2 bg-cover h-screen" style='background: url(newFood.png)'>
                <div class="bg-blue-800 w-full h-screen bg-opacity-20">

                </div>
            </div>

            <div class="sm:w-1/2">
                <div class="p-5 w-4/5 mx-auto text-left font-raleway">
                    <div class="text-left mb-10"> 
                        <router-link to="/login">
                            <font-awesome-icon class="mr-5" :icon="['fas', 'arrow-left']" /> Login
                        </router-link> 
                    </div>
                    
                    <h1 class="font-bold text-left font-montserrat text-4xl sm:text-6xl mb-10">
                        Recover Your. Recipee. Password
                    </h1>

                    <p v-show="done" class="text-sm text-green-500">Password reset link has been sent to {{ email }}</p>
                    <p v-show="error" class="text-sm text-red-500">An error occurred</p>

                    <form @submit="forgotPassword">
                        <div class="my-5">
                            <h1 class="text-left font-bold mb-5 font-montserrat">Email</h1>
                            <input type="email" v-model="email" class="text-sm outline-none pb-5 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                        </div>
                        
                        <button type="submit" class="bg-green-400 p-5 text-white">
                            Send Email link <font-awesome-icon class="ml-3" :icon="['fas', 'arrow-right']" /> 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import LoginForm from '@/components/LoginForm.vue'
    export default {
        name: 'Login',
        // components: {
        //     LoginForm
        // }
        data() {
            return {
                email: '',
                done: false,
                error: false,
            }
        },

        methods: {
            async forgotPassword(e) {
                e.preventDefault()
                this.done = false;
                this.error = false;
                this.axios.post(`https://strapi-recipee-app.herokuapp.com/auth/forgot-password`, {
                    email: this.email
                })
                .then((res) => {
                    this.done = true
                })
                .catch(e => {
                    e;
                    this.error = true
                })
            }
        }
    }
</script>

<style scoped>

</style>