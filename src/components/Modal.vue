<template>
    <section
        @click="close" 
        class="z-20 h-screen w-screen bg-gray-500 fixed top-0 left-0 opacity-50">
    </section>
    <div class="absolute inset-0">
        <div class="flex h-full">
            <div class="w-1/3 z-30 m-auto bg-white p-2 rounded shadow">
                <div class="p-2 border">
                    <h1>
                        <slot name="title">Provide Header</slot>
                    </h1>
                    <slot name="body">Provide Information</slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup(_, { emit }) {
        function close() {
            emit("closeModal");
        }

        return {
            close
        }
    }

}
</script>

<style>

</style>