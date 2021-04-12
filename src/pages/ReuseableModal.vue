<template>
  <section class="flex w-full">
      <div class="m-auto">
          <h1 class="text-2xl my-5">Re-Useable Modal</h1>
          <Modal v-if="is1ModalOpen" @closeModal="is1ModalOpen = false"> 
              <template #header>
                  1 Modal
              </template>
              <template #body>
                  1 Modal Body
              </template>
          </Modal>
          <button class="border shadow p-1 m-1 rounded bg-blue-500 text-white" @click="is1ModalOpen = true">1 Modal</button>
          <Modal v-if="is2ModalOpen" @closeModal="is2ModalOpen = false"> 
              <template #header>
                  2 Modal
              </template>
          </Modal>
          <button class="border shadow p-1 m-1 rounded bg-blue-500 text-white" @click="is2ModalOpen = true">2 Modal</button>
      </div>
  </section>
</template>

<script>
import Modal from '../components/Modal';
import { ref } from 'vue';

export default {
    components:{
        Modal
    },
    setup(){
        const is1ModalOpen = ref(false);
        const is2ModalOpen = ref(false);

        return {
            is1ModalOpen,
            is2ModalOpen
        }
    }
}
</script>

<style>

</style>