<template>
    <BackgroundAnimation />

    <section class="container-page">
        <div class="login-container">
            <form name="login-form">
                <button class="remover-button" @click="pushHome()">
                    ✖
                </button>

                <h1 class="caption-form">Авторизация</h1>

                <div class="item-form">
                    <input type="email" id="login" class="input-form" v-model="userData.login" placeholder="Почта" />
                </div>

                <div class="item-form">
                    <input type="password" id="password" class="input-form" v-model="userData.password" placeholder="Пароль" />
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
import { API_SERVER } from '@/constants/API_SERVER.constants';
import router from '@/router';
import { setCookie } from '@/utils/cookie';
import { ref } from 'vue';
import BackgroundAnimation from '../BackgroundAnimation.vue';

const userData = ref({
    login: "",
    password: "",
});

function login(event) {
    event.preventDefault();
    fetch(API_SERVER.AUTH.LOGIN, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData.value),
    })
        .then((res) => res.json())
        .then((resData) => {
            const { statusCode, data, message } = resData;

            switch (statusCode) {
                case 200:
                    setCookie("tkn", data.token, data.exp);
                    router.push("/profile");
                    break;

                default:
                    alert(message);
                    break;
            }
        });
}

function pushHome() {
    router.push({path: '/'});
}
</script>

<style scoped>

.container-page {
    z-index: 2;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: left;
    align-items: center;
    background: rgba(255, 255, 255, 0.753);
}

.login-container {
    background: rgb(255, 255, 255);
    border: 2px solid rgba(199, 198, 198, 0.336);
    height: 100vh;
    width: 100vw;
    max-width: 500px;
    display: flex;
    flex-flow: column;
    box-shadow: 2px 10px 30px 10px rgba(61, 61, 61, 0.212);
    overflow: auto;
}

.login-form {
    display: flex;
    flex-flow: column;
}

.remover-button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 20px;
    position: relative;
    display: block;
    margin-left: auto;
    top: 10px;
    right: 20px;
    color:rgb(63, 63, 63);
}

.caption-form {
    padding: 20vh 0px 0px 0px;
    justify-self: center;
    font-weight: bolder;
    font-size: 29px;
    color: rgb(65, 65, 65);
}

.item-form {
    justify-self: center;
    padding: 45px 0px 0px 0px;
}

.input-form {
    border: none;
    border-bottom: 2px solid gray;
    height: 45px;
    width: 240px;
    padding: 0px 30px 0px 30px;
}

.input-form::placeholder {
    color: rgb(102, 102, 102);
    font-weight: bolder;
}

.buttons-form {
    display: flex;
    flex-flow: column;
    justify-self: center;
    padding: 55px 0px 0px 0px;
}

.lgn-button {
    border-radius: 18px;
    background-color: rgb(37, 37, 37);
    border: none;
    cursor: pointer;
    align-items: center;
    height: 40px;
    justify-content: center;
}

.lgn-button:hover {
    background-color: rgb(87, 87, 87);
}

.reg-link {
    padding: 10px 0px 22px 0px;
    color: rgb(0, 0, 0);
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    background: none;
    border: none;
}

.no-acc {
    color: rgb(65, 65, 65);
}

.reg-question {
    text-decoration-line: underline;
}

</style>