<template>
    <Header />

    <section class="tab">
        <h1 class="dev-tab-main-text">дев.школа</h1>
        <p class="dev-tab-desc">система образовательных курсов и тестов</p>
        <div class="button-flex">
            <button class="dev-tab-start" @click="pushee('/courses')">
                <p class="dev-tab-courses">начни с наших курсов</p>
            </button>

            <button class="dev-tab-start-tests" @click="pushee('/tests')">
                <p class="dev-tab-tests">начни с наших тестов</p>
            </button>
        </div>
    </section>
</template>

<script setup>
import Header from "@/components/Header.vue";
import router from '@/router';

function pushee(pushing) {
    router.push({path: pushing});
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
    background-image:
        repeating-radial-gradient(circle at 0 0, transparent 0, rgb(189, 240, 255) 10px), repeating-linear-gradient(rgb(196, 255, 252), rgb(196, 255, 252));
    border: 2px solid rgb(113, 200, 221);
    border-radius: 30px;
}

.dev-tab-main-text {
    position: relative;
    top: 240px;
    font-size: 50px;
    font-weight: bold;
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
    padding: 16px 0px;
    align-items: center;
    transition: gap 0.4s ease;
    cursor: pointer;
    border: none;
}

.dev-tab-courses {
    color: white;
    font-size: 16px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 18px;
    padding: 0px 15px;
    transition: background-color 0.5 ease;
}

.dev-tab-start:hover {
    background: rgb(51, 51, 51);
}

.dev-tab-start-tests {
    position: relative;
    top: 320px;
    border-radius: 12px;
    display: flex;
    flex-flow: row wrap;
    padding: 16px 0px;
    background: rgb(248, 248, 248);
    gap: 0px;
    align-items: center;
    cursor: pointer;
    border: none;
}

.dev-tab-tests {
    color: rgb(0, 0, 0);
    font-size: 16px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 18px;
    padding: 0px 15px;
}

.dev-tab-start-tests:hover {
    background: rgb(233, 233, 233);
}

.dev-tab-devschool {
    color: rgba(240, 248, 255, 0);
    -webkit-text-stroke: 0.5px rgb(224, 224, 224);
    font-size: 100px;
    font-weight: bolder;
}

.button-flex {
    display: flex;
    flex-flow: row wrap;
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

    .dev-tab-start,
    .dev-tab-start-tests {
        top: 280px;
    }

    .tab {
        height: 600px;
    }

    .button-flex {
        flex-flow: column wrap;
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

    .dev-tab-start,
    .dev-tab-start-tests {
        top: 240px;
    }

    .tab {
        height: 500px;
    }
}
</style>
