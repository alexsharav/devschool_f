<template>
    <Header />

    <StarterTab mainText="Дев.Школа" secondaryText="образовательные курсы и тесты для всех">
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
        <h1>Дев.Школа - Платформа для тех, кто хочет войти в IT. Курсы по программированию, практические задания и поддержка от экспертов. Учиться легко — даже с нуля.</h1>

        <p>Наша образовательная платформа построена для развития технических навыков: от базового программирования до продвинутых технологий. 
            Мы верим, что каждый может стать разработчиком. Наши курсы — это путь от первых строк кода до уверенного старта в карьере. 
            Обучение, практика, результат.</p>
    </section>

    <Footer />
</template>

<script setup>
import Header from "@/components/mainComponents/Header.vue";
import Footer from "@/components/mainComponents/Footer.vue";
import StarterTab from "@/components/mainComponents/StarterTab.vue";
import { useRouter } from 'vue-router';

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
}

.buttons button {
    border-radius: 12px;
    display: flex;
    flex-flow: row wrap;
    padding: 16px 0px;
    align-items: center;
    cursor: pointer;
    border: none;
    transition: background-color 0.6s ease;
}

.buttons button p {
    font-size: 16px;
    text-decoration: none;
    font-weight: bold;
    padding: 0px 15px;
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
    margin-top: 20px;
}

.devschool-base-info h1 {
    font-weight: normal;
    font-size: 35px;
    padding-right: 5px;
    border-right: 1px solid black;
}

.devschool-base-info p {
    padding-left: 10px;
    font-size: 18px;
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
    }

    .buttons button p {
        font-size: 12px;
    }
}
</style>
