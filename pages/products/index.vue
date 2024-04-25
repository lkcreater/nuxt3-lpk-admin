<template>
    <div>
        <a-card class="lk-card" title="Card title" :bordered="false" >
        <h1>products</h1></a-card>
        <a-button type="primary" @click="showDrawer">Open</a-button>
    </div>

    <a-drawer
        class="lk-layout-app"
        :width="500"
        :title="label.drawerTitle"
        placement="right"
        :visible="visible"
        @close="onClose">

        <template #extra>
            <a-button style="margin-right: 8px" @click="onClose">Cancel</a-button>
            <a-button type="primary" @click="onClose">Submit</a-button>
        </template>

        <FormProduct />

    </a-drawer>
</template>

<script>
import FormProduct from '@/components/forms/FormProduct.vue';

export default {
    components: {
        FormProduct,
    },
    setup () {
        const visible = ref(false);
        const label = reactive({
            drawerTitle: 'เพิ่มรายการอาหาร'
        });

        const showDrawer = () => {
            visible.value = true;
        };

        const onClose = () => {
            visible.value = false;
        };

        return {
            visible,
            label,
            onClose,
            showDrawer
        }
    }
}
</script>

<style lang="scss" scoped>

</style>