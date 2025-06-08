<template> <!--сделать работу с js(отправка сообщения)-->
    <section class="help-panel">
        <div class="contact-information">
            <h1 class="contact-information-text">Информация и контакты</h1>

            <div class="our-information-office info-item">
                <img class="map-image" :src="mapPNG" alt="map-image">

                <div class="info-text">
                    <h1>Наш офис</h1>

                    <p>667000, г. Кызыл, ул. Кочетова, д.53, помещение 3.</p>
                </div>
            </div>

            <div class="our-information-phone info-item">
                <img class="phone-image" :src="phonePNG" alt="phone-image">

                <div class="info-text">
                    <h1>Номер телефона</h1>

                    <p>8-923-267-48-88</p>
                </div>
            </div>

            <div class="our-information-education info-item">
                <img class="education-image" :src="educationPNG"
                    alt="education-image">

                <div class="info-text">
                    <h1>Образование</h1>

                    <p>Профессиональное обучение<br>
                        Адаптированные образовательные программы не реализуются<br>
                        Форма обучения – очная,<br>
                        Язык образования – русский.<br>
                        Нормативный срок обучения устанавливается образовательной программой.
                    </p>
                </div>
            </div>

        </div>

        <div class="send-email">
            <h1 class="send-email-text">Напиши нам письмо</h1>


            <form class="email-form">

                <div class="name-fields">
                    <input type="text" placeholder="Имя">
                    <input type="text" placeholder="Фамилия">
                </div>

                <input type="email" placeholder="Email*" required>

                <textarea class="resize-textarea" placeholder="Сообщение" rows="6"></textarea>

                <button type="submit" class="submit-button">Отправить</button>
            </form>
        </div>

    </section>
</template>

<script setup>
import mapPNG from '@/views/bgImages/icons8-map-50.png'
import phonePNG from '@/views/bgImages/icons8-phone-100.png'
import educationPNG from '@/views/bgImages/icons8-education-100.png'
import { ref } from 'vue';

const helpData = ref({  // на будущее (надо доработать)
    userName: undefined,
    userSecondName: undefined,
    userEmail: undefined,
    userMessage: undefined,
});

function helpSetter(fieldName, newValue) {
    if (Boolean(newValue)) {
        helpData.value[fieldName] = newValue;
    }
}
</script>

<style scoped>
.help-panel {
    border: 1px solid rgba(167, 167, 167, 0.705);
    border-radius: 18px;
    background: rgb(250, 250, 250);
    width: 98%;
    max-width: 1200px;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    margin-top: 150px;
}

.contact-information {
    padding: 30px 0px 0px 0px;
    border-radius: 18px;
    background: white;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    width: 35%;
    border-right: 1px solid rgba(167, 167, 167, 0.705);
}

.contact-information-text,
.send-email-text {
    font-weight: normal;
    font-size: 24px;
    color: rgb(59, 59, 59);
}

.send-email {
    padding: 30px 0px 0px 0px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    width: 65%;
}

.info-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 20px 0px 0px 0px;
    width: 90%;
}

.info-item img {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
}

.info-text {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.info-text h1 {
    font-size: 20px;
    margin: 0;
    font-weight: normal;
    color: rgb(77, 77, 77);
}

.info-text p {
    font-size: 16px;
    margin: 0;
    line-height: 1.4;
    color: gray;
}

.our-information-education {
    margin: 0px 0px 30px 0px;
}

.email-form {
    width: 95%;
    display: flex;
    flex-flow: column;
    gap: 15px;
    margin: 20px 0px;
}

.email-form label {
    font-size: 14px;
    font-weight: 500;
    color: #333;
}

.name-fields {
    display: flex;
    flex-flow: wrap;
    gap: 10px;
}

.name-fields input {
    flex: 1;
}

.email-form input,
.email-form textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
}

.resize-textarea {
    resize: none;
}

.submit-button {
    background-color: #111;
    color: white;
    padding: 12px;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

.submit-button:hover {
    background-color: #525252;
}

@media (max-width: 630px) {
    .help-panel {
        flex-flow: column-reverse;
    }

    .contact-information {
        border-top: 1px solid rgba(167, 167, 167, 0.705);
        border-right: none;
    }

    .contact-information,
    .send-email {
        width: 100%;
    }
}

@media (max-width: 930px) {

    .contact-information-text,
    .send-email-text {
        font-size: 20px;
    }

    .info-item img {
        width: 25px;
        height: 25px;
    }

    .info-text h1 {
        font-size: 17px;
    }

    .info-text p {
        font-size: 14px;
    }
}

@media (max-width: 700px) {

    .contact-information-text,
    .send-email-text {
        font-size: 18px;
    }

    .info-item img {
        width: 25px;
        height: 25px;
    }

    .info-text h1 {
        font-size: 15px;
    }

    .info-text p {
        font-size: 12px;
    }
}
</style>