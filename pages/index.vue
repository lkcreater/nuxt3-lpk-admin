<template>
    <div>
        <h1>Index</h1>
        <a-button type="primary" @click="showModal">Open Modal</a-button>
        <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        </a-modal>
    </div>
</template>

<script setup lang="ts">
    import {  ref } from 'vue';
    const visible = ref<boolean>(false);

    const showModal = () => {
        visible.value = true;
    };

    const handleOk = (e: MouseEvent) => {
        console.log(e);
        visible.value = false;
    };

</script>
  