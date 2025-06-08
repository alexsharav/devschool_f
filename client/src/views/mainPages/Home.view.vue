<template>
  <Header />

  <StarterTab
    mainText="Дев.Школа"
    secondaryText="образовательные курсы и тесты для всех"
  >
    <template #buttons>
      <div class="buttons">
        <button class="dev-tab-start-courses" @click="router.push('/courses')">
          <p class="dev-tab-courses">начни с наших курсов</p>
        </button>

        <button class="dev-tab-start-tests" @click="router.push('/tests')">
          <p class="dev-tab-tests">начни с наших тестов</p>
        </button>
      </div>
    </template>
  </StarterTab>

  <section class="devschool-base-info">
    <h1>
      <span class="devschool-base-info-text">Дев.Школа</span> - Платформа для
      тех, кто хочет войти в <b>IT</b>. Курсы по программированию, практические
      задания и поддержка от экспертов.
      <span style="text-decoration: underline"
        >Учиться легко — даже с нуля.</span
      >
    </h1>

    <div>
      <p>
        Наша образовательная платформа построена для развития технических
        навыков: от базового программирования до продвинутых технологий. Мы
        верим, что каждый может стать разработчиком.
      </p>

      <p>
        Наши курсы — это путь от первых строк кода до уверенного старта в
        карьере. Обучение, практика, результат.
      </p>
    </div>
  </section>

  <div class="rounded-xl bg-blue-500 p-4 text-white">Tailwind работает!</div>

  <Footer />
</template>

<script setup>
import Header from "@/components/mainComponents/Header.vue";
import Footer from "@/components/mainComponents/Footer.vue";
import StarterTab from "@/components/mainComponents/StarterTab.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>
.tab {
  height: 600px;
}

.buttons {
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  margin-top: 20px;

  button {
    border-radius: 12px;
    display: flex;
    flex-flow: row wrap;
    padding: 16px 0px;
    align-items: center;
    cursor: pointer;
    border: none;
    transition: background-color 0.6s ease;
    p {
      font-size: 16px;
      text-decoration: none;
      font-weight: bold;
      padding: 0px 15px;
    }
  }
}

.dev-tab-start-courses {
  background: rgb(32, 32, 32);
}

.dev-tab-courses {
  color: white;
}

.dev-tab-start-courses:hover {
  background: rgb(104, 104, 104);
}

.dev-tab-start-tests {
  background: rgb(248, 248, 248);
}

.dev-tab-tests {
  color: rgb(0, 0, 0);
}

.dev-tab-start-tests:hover {
  background: rgb(212, 212, 212);
}

.devschool-base-info {
  width: 60%;
  display: flex;
  flex-flow: row;
  margin-top: 145px;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: normal;
    font-size: 35px;
    padding-right: 15px;
    border-right: 1px solid black;
  }

  div {
    display: flex;
    flex-flow: column wrap;
    gap: 10px;
  }

  p {
    padding-left: 10px;
    font-size: 18px;
    text-align: justify;
  }
}

.devschool-base-info-text {
  background: #85ede3;
  background: linear-gradient(
    90deg,
    rgba(133, 237, 227, 1) 0%,
    rgba(161, 255, 211, 1) 33%,
    rgb(131, 228, 130) 100%,
    rgba(156, 227, 255, 1) 57%
  );
}

.made-by-info {
  margin-top: 40px;
}

@media (max-width: 1350px) {
  .devschool-base-info {
    width: 75%;
    margin-top: 100px;

    h1 {
      font-size: 26px;
    }

    p {
      font-size: 18px;
    }
  }
}

@media (max-width: 830px) {
  .devschool-base-info {
    width: 80%;
    margin-top: 80px;

    h1 {
      font-size: 23px;
    }

    p {
      font-size: 15px;
    }
  }
}

@media (max-width: 530px) {
  .devschool-base-info {
    width: 90%;
    margin-top: 60px;

    h1 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }
}

@media (max-width: 700px) {
  .tab {
    height: 450px;
  }
}

@media (max-width: 440px) {
  .tab {
    height: 400px;
  }

  .buttons {
    flex-flow: column wrap;
    button p {
      font-size: 12px;
    }
  }

  .devschool-base-info {
    width: 95%;
    flex-flow: column;

    h1 {
      border-right: none;
      border-bottom: 1px solid black;
      padding-bottom: 15px;
      padding-right: 10px;
    }

    p {
      margin-top: 10px;
      padding-left: 0px;
    }
  }
}
</style>
