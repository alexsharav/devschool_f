<template>
    <Header />

    <section class="tab">
        <h1 class="dev-tab-main-text">прислушиваемся к вам</h1>
        <p class="dev-tab-desc">дев.школа - образовательный сайт, целью которого является постоянное улучшение внешнего
            вида сайта, его работы и содержания</p>
    </section>

    <section class="help-panel">
        <div class="contact-information">
            <h1 class="co-text">Информация и контакты</h1>
        </div>

        <div class="send-email">

        </div>
    </section>
</template>

<script setup>
import Header from "@/components/Header.vue";
</script>

<style scoped>
.tab {
    position: relative;
    top: 14px;
    align-items: center;
    display: flex;
    flex-flow: column wrap;
    width: 98%;
    height: 500px;
    background-image:
        repeating-radial-gradient(circle at 0 0, transparent 0, rgb(156, 206, 253) 10px), repeating-linear-gradient(rgb(182, 202, 255), rgb(187, 219, 255));
    border: 2px solid rgba(108, 98, 255, 0.541);
    border-radius: 30px;

}

.dev-tab-main-text {
    position: relative;
    top: 200px;
    font-size: 50px;
    font-weight: bold;
    color: rgb(41, 41, 41);
}

.dev-tab-desc {
    position: relative;
    padding: 10px 15%;
    text-align: center;
    text-justify: inter-word;
    top: 220px;
    font-size: 20px;
    color: rgb(90, 90, 90);
}

.help-panel {
    position: relative;
    top: 50px;
    margin-bottom: 90px;
    margin-top: auto;
    border: 1px solid rgba(206, 206, 206, 0.705);
    border-radius: 18px;
    background: rgb(250, 250, 250);
    width: 98%;
    max-width: 1200px;
    height: 500px;
    z-index: 2;
}

.contact-information {
    height: 100%;
    width: 40%;
    padding: 40px 0px 0px 35px;
    border-radius: 18px;
    border-right: 1px solid rgba(206, 206, 206, 0.705);
    background: white;
    display: flex;
    flex-flow: wrap;
}

.co-text {
    font-weight: normal;
    font-size: 27px;
    color: rgb(59, 59, 59);
}

@media (max-width: 700px) {
    .dev-tab-desc {
        font-size: 17px;
        top: 200px;
        padding: 10px 5%;
    }

    .dev-tab-main-text {
        font-size: 30px;
        top: 180px;
    }

    .tab {
        height: 400px;
    }
}

@media (max-width: 400px) {
    .dev-tab-desc {
        font-size: 14px;
        top: 170px;
    }

    .dev-tab-main-text {
        font-size: 22px;
        top: 155px;
        padding: 10px 0px;
    }

    .tab {
        height: 350px;
    }
}
</style>