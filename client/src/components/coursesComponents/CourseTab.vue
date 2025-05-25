<template>
    <section class="course-tab">
        <div>
            <h1 class="course-tab-main-text">{{ courseMainText }}</h1>
            <p class="course-tab-desc">{{ courseSecondaryText }}</p>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    courseMainText: String,
    courseSecondaryText: String
});
</script>

<style scoped>
.course-tab {
    align-items: center;
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    height: 300px;
    background-color: rgb(223, 223, 223);
    margin-top: 120px;
}

.course-tab-main-text {
    margin-top: 120px;
    font-size: 50px;
    font-weight: bold;
    color: rgb(32, 32, 32);
}

.course-tab-desc {
    padding: 10px 0px;
    margin-top: 20px;
    font-size: 20px;
    color: rgb(90, 90, 90);
    text-align: center;
}

@media (max-width: 750px) {
    .course-tab-desc {
        font-size: 17px;
        margin-top: 10px;
        padding: 10px 5%;
    }

    .course-tab-main-text {
        font-size: 30px;
        margin-top: 160px;
    }

    .course-tab {
        height: 360px;
    }
}

@media (max-width: 400px) {
    .course-tab-desc {
        font-size: 14px;
    }

    .course-tab-main-text {
        font-size: 22px;
        margin-top: 120px;
        padding: 10px 0px;
    }

    .course-tab {
        height: 280px;
    }
}
</style>