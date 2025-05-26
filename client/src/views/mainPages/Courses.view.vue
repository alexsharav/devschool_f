<template>
  <Header />

  <StarterTab mainText="выбирай своё будущее" secondaryText="курсы по программированию" /> <!--Опять ужасная конструкция-->

  <CourseInfo v-for="course in courseLessons" :imageLink="course.iLink" :courseLink="'/courses' + course.cLink"
    :courseText="course.title" :courseDescription="course.cDescription" :reverseLayout="course.rLayout" />

  <Footer />
</template>

<script setup>
import Header from "@/components/mainComponents/Header.vue";
import Footer from "@/components/mainComponents/Footer.vue";
import StarterTab from "@/components/mainComponents/StarterTab.vue";
import CourseInfo from "@/components/coursesComponents/CourseInfo.vue";
import courseLessons from "@/router/courseLessons";
</script>