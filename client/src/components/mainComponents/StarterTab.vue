<template>
    <section class="tab">
        <h1 class="dev-tab-main-text">{{ mainText }}</h1>
        <p class="dev-tab-desc">{{ secondaryText }}</p>

        <slot name="buttons"></slot>
    </section>
</template>

<script setup>
defineProps({
    mainText: String,
    secondaryText: String
});
</script>

<style scoped>
.tab {
    align-items: center;
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    background-image: url('@/views/bgImages/123.png');
    background-size: 100% 100%; /* Растягивает по ширине, сохраняет пропорции */
    background-repeat: no-repeat;
    background-position: top center;
    background-color: rgb(215, 255, 215);
}

.dev-tab-main-text {
    margin-top: 200px;
    font-size: 50px;
    font-weight: bold;
    color: rgb(41, 41, 41);
}

.dev-tab-desc {
    padding: 10px 0px;
    margin-top: 20px;
    font-size: 20px;
    color: rgb(90, 90, 90);
    text-align: center;
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
}
</style>