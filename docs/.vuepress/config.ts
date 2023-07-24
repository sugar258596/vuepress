import { defineUserConfig, defaultTheme } from 'vuepress'
import { commentPlugin } from "vuepress-plugin-comment2";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
// @ts-ignore
import { searchPlugin } from '@vuepress/plugin-search'
// const isProd = process.env?.NODE_ENV === 'production'
import { path } from '@vuepress/utils'

import head from "./configs/head";
import navbar from "./configs/nabbar";
import sidebar from "./configs/sidebar";

export default defineUserConfig({
    // set site base to default value
    base: '/vuepress/',
    // extra tags in `<head>`
    head: head,
    // site-level locales configs
    locales: {
        '/': {
            // lang: 'zh-CN',
            title: 'Vuepress2主题模板',
            description: '好记性不如烂笔头',
        },
    },

    // configure default theme
    theme: defaultTheme({
        logo: '/logo/logo.png',
        repo: 'sugar258596/vuepress',
        docsBranch: 'master',
        docsDir: 'docs',

        // theme-level locales configs
        locales: {
            '/': {
                // navbar
                navbar: navbar,
                // sidebar
                sidebar: sidebar,
                // page meta
                editLinkText: '在github上编辑此页',
            },

        },


    }),

    // 组件重命名，覆盖默认组件
    alias: {
        '@theme/ToggleColorModeButton.vue': path.resolve(__dirname, './components/ToggleColorModeButton.vue')
    },


    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索',
                }
            },
        }),
        // 基于 github Dissicon 的评论项目 giscus
        // https://plugin-comment2.vuejs.press/
        // https://giscus.app/zh-CN
        commentPlugin({
            provider: "Giscus",
            repo: 'sugar258596/blog-giscus-comment',
            repoId: 'R_kgDOJ_CtaQ', // id
            category: 'Announcements',
            categoryId: 'DIC_kwDOJADaH84CUUwQ', // id
            mapping: 'pathname', // url
            lazyLoading: true,
            reactionsEnabled: true,
            inputPosition: 'bottom',
        }),


        // 代码复制
        copyCodePlugin({
            locales: {
                "/": {
                    copied: 'copy success!',
                    copy: 'click copy'
                }
            }
        })


    ]

})
