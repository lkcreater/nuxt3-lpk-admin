<template>
    <div class="lk-form-horizontal">
        <a-form
            ref="formRef"
            name="form-product"
            :model="input"
            v-bind="{
                labelCol: { span: 6 },
                wrapperCol: { span: 16 },
            }"
            @finish="handleFinish"
            @validate="handleValidate"
            @finishFailed="handleFinishFailed" >
 
            
            <l-title label="รูปภาพประกอบ" />
            <DragDropUpload style="margin-bottom: 20px;"/>


            <l-title label="ข้อมูลอาหาร" />
            <a-form-item  
                name="title"
                :label="inputLabel.title"  
                :rules="[{ required: true }]" >
                <a-input v-model:value="models.title" autocomplete="off" />
            </a-form-item>

            <a-form-item 
                name="desc"
                :label="inputLabel.desc" >
                <a-textarea v-model:value="models.desc" autocomplete="off" :auto-size="{ minRows: 3, maxRows: 5 }" />
            </a-form-item>


            <l-title label="ราคา และตัวเลือกราคา" desc="เพิ่มตัวเลือกราคาถ้าสินค้ามีขนาดต่าง ๆ (เช่นเล็ก กลาง ใหญ่) หรือเพิ่มตัวเลือก (เช่นน้ำ แห้ง) คำนวณ GST/VAT รวมในราคาถ้ามี"/>
            <template v-for="(object, inx) in models.prices">
                <a-badge-ribbon :text="(inx > 0) ? 'ตัวเลือกที่ ' + (inx + 1) : 'ตัวเลือกหลัก'">
                    <div class="lk-box-content">
                        <a-row justify="end">
                            <a-col span="10" style="padding-left: 15px;">
                                <a-form-item 
                                    :name="'label-' + object.id"
                                    v-bind="{
                                        labelCol: { span: 24 },
                                        wrapperCol: { span: 24 },
                                    }"
                                    style="margin-bottom: 0px;"
                                    :label="inputLabel.prices.label" 
                                    :rules="[{ required: true }]">
                                        <a-input v-model:value="object.label" :name="'label-' + object.id"/>
                                </a-form-item>
                            </a-col>
                            <a-col span="10" style="padding-left: 15px;">
                                <a-form-item 
                                    :name="'price-' + object.id"
                                    v-bind="{
                                        labelCol: { span: 24 },
                                        wrapperCol: { span: 24 },
                                    }"
                                    style="margin-bottom: 0px;"
                                    :label="inputLabel.prices.price"
                                    :rules="[{ required: true }]">
                                        <a-input v-model:value="object.price" name="'price-' + object.id" type="number" />
                                </a-form-item>
                            </a-col>
                            <a-col span="4" style="padding-left: 15px; padding-top: 30px;">
                                <a-popconfirm
                                    title="Are you sure delete this task?"
                                    :visible="visiblePopConfirm[object.id]"
                                    ok-text="Yes"
                                    cancel-text="No"
                                    @confirm="confirmPopConfirm(object.id)"
                                    @cancel="cancelPopConfirm(object.id)" >
                                    <a-button shape="circle" v-if="inx > 0" @click="removeOptionPrice(object.id)" >
                                        <delete-outlined />
                                    </a-button>
                                </a-popconfirm>
                            </a-col>
                        </a-row>    
                    </div>            
                </a-badge-ribbon>       
            </template>
            <div class="lk-box-content br-primary" style="text-align: center; padding: 0px; margin-bottom: 20px;">
                <a-button type="link" @click="addOptionPrice">เพิ่มตัวเลือกราคา</a-button>
            </div>


            <l-title label="ข้อมูลตัวเสริมอาหาร" desc="เพิ่มตัวเสริมอาหาร ตัวอย่าง เพิ่มลูกชิ้น, เพิ่มไข่ดาว เป็นต้น และระบุราคาตามตัวเสริม"/>
            <a-form-item v-if="true" :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary" html-type="submit">Submit</a-button>
                <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
            </a-form-item>

            {{ input }}

        </a-form>
    </div>
</template>

<script setup>
    import { 
        DeleteOutlined
    } from '@ant-design/icons-vue';
    import DragDropUpload from '@/components/inputs/DragDropUpload.vue';

    const formRef = ref();
    const visiblePopConfirm = ref([]);
    const models = reactive({
        title: '',
        desc: '',
        prices: [{
            id: Date.now(),
            label: 'ราคาปกติ',
            price: '100'
        }]
    });
    const inputLabel = reactive({
        title: 'ชื่ออาหาร',
        desc: 'รายละเอียด',
        prices: {
            label: 'ชื่อตัวเลือก',
            price: 'ราคา'
        }
    });

    //------------------------------------------
    //-- ## options price ##
    //------------------------------------------
    const addOptionPrice = () => {
        const uid = Date.now();        
        models.prices.push({
            id: uid,
            label: '',
            price: ''
        });

        visiblePopConfirm.value[uid] = false;
    };
    const removeOptionPrice = (uid) => {        
        const idx = models.prices.findIndex(item => item.id === uid);
        const {id, label, price} = models.prices[idx];
        if(label != '' || price != ''){
            visiblePopConfirm.value[id] = true;
            return;
        }

        models.prices.splice(idx, 1); 
    };
    const confirmPopConfirm = (uid) => {
        const idx = models.prices.findIndex(item => item.id === uid);
        models.prices.splice(idx, 1); 
    }
    const cancelPopConfirm = (id) => {
        visiblePopConfirm.value[id] = false;
    }
    //------------------------------------------
    //-- ## options price ##
    //------------------------------------------


    const handleFinish = (values) => {
        console.log(values, models);
    };
    const handleFinishFailed = errors => {
        console.log(errors);
    };
    const resetForm = () => {
        formRef.value.resetFields();
    };
    const handleValidate = (...args) => {
        console.log(args);
    };
</script>

<style lang="scss" scoped>

</style>