<template>
<div class="m-auto">
   <h1 class="text-2xl my-2 text-center">Calendar</h1>
   <section class="mx-2 flex justify-between">
        <h2 class="font-bold">{{ currentMonth }}</h2>
        <h2 class="font-bold">{{ currentYear }}</h2>
   </section>
   <section class="flex my-2">
       <p v-for="day in days" :key="day" style="width: 14.28%" class="text-center"> {{ day }} </p>
   </section>
   <section class="flex flex-wrap">
       <p v-for="num in startDay()" :key="num" style="width: 14.28%" class="text-center"></p>
       <p v-for="num in daysInMonth()" :key="num" style="width: 14.28%" class="text-center">{{ num }}</p>
   </section>
   <section class="flex justify-between my-4">
       <button class="px-2 border rounded" @click="previous">Previous</button>
       <button class="px-2 border rounded" @click="next">Next</button>
   </section>
</div>
</template>

<script>
export default {
    data(){
        return {
            month: new Date().getMonth(),
            currentYear: new Date().getFullYear(),
            days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        }
    },
    methods:{
        daysInMonth(){
            return new Date(this.currentYear, this.month + 1, 0).getDate();
        },
        startDay(){
            return new Date(this.currentYear, this.month, 1).getDay();
        },
        next(){
            this.month++;
        },
        previous(){
            this.month--;
        },
    },
    computed:{
        currentMonth(){
            return new Date(this.currentYear, this.month).toLocaleString('default', {month: 'long'});
        }
    }
}
</script>

<style>

</style>