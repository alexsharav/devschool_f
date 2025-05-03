<template>
    <Header />

    <StarterTab mainText="прислушиваемся к вам"
        secondaryText="нашей целью является постоянное улучшение вида сайта и его работы" />

    <HelpPanel />

    <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import StarterTab from "@/components/StarterTab.vue";
import HelpPanel from "@/components/HelpPanel.vue";
</script>

<style scoped>
</style>