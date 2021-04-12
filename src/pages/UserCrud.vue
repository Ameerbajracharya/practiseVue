<template>
    <section class="flex w-full">
        <div class="m-auto">
            <div class="mt-10">
                <button class="px-2 py-1 border rounded my-4" @click="isModalOpen = true">Add User</button>
                <table>
                    <thead>
                        <tr>
                            <th class="px-4 py-2 border">ID</th>
                            <th class="px-4 py-2 border">Avatar</th>
                            <th class="px-4 py-2 border">Name</th>
                            <th class="px-4 py-2 border">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in state.users" :key="user.id">
                            <td class="border px-4 py-2">{{ user.id }}</td>
                            <td class="border px-4 py-2"><img :src="user.avatar" :alt="user.name" width="50" class="rounded-full"></td>
                            <td class="border px-4 py-2">{{ user.name }}</td>
                            <td class="border px-4 py-2">{{ user.email }}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex justify-between">
                    <button 
                        :disabled="state.users.page == 1" 
                        class="mt-2 px-3 py-2 border rounded hover:shadow" 
                        @click="prev"
                        :class="state.users.page == 1 ? 'bg-gray-100' : ''"
                    >Prev</button>
                    <button 
                        :disabled="state.users.page == state.users.total_pages" 
                        class="mt-2 px-3 py-2 border rounded hover:shadow" 
                        :class="state.users.page == state.users.total_pages ? 'bg-gray-100' : ''"
                        @click="next"
                    >Next</button>
                </div>
            </div>
        </div>
    </section>
    <teleport to="body">
        <Modal v-if="isModalOpen" @closeModal="isModalOpen = false">
            <template #title>
                Add New User
            </template>
            <template #body>
                <form @submit.prevent="submit">
                    <div class="p-2">
                        <label for="">User Name</label>
                        <input class="w-full p-2 rounded border" placeholder="User Name" v-model="state.form.name">
                    </div>
                    <div class="p-2">
                        <label for="">Email</label>
                        <input class="w-full p-2 rounded border" placeholder="User Email" type="email" v-model="state.form.email">
                    </div>
                    <div class="p-2">
                        <label for="">Avatar</label>
                        <input class="w-full p-2 rounded border" placeholder="Avatar Url" type="text" v-model="state.form.avatar">
                    </div>
                    <div class="p-2">
                        <input class="w-full p-2 rounded border hover:bg-gray-300" value="Submit" type="submit">
                    </div>
                </form>
            </template>
        </Modal>
    </teleport>
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
import axios from '../plugins/axios'
import Modal from '../components/Modal'

export default {
    components: { Modal },
    setup(){
        const isModalOpen = ref(false);
        const state = reactive({
            users: [],
            page: 1,
            form:{
                name:"",
                email:"",
                avatar:"",
            }
        });
        onMounted(async () => {
           const { data } = await axios.get(`/users`);
           state.users = data;
        });

        async function next() {
            state.page = state.page + 1;
            const { data } = await axios.get(`/users?page=` + state.page);
            state.users = data;
        }

        async function prev() {
            state.page = state.page - 1;
            const { data } = await axios.get(`/users?page=` + state.page);
            state.users = data;
        }

        async function submit() {
            const data = await axios.post('/users', state.form);
            console.log(data);
            state.form.name = '';
            state.form.email = '';
            state.form.avatar = '';
            isModalOpen.value = false;
        }

        return { state, next, prev, isModalOpen, submit };
    }
}
</script>

<style>

</style>