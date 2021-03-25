<template>
    <div class="flex flex-wrap relative w-full">
        <div 
            v-for="(color,index) in sliders" 
            :key="color" 
            class="w-full absolute" >
            <transition name="fade">    
                <div 
                    v-if="currentSlide == index" 
                    :class="color" 
                    style="height:350px"></div>
            </transition>
        </div>
        <div class="w-full" style="height: 340px;">
            <div class="absolute bottom-0 flex w-full justify-center">
                <div 
                    v-for="(slider, index) in sliders" 
                    :key="slider" 
                    @click="makeActive(index)"
                    class="mx-2 w-4 h-4 rounded-full cursor-pointer shadow-md" 
                    :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'">
                </div>
            </div>
        </div>
        <!-- <div class="my-10 flex w-full">
            <div class="m-auto">
                <transition name="fade">    
                    <h1 v-if="isTitle">Slider Carousel</h1>
                </transition> 
                <button class="px-2 rounded border" @click="isTitle = !isTitle">Toogle Text</button>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            currentSlide: 0,
            interval: "",
            sliders: ['bg-gray-600', 'bg-blue-600', 'bg-yellow-600'],
            isTitle: true,
        }
    },
    mounted() {
        this.interval = setInterval(() => {
           this.currentSlide = this.currentSlide == 2 ? 0 : this.currentSlide + 1;
        }, 4000)
    },
    beforeUnmount(){
        clearInterval(this.interval);
    },
    methods:{
        makeActive(index){  
            this.currentSlide = index;
        }
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active{
    transition: all 1s ease;
}

.fade-enter-from{
    opacity: 0;
    transform: translateX(-100%); 
}
.fade-leave-to{
    opacity: 0;
    transform: translateX(100%);
}
</style>