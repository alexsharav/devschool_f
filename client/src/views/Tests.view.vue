<template>
  <Header />

  <section class="tab">
    <h1 class="dev-tab-main-text">вытачи свои навыки</h1>
    <p class="dev-tab-desc">тесты для всех уровней знаний программирования</p>
  </section>

  <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
.tab {
  position: relative;
  margin-top: 14px;
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  width: 98%;
  height: 500px;
  background-image:
    repeating-radial-gradient(circle at 0 0, transparent 0, rgb(132, 253, 162) 10px), repeating-linear-gradient(rgb(139, 255, 230), rgb(168, 255, 157));
  border: 1px solid rgb(0, 219, 66);
  border-radius: 30px;

}

.dev-tab-main-text {
  position: relative;
  margin-top: 200px;
  font-size: 50px;
  font-weight: bold;
  color: rgb(41, 41, 41);
}

.dev-tab-desc {
  position: relative;
  padding: 10px 0px;
  margin-top: 20px;
  font-size: 20px;
  color: rgb(90, 90, 90);
  text-align: center;
}

@media (max-width: 750px) {
  .dev-tab-desc {
    font-size: 17px;
    margin-top: 10px;
    padding: 10px 5%;
  }

  .dev-tab-main-text {
    font-size: 30px;
    margin-top: 160px;
  }

  .tab {
    height: 360px;
  }
}

@media (max-width: 400px) {
  .dev-tab-desc {
    font-size: 14px;
  }

  .dev-tab-main-text {
    font-size: 22px;
    margin-top: 120px;
    padding: 10px 0px;
  }

  .tab {
    height: 280px;
  }
}
</style>
