<template>
    <section 
        @click="close"
        class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50">
    </section>
    <div class="absolute inset-0">
        <div class="flex h-full">
            <div class="w-1/3 z-30 m-auto bg-white p-2 rounded shadow">
                <div class="p-2 border">
                    <h1 class="text-2xl text-center">Login</h1>
                    <GoogleLogin @close-login-from-google="close" />
                    <p class="my-3 text-center">OR</p>
                    <form class="p-1" @submit.prevent="submit">
                        <div class="my-4">
                            <label>Email or Username</label>
                            <input type="text" v-model="form.email" class="rounded shadow p-2 w-full" placeholder="Enter Username or Email" ref="emailRef">
                        </div>
                        <div class="my-4">
                            <label>Password</label>
                            <input type="password" v-model="form.password" class="rounded shadow p-2 w-full" placeholder="Password">
                        </div>
                        <div class="my-4">
                            <button type="submit" class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-600 text-white p-2">
                                <span v-if="!isLoading">Login</span>
                                <span v-else>⌛</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from '../utilities/firebase';
import GoogleLogin from '../components/Login/GoogleLogin'

export default {
    components:{GoogleLogin},
    data(){
        return{
            form: {
                email: '',
                password: '',
            },
            isLoading: false,
        };
    },
    methods:{
        submit(){
            this.isLoading = true;
            firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.password).then(() => {
                this.isLoading = false;
                this.form.email = '';
                this.form.password = '';
                this.close();
            }).catch(() => {
                this.isLoading = false;
                this.form.email = '';
                this.form.password = '';
                this.close(); 
            });
        },
        close(){
            this.$emit("close-login");
        },
    },
    mounted(){
        this.$refs.emailRef.focus();
    }

}
</script>

<style>

</style>