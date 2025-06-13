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

  &::selection {
    background: rgb(184, 255, 184);
    color: black;
  }
}

.all-flex {
  display: flex;
  flex-flow: column;
}

.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
