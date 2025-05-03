<template>
    <section class="container-page">
        <div class="login-container">
            <form name="login-form">
                <button class="remover-button" @click="pushHome()">
                    <img class="x-image" :src="require('@/views/bgImages/x.png')">
                </button>

                <h1 class="caption-form">Авторизация</h1>

                <div class="item-form">
                    <input type="email" id="login" class="input-form" v-model="userData.login" placeholder="Почта" required/>
                </div>

                <div class="item-form">
                    <input type="password" id="password" class="input-form" v-model="userData.password" placeholder="Пароль" required/>
                </div>

                <div class="buttons-form">
                    <button class="lgn-button" @click="login()">
                        <span style="color: white">Войти</span>
                    </button>

                    <br>

                    <router-link class="reg-link" to="/registration">
                        <span class="no-acc">нет аккаунта? - </span>
                        <span class="reg-question">регистрация</span>
                    </router-link>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup>
import { getCookie } from '@/utils/cookie';
import { useRouter } from 'vue-router';
const token = getCookie("tkn");
const router = useRouter();

const props = defineProps({
});
</script>

<style scoped>
</style>