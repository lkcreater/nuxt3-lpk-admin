// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    //vite: false,
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'My App',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'My amazing site.' }
            ],
        },
        pageTransition: { 
            name: 'page', 
            mode: 'out-in' 
        }
    },
    css: [
        'ant-design-vue/dist/antd.css',
        '~/assets/app.scss'
    ],

    modules: [
        [
            '@pinia/nuxt',
            {
              autoImports: ['defineStore', 'acceptHMRUpdate'],
            },
        ],
    ],
})
