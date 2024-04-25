<template>
    <a-row>
        <a-col :xs="{ span: 24, offset: 0 }" :lg="{ span: 14, offset: 5 }">
            <a-card 
                class="lk-card" 
                :title="title" 
                :bordered="false" >

                <a-form
                    :model="formState"  
                    layout="vertical"            
                    autocomplete="off"
                    @finish="onFinish"
                    @finishFailed="onFinishFailed">

                    <div class="form-title">
                        <IdcardOutlined />
                        {{ labels.titleHeadFirst }}
                    </div>
                    <a-row>
                        <a-col :xs="24" :lg="9" style="padding: 5px; text-align: center;">               
                            <LpkUploadPreview :size="120"/>
                        </a-col>
                        <a-col :xs="24" :lg="9" style="padding: 5px;">
                            <a-form-item
                                :label="labels.input.username"
                                name="username"
                                :rules="[{ required: true, message: `${labels.alertRequired}${labels.input.username}` }]">

                                <a-input v-model:value="formState.username" />
                            </a-form-item>

                            <a-form-item
                                :label="labels.input.password"
                                name="password"
                                :rules="[{ required: true, message: `${labels.alertRequired}${labels.input.password}` }]">

                                <a-input-password v-model:value="formState.password" />
                            </a-form-item>

                            <a-form-item
                                :label="labels.input.repassword"
                                name="repassword"
                                :rules="[{ required: true, message: `${labels.alertRequired}${labels.input.repassword}` }]">

                                <a-input-password v-model:value="formState.repassword" />
                            </a-form-item>
                        </a-col>
                    </a-row>

                    <div class="form-title" style="margin-top: 20px;">
                        <UserSwitchOutlined />
                        {{ labels.titleHeadSecond }}
                    </div>
                    <a-row>
                        <a-col :xs="{ span: 24, offset: 0 }" :lg="{ span: 12, offset: 6 }">
                            <a-form-item
                                :label="labels.input.firstname"
                                name="firstname"
                                :rules="[{ required: true, message: `${labels.alertRequired}${labels.input.firstname}` }]">

                                <a-input v-model:value="formState.firstname" />
                            </a-form-item>

                            <a-form-item
                                :label="labels.input.lastname"
                                name="lastname"
                                :rules="[{ required: true, message: `${labels.alertRequired}${labels.input.lastname}` }]">

                                <a-input v-model:value="formState.lastname" />
                            </a-form-item>

                            <a-form-item
                                :label="labels.input.phone"
                                name="phone"
                                :rules="[{ required: true, message: `${labels.alertRequired}${labels.input.phone}` }]">

                                <a-input v-model:value="formState.phone" />
                            </a-form-item>

                            <a-form-item
                                :label="labels.input.birthday"
                                name="birthday"
                                :rules="[{ required: true, message: `${labels.alertRequired}${labels.input.birthday}` }]">

                                <a-date-picker v-model:value="formState.birthday" />
                            </a-form-item>

                            <a-form-item
                                :label="labels.input.sex"
                                name="sex"
                                :rules="[{ required: true, message: `${labels.alertRequired}${labels.input.sex}` }]">

                                <a-radio-group v-model:value="formState.sex">
                                    <a-radio value="MALE">{{ labels.input.male }}</a-radio>
                                    <a-radio value="FEMALE">{{ labels.input.female }}</a-radio>
                                </a-radio-group>
                            </a-form-item>
                        </a-col>
                    </a-row>
                                       
                    <div class="form-title" style="margin-top: 20px;">
                    </div>
                    <a-form-item style="margin-top: 20px; text-align: right;">
                        <a-button type="primary" html-type="submit">Submit</a-button>
                    </a-form-item>

                </a-form>

            </a-card>
        </a-col>
    </a-row>
</template>

<script>
import { 
    IdcardOutlined,
    UserSwitchOutlined,
} from '@ant-design/icons-vue';
import LpkUploadPreview from '@/components/inputs/LpkUploadPreview.vue';
import { defineComponent, reactive, computed } from 'vue';

export default defineComponent({
    components: {
        IdcardOutlined,
        UserSwitchOutlined,
        LpkUploadPreview,
    },
    props: {
        title: {
            type: String,
            default: 'ฟอร์มสร้างผู้ใช้งาน'
        },
    },
    setup() {
        const formState = reactive({
            username: '',
            password: '',
            repassword: '',
            firstname: '',
            lastname: '',
            image: '',
            phone: '',
            birthday: '',
            sex: ''
        });

        const labels = computed(() => {
            return {
                titleHeadFirst: 'ข้อมูลยืนยันตัวตน',
                titleHeadSecond: 'ข้อมูลส่วนตัว',
                alertRequired: 'กรุณากรอก',
                input: {
                    username: 'ชื่อผู้ใช้งาน',
                    password: 'รหัสผ่าน',
                    repassword: 'ยืนยันรหัสผ่าน',
                    firstname: 'ชื่อ',
                    lastname: 'นามสกุล',
                    image: 'รูปโปรไฟล์',
                    phone: 'เบอร์โทรศัพท์',
                    birthday: 'วันเดือนปีเกิด',
                    sex: 'เพศ',
                    male: 'ชาย',
                    female: 'หญิง'
                }
            }
        });

        const onFinish = values => {
            console.log('Success:', values);
        };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };

        return {
            formState,
            labels,
            onFinish,
            onFinishFailed,
        };
    },
});
</script>

<style lang="scss" scoped>

</style>