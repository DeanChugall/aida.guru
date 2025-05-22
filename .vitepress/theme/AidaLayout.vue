<!--.vitepress/theme/AidaLayout.vue-->
<script setup>
    import DefaultTheme from 'vitepress/theme';
</script>

<template>
    <DefaultTheme.Layout>
        <template #home-hero-image>
            <div style="text-align: center">
                <img src="/assets/aida_hero_v2.png" alt="AiDA" />
                <br />
            </div>
        </template>
    </DefaultTheme.Layout>
</template>

<!-- <style>
    .VPHero .image-bg {
        display: none;
    }

    .VPHero .image-container {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    }
</style> -->