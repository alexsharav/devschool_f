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

  <section class="course-features py-16">
    <div class="mx-auto max-w-7xl px-4">
      <h2 class="font-white text-center text-4xl">Особенности наших курсов</h2>
      <br />

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          class="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <div class="mb-4 text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 class="mb-2 text-xl font-semibold">Интерактивное обучение</h3>
          <p class="text-gray-600">
            Практические задания и проекты с обратной связью от экспертов
          </p>
        </div>

        <div
          class="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <div class="mb-4 text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <h3 class="mb-2 text-xl font-semibold">Гибкий график</h3>
          <p class="text-gray-600">Учитесь в удобном для вас темпе и времени</p>
        </div>
        <div
          class="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <div class="mb-4 text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 class="mb-2 text-xl font-semibold">Сообщество</h3>
          <p class="text-gray-600">
            Общение с единомышленниками и взаимопомощь в обучении
          </p>
        </div>
      </div>
    </div>
  </section>

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
.course-features {
  margin-top: 20vh;
}

.tab {
  height: 600px;
}

.buttons {
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
  margin-top: 15px;

  button {
    border-radius: 12px;
    display: flex;
    flex-flow: row wrap;
    padding: 16px 0px;
    align-items: center;
    cursor: pointer;
    border: none;
    transition: 0.3s ease-in-out;
    background: rgb(59, 59, 59);

    &:hover {
      background: rgb(104, 104, 104);
      transform: scale(1.03);
      box-shadow: 0 4px 8px rgb(150, 150, 150);
    }

    p {
      font-size: 16px;
      text-decoration: none;
      font-weight: bold;
      padding: 0px 15px;
      color: white;
    }
  }
}

.devschool-base-info {
  width: 80%;
  display: flex;
  flex-flow: row;
  margin-top: 70px;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: normal;
    font-size: 35px;
    padding-right: 15px;
    border-right: 1px solid black;
    line-height: 1.4;
    letter-spacing: 0.02em;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    b {
      background: linear-gradient(90deg, #00c9ff 0%, #92fe9d 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
    }
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
    transition: transform 0.3s ease;

    &:hover {
      transform: translateX(5px);
    }
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

@media (max-width: 1350px) {
  .devschool-base-info {
    width: 75%;
    margin-top: 50px;

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
    margin-top: 30px;

    h1 {
      font-size: 23px;
    }

    p {
      font-size: 15px;
    }
  }
}

@media (max-width: 770px) {
  .tab {
    height: 500px;
  }

  .buttons {
    flex-flow: column wrap;
    button p {
      font-size: 12px;
    }
  }

  .devschool-base-info {
    width: 95%;
    margin-top: 20px;
    flex-flow: column;

    h1 {
      border-right: none;
      border-bottom: 1px solid black;
      padding-bottom: 15px;
      padding-right: 10px;
      font-size: 18px;
    }

    p {
      margin-top: 10px;
      padding-left: 0px;
    }
  }
}

@media (max-width: 500px) {
  .tab {
    height: 440px;
  }
}
</style>
