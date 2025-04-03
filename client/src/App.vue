<template>
  <div class="all-flex">
    <router-view />
  </div>
</template>

<style>
/* ПОДКЛЮЧЕНИЕ ШРИФТОВ */

/* @import url("https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@200..700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  background: #ebe8f7;
}

.all-flex {
  display: flex;
  justify-content: center;
}

</style>
