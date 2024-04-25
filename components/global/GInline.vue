<template>
    <div :class="{
        'lk-inline-block': true,
        'is-top': (topContent) ? true : false, 
        }">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        topContent: {
            type: Boolean,
        },
    },
}
</script>

<style lang="scss" scoped>

</style>