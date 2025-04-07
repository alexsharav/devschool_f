<template>
  <Header />

  <section class="tab">
    <h1 class="dev-tab-main-text">выбирай своё будущее</h1>
    <p class="dev-tab-desc">множество интересных курсов</p>
  </section>
  
  <section class="course-info">
    
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
  background:
    linear-gradient(rgb(255, 248, 183), rgb(248, 253, 203),
      rgb(238, 255, 177), rgba(253, 215, 109, 0.541),
      rgba(255, 210, 113, 0.541));
  border: 2px solid rgba(255, 227, 174, 0.438);
  border-radius: 30px;
}

.dev-tab-main-text {
  position: relative;
  top: 200px;
  font-size: 50px;
  font-weight: normal;
  color: rgb(41, 41, 41);
}

.dev-tab-desc {
  position: relative;
  padding: 10px 0px;
  top: 220px;
  font-size: 20px;
  color: rgb(90, 90, 90);
}

@media (max-width: 700px) {
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
