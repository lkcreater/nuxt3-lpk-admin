<template>
    <div>
        <h1>Index</h1>
        <a-button type="primary" @click="showModal">Open Modal</a-button>
        <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </a-modal>
        <a-button @click="gotoAdmin">click</a-button>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const visible = ref(false);
    const router = useRouter()

    const showModal = () => {
        visible.value = true;
    };

    const handleOk = (e) => {
        console.log(e);
        visible.value = false;
    };

    const gotoAdmin = () => {
        router.push({
            path: '/@-admin'
        });
    }

</script>
  