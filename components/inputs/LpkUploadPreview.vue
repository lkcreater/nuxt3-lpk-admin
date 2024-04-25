<template>
    <div class="clearfix" style="margin-top: 10px;">
        <a-avatar 
            shape="square" 
            :src="srcImage"            
            :size="size">
            <template #icon><UserOutlined /></template>
        </a-avatar>
        <div class="clearfix"></div>

        <a-upload 
            :file-list="fileList" 
            :before-upload="beforeUpload" 
            @remove="handleRemove">
            <a-button type="primary" style="margin-top: 10px;">
                <upload-outlined />
                {{ labels.selectFile }}
            </a-button>
        </a-upload>        
    </div>
</template>

<script>
import { UploadOutlined, UserOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    components: {
        UserOutlined,
        UploadOutlined,
    },
    computed: {
        labels(){
            return {
                selectFile: 'เลือกไฟล์'
            }
        }  
    },
    props: {
        size: {
            type: Number,
            default: () => 100
        },
    },
    setup(props) {
        const fileList = ref([]);
        const srcImage = ref('');
        const uploading = ref(false);

        const handleRemove = file => {
            const index = fileList.value.indexOf(file);
            const newFileList = fileList.value.slice();
            newFileList.splice(index, 1);
            srcImage.value = '';
            fileList.value = newFileList;
        };

        const beforeUpload = file => {
            const src = URL.createObjectURL(file);
            srcImage.value = src;
            fileList.value = [file];
            return false;
        };

        const handleUpload = () => {
            const formData = new FormData();
            fileList.value.forEach(file => {
                formData.append('files[]', file);
            });
            uploading.value = true;

            // You can use any AJAX library you like
            // request('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
            //     method: 'post',
            //     data: formData,
            // }).then(() => {
            //     fileList.value = [];
            //     uploading.value = false;
            //     message.success('upload successfully.');
            // }).catch(() => {
            //     uploading.value = false;
            //     message.error('upload failed.');
            // });
        };

        return {
            fileList,
            srcImage,
            uploading,
            handleRemove,
            beforeUpload,
            handleUpload,
        };
    },
});

</script>

<style lang="scss" scoped>

</style>