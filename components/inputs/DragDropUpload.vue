<template>
    <a-upload-dragger
        v-model:fileList="fileList"
        name="file"
        :multiple="false"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        @change="handleChange"
        @drop="handleDrop" >

            <p class="ant-upload-drag-icon">
                <inbox-outlined></inbox-outlined>
            </p>
            <p class="ant-upload-text">
                {{ label.textHead }}
                <!-- Click or drag file to this area to upload -->
            </p>
            <p class="ant-upload-hint">
                {{ label.textHint }}
            </p>

    </a-upload-dragger>
</template>

<script setup>
    import { InboxOutlined } from '@ant-design/icons-vue';

    const label = reactive({
        textHead: 'คลิกหรือลากไฟล์มายังพื้นที่อัปโหลดที่นี่',
        textHint: 'อัปโหลดได้ทีละ 1 ไฟล์ รองรับไฟล์ที่มีขนาดไม่เกิน 2MB เท่านั้น และต้องเป็นไฟล์ภาพที่มีนามสกุลดังนี้ .jpg, .png, .gif, .jpeg เท่านั้น'
    });

</script>

<style lang="scss" scoped>

</style>