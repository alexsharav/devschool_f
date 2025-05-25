<template>
  <Header />
  <CourseTab courseMainText="Основы программирования на Python" courseSecondaryText="123123" />

  <div class="lessons-list">
    <div v-for="chapter in chapters" :key="chapter.chapterNumber" class="flex-div">
      <h1>Глава {{ chapter.chapterNumber }}. {{ chapter.chapterTitle }}</h1>
      <router-link v-for="lesson in chapter.lessons" :key="lesson.path" class="lesson-routers" :to="lesson.path">{{ lesson.title }}</router-link>
    </div>
  </div>
</template>

<script setup>
import Header from '../mainComponents/Header.vue';
import CourseTab from './CourseTab.vue';

defineProps({
  courseTitle: String,
  chapters: Array
});
</script>

<style scoped>
.lessons-list {
  margin-top: 35px;
}

.flex-div {
  display: flex;
  flex-flow: column;
}

.lesson-routers {
  font-size: 23px;
  color: #4b4b4b;
  text-decoration: none;
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
