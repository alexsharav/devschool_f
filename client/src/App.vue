<template>
  <div class="all-flex">
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  background-color: #ffffff;
  background-color: #ffffff;
  background-image: radial-gradient(#2f2f2f36 0.8px, #ffffff 0.8px);
  background-size: 16px 16px;
}

.all-flex {
  display: flex;
  justify-content: center;
}
</style>
