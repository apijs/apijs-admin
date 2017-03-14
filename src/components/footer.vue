<template>
    <div class="c-foot" v-html="copyright" />
</template>

<script>
export default {
    data() {
        return {
            copyright: `&copy;${new Date().getFullYear()} <a href="https://apijs.org">Apijs</a>`
        };
    }
}
</script>

<style>
html {
    position: relative;
    min-height: 100%;
    background-color: rgb(255, 255, 255);
}
body {
    margin-bottom: 40px;
}
.c-foot {
    position: absolute;
    margin: 0px;
    left: 0px;
    bottom: 0px;
    width: 100%;
    padding: 10px 0px;
    text-align: center;
    color: #696969; 
}
</style>