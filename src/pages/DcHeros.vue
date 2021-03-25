<template>
    <div class="m-auto">
        <h1 class="text-2xl text-center my-2">Dc Heros {{ herosCount }}</h1>
        <ol>
        <li class="flex justify-between" v-for="(hero, index) in dcHeros" :key="hero.name">{{ hero.name }}
            <button @click="remove(index)">x</button>
        </li>
        </ol>
        <input class="mt-10 border rounded p-1" type="text" v-model.trim="newHero" placeholder="Super Hero">
        <button @click="addHero()" class="border rounded bg-gradient-to-r from-green-700 to-green-500 text-white p-1 ml-1">Add Hero</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isActive: true,
                newHero: "",
                dcHeros: [
                {name: "SuperGirl"},
                {name: "Flash"},
                {name: "Batman"},
                {name: "Arrow"}
                ],
            } 
        },
        methods:{
            addHero(){
                if(this.newHero == ''){
                return;
                }
                this.dcHeros.unshift({name: this.newHero});
                this.newHero = "";
            },
            remove(index){
                this.dcHeros = this.dcHeros.filter((hero, i) => i != index);
            }
        },
        computed: {
            herosCount(){
                return this.dcHeros.length;
            },
        }
    }
</script>

<style>

</style>