<template>
  <div>
    <h1>{{ courseTitle }}</h1>
    <div v-for="chapter in chapters" :key="chapter.chapterNumber">
      <h3>Глава {{ chapter.chapterNumber }}. {{ chapter.chapterTitle }}</h3>
      <ul>
        <li v-for="lesson in chapter.lessons" :key="lesson.path">
          <router-link class="lesson-routers" :to="lesson.path">{{ lesson.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  courseTitle: String,
  chapters: Array
});
</script>

<style scoped>
.lesson-routers {
  font-size: 16px;
  color: #1500cc;
  text-decoration: underline;
  display: block;
  margin: 3px 0;
}
</style>
