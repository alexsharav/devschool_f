<template>
    <Header />

    <StarterTab mainText="дев.школа" secondaryText="система образовательных курсов и тестов">
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
    border-radius: 18px;
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
    background: rgb(255, 255, 255);
}

.dev-tab-tests {
    color: rgb(0, 0, 0);
}

.dev-tab-start-tests:hover {
    background: rgb(201, 201, 201);
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
