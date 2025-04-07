<template>
  <Header />

  <section class="tab">
    <h1 class="dev-tab-main-text">дев.школа</h1>
    <p class="dev-tab-desc">система образовательных курсов и тестов</p>

    <button class="dev-tab-start" @click="coursesLink">
      <p class="dev-tab-courses dev-tab-courses-text">айти с нами с нуля</p>
      <p class="dev-tab-courses dev-tab-courses-line">→</p>
    </button>
  </section>

  <section class="description">
    <div class="first-desc">

    </div>

    <div class="second-desc">

    </div>

    <div class="third-desc">

    </div>
  </section>
</template>

<script setup>
import Header from "@/components/Header.vue";

function coursesLink() {
  window.location = "/courses";
}

</script>

<style scoped>
.tab {
  position: relative;
  top: 14px;
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  width: 98%;
  height: 750px;
  background:
    linear-gradient(rgb(252, 220, 244), rgb(212, 203, 253),
      rgb(203, 208, 253), rgba(183, 208, 253, 0.541),
      rgba(201, 169, 253, 0.541));
  border: 2px solid rgba(237, 204, 252, 0.541);
  border-radius: 30px;
}

.dev-tab-main-text {
  position: relative;
  top: 240px;
  font-size: 50px;
  font-weight: normal;
  color: rgb(41, 41, 41);
}

.dev-tab-desc {
  position: relative;
  padding: 10px 0px;
  top: 260px;
  font-size: 20px;
  color: rgb(90, 90, 90);
}

.dev-tab-start {
  position: relative;
  top: 320px;
  border-radius: 12px;
  display: flex;
  flex-flow: row wrap;
  background: rgb(32, 32, 32);
  gap: 0px;
  padding: 20px 0px;
  align-items: center;
  transition: gap 0.4s ease;
  cursor: pointer;
  border: none;
}

.dev-tab-courses {
  color: white;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  padding: 20px 14px;
}

.dev-tab-courses-text {
  padding: 0px 2px 0px 14px;
}

.dev-tab-courses-line {
  padding: 0px 14px 2px 6px;
}

.dev-tab-start:hover {
  background: rgb(61, 61, 61);
  gap: 20px;
}

@media (max-width: 700px) {
  .dev-tab-desc {
    font-size: 17px;
    top: 240px;
  }

  .dev-tab-main-text {
    font-size: 40px;
    top: 220px;
  }

  .dev-tab-start {
    top: 280px;
  }

  .tab {
    height: 600px;
  }
}

@media (max-width: 400px) {
  .dev-tab-desc {
    font-size: 14px;
    top: 200px;
  }

  .dev-tab-main-text {
    font-size: 36px;
    top: 180px;
  }

  .dev-tab-start {
    top: 240px;
  }

  .tab {
    height: 500px;
  }
}
</style>
