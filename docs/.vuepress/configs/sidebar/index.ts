import type { SidebarConfig } from 'vuepress'

// 决定左侧内容区域
const sidebar: SidebarConfig = {
    '/guide/': [
        {
            text: '指南',
            children: [
                '/guide/getting-started.md',
                '/guide/configuration.md',
                '/guide/deployment.md',
            ],
        },
    ],
    '/advanced/': [
        {
            text: '菜单演示',
            // collapsible: true,
            children: [
                '/advanced/architecture.md',
                '/advanced/02-test.md',
            ],
        },

    ],
    '/reference/': [

        {
            text: '二级菜单演示',
            collapsible: true,
            children: [
                {
                    text: '常用功能',
                    children: [
                        '/reference/plugin/back-to-top.md',
                    ],
                }
            ],
        },
    ],
}

export default sidebar