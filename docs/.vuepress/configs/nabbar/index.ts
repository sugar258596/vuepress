import type { NavbarConfig } from 'vuepress'


// 导航栏区域内容
// 该配置决定 navbar 滑块中有多少个内容
// 你可以把它当成 router 来理解
const navbar: NavbarConfig = [
    {
        text: '指南',
        link: '/guide/',
        children:[
            '/guide/getting-started.md',
        ]
    },
    {
        text: '插件',
        children: [
            {
                text: '常用功能',
                children: [
                    '/reference/plugin/back-to-top.md',
                ],
            },

        ],
    },
    {
        text: '了解更多',
        children: [
            {
                text: '深入1',
                children: [
                    '/advanced/architecture.md',
                    {
                        text: '自定义url1',
                        link: '/custom/permalink/1/',
                    },
                    {
                        text: '自定义url2',
                        link: '/custom/permalink/2/',
                    },
                ],
            },
            {
                text: '深入2',
                children: [
                    '/advanced/architecture.md',
                    {
                        text: '自定义url1',
                        link: '/custom/permalink/1/',
                    },
                    {
                        text: '自定义url2',
                        link: '/custom/permalink/2/',
                    },
                ],
            },

        ],
    },

]

export default navbar