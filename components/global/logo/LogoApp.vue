<template>
    <div class="lk-logo-app">
        <g-inline top-content>
            <g-item>
                <a-tooltip placement="left" :title="title">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" :width="size" :height="size">
                        <linearGradient id="gradient">
                            <stop class="begin-color-stop" offset="0%" />
                            <stop class="end-color-stop" offset="100%" />
                        </linearGradient>
                        <path fill="url(#gradient)" d="M18.556,11.385H14.011a1.388,1.388,0,0,1-1.393-1.389V5.433a3.432,3.432,0,0,0-1.331-2.722A3.307,3.307,0,0,0,8.436,2.1,11.112,11.112,0,1,0,21.9,15.579a3.309,3.309,0,0,0-.61-2.858A3.49,3.49,0,0,0,18.556,11.385Zm.433,3.459A8.115,8.115,0,1,1,9.167,5.009.3.3,0,0,1,9.239,5a.331.331,0,0,1,.2.077.461.461,0,0,1,.176.356V9.994a4.389,4.389,0,0,0,4.393,4.39h4.545a.467.467,0,0,1,.365.18A.311.311,0,0,1,18.989,14.844Z"/>
                        <path fill="#fff" d="M23.651,7.446A10.073,10.073,0,0,0,16.582.372,2.014,2.014,0,0,0,14.019,2.3V7a3,3,0,0,0,3,3h4.719A2.008,2.008,0,0,0,23.651,7.446Z"/>
                    </svg>
                </a-tooltip>
            </g-item>
            <g-item v-if="!breakPoint">
                <div class="lk-text-logo">
                    <h3>{{ title }}</h3>
                    <span>{{ subTitle }}</span>
                </div>
            </g-item>
        </g-inline>
    </div>
</template>

<script>
export default {
    props: {
        breakPoint:{
            type: Boolean,
        },
        size: {
            type: Number,
            default: () => 100
        },
        title: {
            type: String,
            default: 'LK-ADMIN'
        },
        subTitle: {
            type: String,
            default: 'Restuarant Manage'
        }
    },
}
</script>