<template>
  <div id="app">
    <HeaderWrap></HeaderWrap>
    <div class="container main">
        <router-view></router-view>
    </div>
    <FooterWrap></FooterWrap>
  </div>
</template>

<script>
import HeaderWrap from './components/header';
import FooterWrap from './components/footer';

export default {
    components: {
        HeaderWrap,
        FooterWrap
    }
}
</script>

<style>
.container {
    width: 1140px;
    margin: 0 auto;
}
.main {
    margin-top: 40px;
}

@media (max-width: 1140px) {
    .container,
    .page-container {
        width:100%
    }
}

@media (max-width: 768px) {
    .container,
    .page-container {
        padding:0 20px
    }
}
</style>