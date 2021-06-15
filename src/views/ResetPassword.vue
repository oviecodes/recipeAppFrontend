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

                    <p v-show="error" class="text-sm text-red-500">An Error Occurred, Please Try Again</p>

                    <form @submit="resetPassword">
                        <div class="my-5">
                            <h1 class="text-left font-bold mb-5 font-montserrat">Password</h1>
                            <input type="password" v-model="password" class="text-sm outline-none pb-5 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                        </div>

                        <div class="my-5">
                            <h1 class="text-left font-bold mb-5 font-montserrat">Confirm Password</h1>
                            <input type="password" v-model="confirmPassword" class="text-sm outline-none pb-5 w-4/5 bg-transparent border-b hover:border-blue-700 focus:border-blue-700">
                        </div>
                        
                        <button type="submit" :disabled="password.length < 3 || password !== confirmPassword" class="bg-green-400 p-5 text-white">
                            Reset Password <font-awesome-icon class="ml-3" :icon="['fas', 'arrow-right']" /> 
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
                password: '',
                confirmPassword: '',
                done: false,
                Msg: `Password reset link has been sent to ${this.email}`,
                error: false,
            }
        },

        methods: {
            async resetPassword(e) {
                e.preventDefault()
                this.axios.post(`https://strapi-recipee-app.herokuapp.com/auth/reset-password`, {
                    code: this.$route.query.code,
                    password: this.password,
                    passwordConfirmation: this.confirmPassword
                })
                .then(() => {
                    this.done = true
                    this.$router.push("login")
                })
                .catch(e => {
                    e;
                    this.error = true
                })
            }
        },
    }
</script>

<style scoped>

</style>