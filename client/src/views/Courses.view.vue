<template>
  <Header />

  <StarterTab mainText="выбирай своё будущее" secondaryText="курсы по программированию" />

  <CourseInfo :imageLink="pythonBg" courseLink="/python-course" courseText="Программирование на языке Python"
    courseDescription="Python – это мощный и простой в изучении язык,
        который отлично подходит для начинающих. На курсе вы с нуля освоите синтаксис Python, научитесь
        писать чистый и структурированный код, а также создадите свои первые программы." />

  <CourseInfo :imageLink="dataAnalysisBg" courseLink="/data-analysis-course" courseText="Основы анализа данных"
    courseDescription="Понятное и доступное введение в работу с данными.
        Вы узнаете, как анализировать данные, научитесь находить важную информацию
        в данных, строить наглядные выводы и делать первые шаги в сторону профессиональной аналитики.
        Этот курс поможет вам начать путь в сфере анализа
        данных." :reverseLayout=true />

  <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import StarterTab from "@/components/StarterTab.vue";
import CourseInfo from "@/components/CourseInfo.vue";
import pythonBg from "@/views/bgImages/courses-python-bg.png";
import dataAnalysisBg from "@/views/bgImages/courses-data-analysis-bg.png";
</script>

<style scoped></style>
