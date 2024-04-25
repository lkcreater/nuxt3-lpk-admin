<template>
    <div>
        <NuxtLayout :key="route.fullPath">
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>

<script setup>
    const route = useRoute();
    console.log('route', route.fullPath);
</script>
