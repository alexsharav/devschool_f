<template>
  <Header />

  <section class="tab">
    <h1 class="dev-tab-main-text">выбирай своё будущее</h1>
    <p class="dev-tab-desc">лучшие курсы по программированию</p>
  </section>

  <section class="python-tab">
    <div class="python-course"></div>
    
    <div class="python-course-desc"></div>
    <h1>Программирование на языке Python</h1>
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
    repeating-radial-gradient(circle at 0 0, transparent 0, rgb(132, 253, 162) 10px), repeating-linear-gradient(rgb(172, 255, 179), rgb(169, 255, 202));
  border: 2px solid rgb(0, 219, 66);
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

.python-tab {
  padding: 40px 0px 40px 0px;
  display: flex;
  flex-flow:row;
  gap: 40px;
  
}
.python-course {
  background-image:url(courses-python-bg.png);
  border: 50px solid rgb(209, 255, 209);
  border-bottom-width: 0px;
  border-radius: 18px;
  position: relative;
  background-color: #ffffc9;
  width: 700px;
  height: 350px;
  background-size: contain;
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
