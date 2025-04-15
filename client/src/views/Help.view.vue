<template>
    <Header />

    <section class="tab">
        <h1 class="dev-tab-main-text">прислушиваемся к вам</h1>
        <p class="dev-tab-desc">нашей целью является постоянное улучшение внешнего вида сайта и его работы</p>
    </section>

    <section class="help-panel">
        <div class="contact-information">
            <h1 class="co-text">Информация и контакты</h1>
        </div>

        <div class="send-email">
            <h1></h1>
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
    background: rgb(233, 233, 233);
    width: 98%;
    max-width: 1200px;
    height: auto;
    z-index: 2;
    display: flex;
    flex-flow: row wrap;
}

.contact-information {
    padding: 30px 2% 0px 2%;
    border-radius: 18px;
    border-right: 1px solid rgba(206, 206, 206, 0.705);
    background: white;
    display: flex;
    flex-flow: wrap;
    height: 600px;
}

.co-text {
    font-weight: normal;
    font-size: 27px;
    color: rgb(59, 59, 59);
    text-align: center;
}

.send-email {
}

@media (max-width: 700px) {
    .dev-tab-desc {
        font-size: 17px;
        top: 180px;
        padding: 10px 5%;
    }

    .dev-tab-main-text {
        font-size: 30px;
        top: 160px;
    }

    .tab {
        height: 360px;
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