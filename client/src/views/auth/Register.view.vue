<template>
    <div class="page-div">
        <div class="register-container">
            <form name="login">
                <button class="remover-button" @click="()=>{router.push({path: '/'})}">
                    ✖
                </button>

                <div class="caption-form">Регистрация</div>

                <div class="item-form">
                    <input type="text" class="input-form" v-model="userData.surname" placeholder="Введите фамилию" />
                </div>

                <div class="item-form">
                    <input type="text" class="input-form" v-model="userData.name" placeholder="Введите имя" />
                </div>

                <div class="item-form">
                    <input type="text" class="input-form" v-model="userData.patronimyc"
                        placeholder="Введите отчество" />
                </div>

                <div class="item-form">
                    <input type="tel" class="input-form" v-model="userData.number_phone" placeholder="Введите номер" />
                </div>

                <div class="item-form">
                    <input type="email" class="input-form" v-model="userData.email" placeholder="Введите почту">
                </div>

                <div class="item-form">
                    <input type="text" class="input-form" v-model="userData.password" placeholder="Введите пароль">
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

</script>

<style scoped>
.page-div {
    position: fixed;
    z-index: 2;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: 
        linear-gradient(rgb(207, 183, 252), rgb(204, 194, 250),
      rgb(203, 208, 253), rgba(190, 183, 253, 0.541),
      rgba(201, 169, 253, 0.541));
}

.register-container {
    background: rgb(255, 255, 255);
    border: 2px solid rgb(199, 198, 198);
    border-radius: 26px;
    display: flex;
    flex-flow: column wrap;
    width: 400px;
    height: 700px;
    box-shadow: 5px 10px 30px 10px rgba(61, 61, 61, 0.432);
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
    border-radius: 4px;
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
    flex-flow: column wrap;
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
}

.reg-button:hover {
    background-color: rgb(87, 87, 87);
}

.login-link {
    padding: 30px 0px 0px 0px;
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
