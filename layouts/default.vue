<template>
    <a-layout class="lk-layout-app">
        <a-layout-sider 
            breakpoint="lg"            
            v-model:collapsed="collapsed" 
            :trigger="null" 
            collapsible
            @collapse="onCollapse"
            @breakpoint="onBreakpoint">

            <!-- LOGO -->
            <LogoApp :size="40" :break-point="siderBreakpoint" @click="visibleHeader = !visibleHeader"/> 

            <!-- SIDER MENU -->
            <!-- <SideMenuBar :break-point="siderBreakpoint"/>    -->
            <NuxtLink to="/">index</NuxtLink><br>
            <NuxtLink to="/products">pppp</NuxtLink><br>
            <NuxtLink to="/users">uuuuu</NuxtLink>

        </a-layout-sider>

        <a-layout>
            <a-layout-header v-if="visibleHeader" style="background: #fff; padding: 0">                
                <menu-unfold-outlined
                    v-if="collapsed"
                    class="trigger"
                    @click="btnActionCollap" />

                <menu-fold-outlined 
                    v-else 
                    class="trigger" 
                    @click="btnActionCollap" />                
            </a-layout-header>

            <a-layout-content class="lk-main-content" >
                <slot></slot>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script setup>
    import {
        MenuUnfoldOutlined,
        MenuFoldOutlined,
    } from '@ant-design/icons-vue';
    import SideMenuBar from '@/layouts/include-admin/SideMenuBar.vue';
    import { ref, computed } from 'vue';  
    
    //-- variable
    //----------------------------------------    
    const collapsed = ref(false);
    const visibleHeader = ref(true);
    const siderBreakpoint = ref(false);

    //-- method
    //----------------------------------------
    const btnActionCollap = () => {
        collapsed.value = !collapsed.value;
        siderBreakpoint.value = collapsed.value;
        return collapsed.value;
    };

    const onCollapse = (collapsed, type) => {
        console.log(collapsed, type);
    };
    const onBreakpoint = (broken) => {
        collapsed.value = broken;
        siderBreakpoint.value = broken;
    };
    const onRouter = (link) => {
        const router = useRouter();
        router.push({ path: link });
    }

</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>