<template>
  <Header />

  <StarterTab mainText="выбирай своё будущее" secondaryText="курсы по программированию" /> <!--Опять ужасная конструкция-->

  <CourseInfo v-for="course in courses_info" :imageLink="course.iLink" :courseLink="course.cLink"
    :courseText="course.cText" :courseDescription="course.cDescription" :reverseLayout="course.rLayout" /> <!--ну тут более менее конечно реализовано-->

  <Footer />
</template>

<script setup>
import Header from "@/components/mainComponents/Header.vue";
import Footer from "@/components/mainComponents/Footer.vue";
import StarterTab from "@/components/mainComponents/StarterTab.vue";
import CourseInfo from "@/components/coursesComponents/CourseInfo.vue";
import pythonBg from "@/views/bgImages/courses-python-bg.png";
import dataAnalysisBg from "@/views/bgImages/courses-data-analysis-bg.png";

const courses_info = [ // Убрать это с этого .vue файла, сделать отдельные массивы в отдельном файле либо с бдшками сделать
  {
    iLink: pythonBg,
    cLink: "/python-course",
    cText: "Программирование на языке Python",
    cDescription: "Python – это мощный и простой в изучении язык, который отлично подходит для начинающих. На курсе вы с нуля освоите синтаксис Python, научитесь писать чистый и структурированный код, а также создадите свои первые программы.",
    rLayout: false
  },

  {
    iLink: dataAnalysisBg,
    cLink: "/data-analysis-course",
    cText: "Основы анализа данных",
    cDescription: "Понятное и доступное введение в работу с данными. Вы узнаете, как анализировать данные, научитесь находить важную информацию в данных, строить наглядные выводы и делать первые шаги в сторону профессиональной аналитики. Этот курс поможет вам начать путь в сфере анализа данных.",
    rLayout: true
  }
];
</script>