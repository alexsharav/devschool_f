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
    <div class="first-desc"></div>
    <div class="second-desc"></div>
    <div class="third-desc"></div> 
  </section>
  
   

  <!-- LEGACY HOME

  <main>
    <div style="margin-bottom: 10px;">Выберите темы вопросов</div>
    <div class="list-subjects">
      <div class="subject" v-for="subject in subjects" @click="(event) => {clickSubject(subject, event)}">
        <p>{{ subject.name }}</p>
      </div>
    </div>
    <div id="btn-train" to="test-train" @click="() => {clickTrain()}">ТРЕНИРОВАТЬСЯ</div>
  </main> -->

</template> 

<script setup>
import Header from "@/components/Header.vue";
import { API_SERVER } from "@/constants/API_SERVER.constants";
import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import LoginView from "./auth/Login.view.vue";


const router = useRouter();
const subjects = ref([]);
const selectedSubject = [];

watchEffect(async () => {
  const response = await fetch(API_SERVER.QUESTION.SUBJECT.ALL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
  });
  const data = await response.json();
  const { statusCode } = data;
  if (statusCode == 200) {
    subjects.value = data.subjects;
  }
});

function clickSubject(subject, event) {
  const already = selectedSubject.findIndex((value) => value == subject.id);
  
  if(already != -1) {
    selectedSubject.splice(already);
    event.currentTarget.classList.remove("subject-clicked");
  } else {
    selectedSubject.push(subject.id);
    event.currentTarget.classList.add("subject-clicked");
  }
}

function clickTrain() {
  router.push({ name: "test-train", query: { subjects: selectedSubject } });
}

function coursesLink() {
  window.location="/courses";
}

</script>

<style scoped>
body {
    background: #ebe8f7;
    display: flex;
    justify-content: center;
}

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
    color:rgb(90, 90, 90);
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
    transition: gap 1s ease;
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

/* LEGACY STYLE
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 93vh;
  padding-top: 65px;
}

#btn-train {
  padding: 10px;
  background-color: aquamarine;
  border-radius: 5px;
}

#btn-train:hover {
  background-color: black;
  color: white;
  cursor: pointer;
}

.navbar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.list-subjects{
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  height: auto;
  margin-bottom: 10px;
}

.subject {
  width: auto;
  height: auto;
  padding: 7px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid black;
}

.subject:hover {
  cursor: pointer;
  border: none;
}

.subject-clicked {
  background-color: black;
  color: white;
} */

</style>
