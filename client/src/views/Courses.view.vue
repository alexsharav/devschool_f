<template>
  <Header />

  <section class="tab">
    <h1 class="dev-tab-main-text">выбирай своё будущее</h1>
    <p class="dev-tab-desc">курсы по программированию</p>
  </section>

  <section class="python-tab">
    <img class="python-course-img" :src="require('@/views/bgImages/courses-python-bg.png')" alt="python-course-img"
      @click="goToPythonCourse()">

    <div class="python-course-text-desc">
      <router-link class="python-course-text" to="/python-course">Программирование на языке Python</router-link>

      <p class="python-course-description">Python – это мощный и простой в изучении язык,
        который отлично подходит для начинающих. На курсе вы с нуля освоите синтаксис Python, научитесь
        писать чистый и структурированный код, а также создадите свои первые программы.</p>

      <router-link class="python-course-link" to="/python-course">Посмотреть курс</router-link>
    </div>
  </section>

  <section class="data-analysis-tab">

    <div class="data-analysis-course-text-desc">
      <router-link class="data-analysis-course-text" to="/data-analysis-course">Основы анализа данных</router-link>

      <p class="data-analysis-course-description">
        Понятное и доступное введение в работу с данными.
        Вы узнаете, как анализировать данные, научитесь находить важную информацию
        в данных, строить наглядные выводы и делать первые шаги в сторону профессиональной аналитики.
        Этот курс поможет вам начать путь в сфере анализа
        данных.</p>

      <router-link class="data-analysis-course-link" to="/data-analysis-course">Посмотреть курс</router-link>
    </div>

    <img class="data-analysis-course-img" :src="require('@/views/bgImages/courses-data-analysis-bg.png')"
      alt="data-analysis-course-img" @click="goToDataAnalysisCourse()">
  </section>

  <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { useRouter } from 'vue-router'

const router = useRouter()

function goToPythonCourse() {
  router.push({ path: '/python-course' })
}

function goToDataAnalysisCourse() {
  router.push({ path: '/data-analysis-course' })
}
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
}

.python-tab,
.data-analysis-tab {
  padding: 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  max-width: 1200px;
  width: 98%;
  height: auto;
}

.python-course-img,
.data-analysis-course-img {
  border-radius: 20px;
  width: 100%;
  height: auto;
  max-width: 600px;
  flex-shrink: 2;
  border: 1px solid rgb(168, 255, 168);
  cursor: pointer;
}

.python-course-img:hover,
.data-analysis-course-img:hover {
  border: 1px solid green;
}

.python-course-text,
.data-analysis-course-text {
  color: rgb(41, 41, 41);
  font-weight: normal;
  font-size: 30px;
  text-align: justify;
  text-decoration: none;
}

.python-course-text:hover,
.data-analysis-course-text:hover {
  text-decoration: underline;
}

.python-course-description,
.data-analysis-course-description {
  margin: 20px 0px 0px 0px;
  font-size: 20px;
  color: rgb(73, 73, 73);
  text-align: justify;
}

.python-course-text-desc,
.data-analysis-course-text-desc {
  display: flex;
  flex-flow: column;
  max-width: 600px;
  width: 100%;
}

.python-course-link,
.data-analysis-course-link {
  margin: 10px 0px 0px 0px;
  font-size: 18px;
  color: rgb(0, 0, 0);
}

.python-course-link:hover,
.data-analysis-course-link:hover {
  color: rgb(93, 93, 93);
}

@media (max-width: 910px) {
  .python-tab {
    flex-flow: column wrap;
  }

  .data-analysis-tab {
    flex-flow: column-reverse wrap;
  }
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

  .python-tab,
  .data-analysis-tab {
    padding: 30px 20px;
    gap: 15px;
  }

  .python-course-text,
  .data-analysis-course-text {
    font-size: 24px;
    text-align: center;
  }

  .python-course-description,
  .data-analysis-course-description {
    font-size: 18px;
  }

  .python-course-link,
  .data-analysis-course-link {
    font-size: 16px;
    text-align: center;
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

  .python-tab,
  .data-analysis-tab {
    padding: 26px 16px;
    gap: 10px;
  }

  .python-course-text,
  .data-analysis-course-text {
    font-size: 20px;
  }

  .python-course-description,
  .data-analysis-course-description {
    font-size: 14px;
  }

  .python-course-link,
  .data-analysis-course-link {
    font-size: 12px;
  }
}
</style>
