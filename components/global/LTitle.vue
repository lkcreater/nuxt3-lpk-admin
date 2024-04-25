<template>
    <div class="lk-l-title">
        <h4>{{ label }}</h4>        
        <hr>
        <span v-if="desc != ''">{{ desc }}</span>
    </div>
</template>

<script setup>
    const prop = defineProps({
        label: String,
        desc: String
    });
</script>