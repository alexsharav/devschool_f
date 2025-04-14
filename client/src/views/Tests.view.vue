<template>
  <Header />

  <section class="tab">
    <h1 class="dev-tab-main-text">вытачи свои навыки</h1>
    <p class="dev-tab-desc">тесты для всех уровней знаний программирования</p>
  </section>
</template>

<script setup>
import Header from "@/components/Header.vue";
</script>

<style scoped>
.tab {
  position: relative;
  top: 14px;
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  width: 98%;
  height: 500px;
  background-image:
        repeating-radial-gradient(circle at 0 0, transparent 0, rgb(244, 255, 149) 10px), repeating-linear-gradient(rgb(246, 255, 196), rgb(246, 255, 196));
    border: 2px solid rgb(255, 251, 35);
  border-radius: 30px;

}

.dev-tab-main-text {
  position: relative;
  top: 200px;
  font-size: 50px;
  font-weight: bold;
  color: rgb(41, 41, 41);
}

.dev-tab-desc {
  position: relative;
  padding: 10px 0px;
  top: 220px;
  font-size: 20px;
  color: rgb(90, 90, 90);
}

@media (max-width: 750px) {
  .dev-tab-desc {
    font-size: 17px;
    top: 200px;
  }

  .dev-tab-main-text {
    font-size: 30px;
    top: 180px;
  }

  .tab {
    height: 400px;
  }
}

@media (max-width: 400px) {
  .dev-tab-desc {
    font-size: 14px;
    top: 170px;
  }

  .dev-tab-main-text {
    font-size: 22px;
    top: 155px;
  }

  .tab {
    height: 350px;
  }
}
</style>
