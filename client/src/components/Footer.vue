<template>
    <footer :class="['footer-box', { 'fixed-footer': isFixed }]">
        <router-link to="/" class="dev-head-main">© dev.school</router-link>
        <h1 class="devschool-footer-text">2025 pre-alpha</h1>
    </footer>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const isFixed = ref(false)

const updateFooterPosition = () => {
    nextTick(() => {
        isFixed.value = document.body.scrollHeight <= window.innerHeight
    })
}

onMounted(() => {
    updateFooterPosition()
    window.addEventListener('resize', updateFooterPosition)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateFooterPosition)
})
</script>

<style scoped>
.footer-box {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    width: 90%;
    max-width: 1200px;
    min-height: 64px;
    margin-top: 10px;
}


.fixed-footer {
    position: absolute;
    bottom: 0;
}

.dev-head-main {
    text-decoration: none;
}

.devschool-footer-text,
.dev-head-main {
    font-weight: normal;
    font-size: 20px;
    color: rgb(22, 22, 22);
}

@media (max-width: 930px) {
    .display-main {
        display: none;
    }

    .display-button {
        display: block;
    }

    .nav-bar {
        display: none;
        flex-direction: column;
        width: 100%;
        background-color: white;
        border-top: 1px solid #ccc;
        margin-top: 10px;
        padding: 10px 0;
        gap: 10px;
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 10;
    }

    .nav-visible {
        display: flex !important;
    }
}

@media (max-width: 750px) {
    .devschool-footer-text,
    .dev-head-main {
        font-size: 17px;
    }
}

@media (max-width: 500px) {
    .devschool-footer-text,
    .dev-head-main {
        font-size: 15px;
    }
}
</style>