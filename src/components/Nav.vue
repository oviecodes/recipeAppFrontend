


<template>
    <div class="w-full bg-white fixed top-0 shadow-lg">


        <div class="w-11/12 mx-auto flex justify-between justify-center items-center px-5 py-7">
            <div class="text-black sm:text-left text-center text-4xl font-bold font-pacifico">
                <h1>Recipee</h1>
            </div>
            <div @click="toggleMobileMenu" class="md:hidden">
                <font-awesome-icon v-if='!mobileMenu' class="text-xl" :icon="['fas', 'bars']" />
                <font-awesome-icon v-if='mobileMenu' class="text-xl" :icon="['fas', 'times']" />
            </div>
            <!-- desktop view -->
            <div class="flex bg-white space-x-12 hidden sm:block text-black-200 font-raleway tracking-wide items-center">
                <router-link to="/">HOME</router-link> 
                <router-link to="/explore">SEARCH RECIPES</router-link>
                <router-link to="/register" v-if="!user">SIGN UP</router-link>
                <router-link to="/login" v-if="!user">LOGIN</router-link>
                <router-link to="/bookmarks" v-if="user">
                    <font-awesome-icon class="text-xl" :icon="['fas', 'bookmark']" /> BOOKMARKS
                </router-link>
                <router-link to="" v-if="user">
                    <font-awesome-icon class="text-xl" :icon="['fas', 'user-circle']" /> {{ user.username }}
                </router-link>
                <span @click="logout">
                  <router-link to="" v-if="user">LOGOUT</router-link>  
                </span>
                
            </div>
        </div>

         <!-- mobile view -->
        <div v-if="mobileMenu" class="h-screen md:hidden text-2xl text-left font-raleway p-10">
            <router-link to="/" class="block my-7">HOME</router-link>
            <hr>
            <router-link to="/explore" class="block my-7">SEARCH RECIPES</router-link>
            <hr>
            <router-link to="/register" v-if="!user" class="block my-7">SIGN UP</router-link>
            <hr>
            <router-link to="/login" v-if="!user"  class="block my-7">LOGIN</router-link>
            <hr>
            <router-link to="/bookmarks" v-if="user"  class="block my-7">
                <font-awesome-icon class="text-xl" :icon="['fas', 'bookmark']" /> BOOKMARKS
            </router-link>
            <hr>
            <router-link to="" v-if="user"  class="block my-7">
                <font-awesome-icon class="text-xl" :icon="['fas', 'user-circle']" /> {{ user.username }}
            </router-link>
            <hr>
            <span @click="logout"  class="block my-7">
                <router-link to="" v-if="user">LOGOUT</router-link>  
            </span>
        </div>
    </div>
</template>

<script>
    // import { mapGetters } from 'vuex'
    export default {
        name: 'Nav',

        data() {
            return {
                user: {},
                mobileMenu: false
            }
        },

        mounted() {
            this.user = JSON.parse(window.localStorage.getItem('userData'))
        },

        methods: {
            logout() {
                window.localStorage.removeItem('jwt')
                window.localStorage.removeItem('userData')
                window.localStorage.removeItem('bookmarks')
                this.$router.push('/login')
            },

            toggleMobileMenu() {
                this.mobileMenu = !this.mobileMenu
            }
        }
    }
</script>

<style scoped>

</style>