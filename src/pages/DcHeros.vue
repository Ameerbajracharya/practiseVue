<template>
    <div class="m-auto">
        <h1 class="text-2xl text-center my-2">Dc Heros {{ herosCount }}</h1>
        <ol>
        <li class="flex justify-between" v-for="(hero, index) in dcHeros" :key="hero.name">{{ hero.name }}
            <button @click="remove(index)">x</button>
        </li>
        </ol>
        <input class="mt-10 border rounded p-1" type="text" v-model.trim="newHero" placeholder="Super Hero" ref="newHeroRef">
        <button @click="addHero()" class="border rounded bg-gradient-to-r from-green-700 to-green-500 text-white p-1 px-2 ml-1">Add Hero</button>
    </div>
</template>

<script>
    import { ref, onMounted, computed } from 'vue';
    export default {
        setup(){
            const newHeroRef = ref("");
            const dcHeros = ref([
                {name: "SuperGirl"},
                {name: "Flash"},
                {name: "Batman"},
                {name: "Arrow"}
            ]);
            const isActive =  true;
            const newHero = ref("");

            onMounted(() => {
                newHeroRef.value.focus();
            });

            const herosCount = computed({
                get: () => dcHeros.value.length,

            });

            function remove(index) {
                dcHeros.value = dcHeros.value.filter((hero, i) => i != index);
            }
            
            function addHero() {
                if(newHero.value == '') {
                    return;
                }
                dcHeros.value.unshift({name: newHero.value});
                newHero.value = "";
            }

            return {
                dcHeros,
                newHero,
                isActive,
                remove,
                addHero,
                newHeroRef,
                herosCount
            }
        },
    }
</script>

<style>

</style>