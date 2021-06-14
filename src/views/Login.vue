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
                        <router-link to="/">
                            <font-awesome-icon class="mr-5" :icon="['fas', 'arrow-left']" /> HOME
                        </router-link> 
                    </div>
                    
                    <h1 class="font-bold text-left font-montserrat text-4xl sm:text-6xl mb-10">
                        Login. To. Recipee
                    </h1>

                    <p v-show="error" class="text-sm text-red-500">{{ errorMsg }}</p>

                    <form @submit="login">
                        <div class="my-5">
                            <h1 class="text-left font-bold mb-5 font-montserrat">Email</h1>
                            <input type="email" v-model="email" class="text-sm outline-none pb-5 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                        </div>
                        <div class="my-5">
                            <h1 class="text-left font-bold mb-5 font-montserrat">Password</h1>
                            <input type="password" v-model="password" class="text-sm outline-none pb-5 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                        </div>
                        
                        <button type="submit" :disabled="password.length < 3" class="bg-green-400 p-5 text-white">
                            Login <font-awesome-icon class="ml-3" :icon="['fas', 'arrow-right']" /> 
                        </button>
                        <p class="my-2">
                            <router-link to="/forgotpassword" >Forgot Password?</router-link>
                        </p>
                        
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
                password: '',
                error: false,
                errorMsg: `Invalid credentials`
            }
        },

        methods: {
            async login(e) {
                e.preventDefault()
                try {
                    const res = await this.axios.post(`http://localhost:1337/auth/local`, {
                        identifier: this.email,
                        password: this.password
                    });
                    
                    const { jwt, user } = res.data

                    window.localStorage.setItem('jwt', jwt)
                    window.localStorage.setItem('userData', JSON.stringify(user))
                    window.localStorage.setItem('bookmarks', JSON.stringify(user.bookmarks))

                    this.$router.push('/')
                } catch(error) {
                    this.error = true
                    this.email = ''
                }
            },

            // async forgotPassword() {
            //     await this.axios.post(`http://localhost:1337/auth/forgot-password`)
            // }
        }
    }
</script>

<style scoped>

</style>