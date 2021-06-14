<template>
    <div>
        <div class="flex items-center justify-center h-screen">
            <div class="hidden sm:block w-1/2 bg-cover h-screen" style='background: url(newFood.png)'>
                <div class="bg-blue-800 w-full h-screen bg-opacity-20">

                </div>
            </div>

            <div class="sm:w-1/2">
                <div class="p-5 w-4/5 mx-auto text-left font-raleway">
                    <div class="text-left mb-7">
                        <router-link to="/">
                            <font-awesome-icon class="mr-5" :icon="['fas', 'arrow-left']" /> HOME
                        </router-link> 
                    </div>
                    <h1 class="font-bold text-left font-montserrat text-4xl sm:text-6xl mb-7">
                        Sign Up. To. Join Recipee
                    </h1>

                    <p v-show="error" class="text-sm text-red-500">{{ errorMsg }}</p>

                    <form @submit="register">
                        <div class="my-4">
                            <h1 class="text-left font-bold mb-2 font-montserrat">Name</h1>
                            <input type="text" v-model="name" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                        </div>
                        <div class="my-4">
                            <h1 class="text-left font-bold mb-2 font-montserrat">Email</h1>
                            <input type="email" v-model="email" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                        </div>
                        <div class="my-4">
                            <h1 class="text-left font-bold mb-2 font-montserrat">Password</h1>
                            <input type="password" v-model="password" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                        </div>
                        <div class="my-4">
                            <h1 class="text-left font-bold mb-2 font-montserrat">Username</h1>
                            <input type="text" v-model="username" class="text-sm outline-none pb-2 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                        </div>
                        
                        <button type="submit" :disabled="name.length < 6 || password.length < 6 || username.length < 3" class="bg-green-400 p-5 text-white">
                            Sign Up <font-awesome-icon class="ml-3" :icon="['fas', 'arrow-right']" /> 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import RegisterForm from '@/components/RegisterForm.vue'
    export default {
        name: 'Register',
        // components: {
        //     RegisterForm
        // },
        data() {
            return {
                name: '',
                email: '',
                password: '',
                username: '',
                error: false,
                errorMsg: `A user with that e-mail already exists`
            }
        },

        methods: {
            async register(e) {
                try {
                    e.preventDefault()
                        const newUser = await this.axios.post(`https://strapi-recipee-app.herokuapp.com/auth/local/register`, {
                        name: this.name,
                        password: this.password,
                        email: this.email,
                        username: this.username
                    })
                    console.log(newUser)
                    this.$router.push('login')
                } catch(e) {
                    this.error = true
                    console.log(e)
                } 
            }
        }
    }
</script>

<style scoped>

</style>