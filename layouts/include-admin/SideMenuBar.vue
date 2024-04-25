<template>
     <a-menu 
        :class="{ 'lk-short-menu': breakPoint }"
        v-model:selectedKeys="selectedKeys" 
        theme="dark" 
        mode="inline"
        @click="useClickMenu">

        <template v-for="(item, idx) in itemsMenu">             

            <a-menu-item >
                <NuxtLink :to="item.path">
                    <component :is="item.icon"></component> 
                    <span>{{ item.label }}</span>     
                </NuxtLink>           
            </a-menu-item>

        </template>       

    </a-menu>
</template>

<script>    
import { 
    SettingOutlined,
    AppstoreAddOutlined,
    DollarCircleOutlined,
    TeamOutlined
} from '@ant-design/icons-vue';
import { ref, computed } from 'vue';  

export default {
    components: {
        SettingOutlined,
    },
    props: {
        breakPoint: {
            type: Boolean,
        }
    },
    setup(props) {             
        const route = useRoute();
        const router = useRouter();
        const selectedKeys = ref([route.path]);    
        const isSubMenu = ref(false);

        const menuLabel = computed(() => ({
            home: 'หน้าหลัก',
            products: 'สินค้า',
            users:  'ผู้ใช้งาน'
        })).value;

        const itemsMenu = reactive([
            {
                icon: AppstoreAddOutlined,
                label: menuLabel.home,
                path: `/`
            },
            {
                icon: DollarCircleOutlined,
                label: menuLabel.products,
                path: `/products`,
            },
            {
                icon: TeamOutlined,
                label: menuLabel.users,
                path: `/users`
            }
        ]);

        const onRouter = (path) => {
            router.push({ path: String(path) });
        }
        const useClickMenu = ( { item, key, keyPath } ) => {
            router.push({ path: keyPath[0] });
            console.log(item, key, keyPath);
        }

        return {
            isSubMenu,
            selectedKeys,
            itemsMenu,
            onRouter,
            useClickMenu
        }
    }
}
</script>

<style lang="scss" scoped>

</style>