<template>
  <div class="all-flex">
    <div class="content-wrapper">
      <router-view />
    </div>
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
  background-image: radial-gradient(#2f2f2f36 0.8px, #ffffff 0.8px);
  background-size: 16px 16px;
}

.all-flex {
  display: flex;
  flex-flow: column wrap;
}

.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
