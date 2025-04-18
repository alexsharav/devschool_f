<template>
    <BackgroundAnimation />

    <div class="page-div">
        <div class="register-container">
            <form name="login">
                <button class="remover-button" @click="pushHome()">
                    ✖
                </button>

                <div class="caption-form">Регистрация</div>

                <div class="item-form">
                    <input type="text" class="input-form" v-model="userData.surname" placeholder="Введите фамилию" required/>
                </div>

                <div class="item-form">
                    <input type="text" class="input-form" v-model="userData.name" placeholder="Введите имя" required/>
                </div>

                <div class="item-form">
                    <input type="text" class="input-form" v-model="userData.patronimyc"
                        placeholder="Введите отчество" required/>
                </div>

                <div class="item-form">
                    <input type="tel" class="input-form" v-model="userData.number_phone" placeholder="Введите номер" required/>
                </div>

                <div class="item-form">
                    <input type="email" class="input-form" v-model="userData.email" placeholder="Введите почту" required/>
                </div>

                <div class="item-form">
                    <input type="password" class="input-form" v-model="userData.password" placeholder="Введите пароль" required/>
                </div>

                <div class="buttons-form">
                    <button class="reg-button" @click="registration">Зарегистрироваться</button>

                    <router-link class="login-link" to="/login">
                        <span class="acc">есть аккаунт? - </span>
                        <span class="auth-question">авторизация</span>
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { API_SERVER } from '@/constants/API_SERVER.constants';
import router from '@/router';
import { setCookie } from '@/utils/cookie';
import { ref } from 'vue';
import BackgroundAnimation from '../bgViews/BackgroundAnimation.vue';

const userData = ref({
    surname: "",
    name: "",
    patronimyc: "",
    number_phone: "",
    email: "",
    password: "",
});

function registration(event) {
    event.preventDefault();
    fetch(API_SERVER.AUTH.REGISTRATION, {
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
                case 201:
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
.page-div {
    z-index: 2;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: left;
    align-items: center;
}

.register-container {
    background: rgb(255, 255, 255);
    border: 2px solid rgba(199, 198, 198, 0.555);
    display: flex;
    flex-flow: column;
    width: 100vw;
    max-width: 500px;
    height: 100vh;
    box-shadow: 2px 10px 30px 10px rgba(255, 255, 255, 0.212);
    overflow: auto;
}

.caption-form {
    padding: 40px 0px 20px 0px;
    justify-self: center;
    font-weight: bolder;
    font-size: 29px;
    color: rgb(65, 65, 65);
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
    color: rgb(63, 63, 63);
}

.item-form {
    justify-self: center;
    padding: 30px 0px 0px 0px;
}

.input-form {
    border: none;
    border-bottom: 2px solid gray;
    height: 35px;
    width: 200px;
    padding: 0px 15px 0px 15px;
}

.input-form::placeholder {
    font-weight: bolder;
}

.buttons-form {
    display: flex;
    flex-flow: column;
    justify-self: center;
    padding: 55px 0px 0px 0px;
}

.reg-button {
    border-radius: 25px;
    background-color: rgb(37, 37, 37);
    color: white;
    border: none;
    cursor: pointer;
    height: 50px;
    width: 200px;
    transition: background-color 0.5s ease;
}

.reg-button:hover {
    background-color: rgb(87, 87, 87);
}

.login-link {
    padding: 30px 0px 22px 0px;
    color: rgb(0, 0, 0);
    font-size: 16px;
    cursor: pointer;
    background: none;
    text-decoration: none;
    border: none;
}

.acc {
    color: rgb(65, 65, 65);
}

.auth-question {
    text-decoration-line: underline;
}
</style>
