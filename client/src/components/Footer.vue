<template>
    <footer class="footer-box">
        <router-link to="/" class="dev-head-main">© dev.school</router-link>

        <h1 class="devschool-footer-text">2025</h1>
    </footer>
</template>

<script setup>
</script>

<style scoped>
.footer-box {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    width: 99%;
    max-width: 1200px;
    min-height: 64px;
    padding: 4px 10px;
}

.dev-head-main {
    text-decoration: none;
}

.devschool-footer-text,
.dev-head-main {
    font-weight: normal;
    font-size: 20px;
    color: rgb(20, 20, 20);
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
</style>