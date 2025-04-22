<template>
    <Header />

    <section class="tab">
        <h1 class="dev-tab-main-text">дев.школа</h1>
        <p class="dev-tab-desc">система образовательных курсов и тестов</p>

        <div class="buttons">
            <button class="dev-tab-start-courses" @click="router.push({ path: '/courses' })">
                <p class="dev-tab-courses">начни с наших курсов</p>
            </button>

            <button class="dev-tab-start-tests" @click="router.push({ path: '/tests' })">
                <p class="dev-tab-tests">начни с наших тестов</p>
            </button>
        </div>
    </section>

    <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import router from '@/router';
</script>

<style scoped>
.tab {
    position: relative;
    margin-top: 14px;
    align-items: center;
    display: flex;
    flex-flow: column wrap;
    width: 98%;
    height: 750px;
    background-image:
        repeating-radial-gradient(circle at 0 0, transparent 0, rgb(132, 253, 162) 10px), repeating-linear-gradient(rgb(139, 255, 230), rgb(168, 255, 157));
    border: 1px solid rgb(0, 219, 66);
    border-radius: 30px;
}

.dev-tab-main-text {
    position: relative;
    margin-top: 240px;
    font-size: 50px;
    font-weight: bold;
    color: rgb(41, 41, 41);
}

.dev-tab-desc {
    position: relative;
    padding: 10px 0px;
    margin-top: 10px;
    font-size: 20px;
    color: rgb(90, 90, 90);
}

.buttons {
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    margin-top: 20px;
}

.buttons button {
    position: relative;
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
    .dev-tab-desc {
        font-size: 17px;
    }

    .dev-tab-main-text {
        font-size: 40px;
        margin-top: 220px;
    }

    .tab {
        height: 600px;
    }
}

@media (max-width: 440px) {
    .dev-tab-desc {
        font-size: 14px;
    }

    .dev-tab-main-text {
        font-size: 32px;
        margin-top: 120px;
    }

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
