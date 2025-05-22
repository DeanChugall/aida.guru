// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./custom.css";
import MyLayout from "./AidaLayout.vue";

export default {
    extends: DefaultTheme,
    Layout: MyLayout,
    head: [['link', { rel: 'icon', href: 'assets/favicon.ico' }]],
};