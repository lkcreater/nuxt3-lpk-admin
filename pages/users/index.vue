<template>
    <div>
        <a-card 
            class="lk-card" 
            :title="title" 
            :bordered="false" >

            <!-- EXTRA CARD -->
            <template #extra>
                <a-button type="primary" @click="router.push({ path: '/users/create-user' })"> 
                    <UserAddOutlined /> 
                    {{ label.btnCreateUser }}
                </a-button>
            </template>

            <h1>products</h1>
            {{ posts }}
        </a-card>
    </div>
</template>

<script>
import {
    UserAddOutlined,
} from '@ant-design/icons-vue';
import { ref } from 'vue';

export default {
    components: {
        UserAddOutlined,
    },
    props: {
        title: {
            type: String,
            default: 'ผู้ใช้งาน'
        },
    },
    computed: {
        label(){
            return {
                btnCreateUser: 'สร้างผู้ใช้ใหม่'
            }
        }
    },
    setup(props){
        const { pending, data: posts } = useLazyFetch('/api/test');
        const router = useRouter();

        // console.log('pending', pending);
        // console.log(posts);

        return {
            pending,
            posts,
            router
        }
    }
}
</script>

<style lang="scss" scoped>

</style>