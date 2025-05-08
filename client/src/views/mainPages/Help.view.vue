<template>
    <Header />

    <StarterTab mainText="прислушиваемся к вам"
        secondaryText="нашей целью является постоянное улучшение вида сайта и его работы" /> <!-- избавиться от таких конструкций(уже писал в HelpPanel.vue)-->

    <HelpPanel />

    <Footer />
</template>

<script setup>
import Footer from "@/components/mainComponents/Footer.vue";
import StarterTab from "@/components/mainComponents/StarterTab.vue";
import HelpPanel from "@/components/otherComponents/HelpPanel.vue";
import Header from "@/components/mainComponents/Header.vue";
</script>