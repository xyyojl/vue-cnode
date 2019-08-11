<template>
    <div class="loader">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div>
</template>

<script>

export default {
  name: 'Loading',
}
</script>

<style>
    .loader{
        position: absolute;
        top: 50%;
        left: 40%;
        margin-left: 10%;
        transform:translate3d(-50%,-50%,0)
    }
    .dot{
        width: 24px;
        height: 24px;
        background: #3ac;
        border-radius: 100%;
        display: inline-block;
        animation: slide 1s infinite;
    }
    @keyframes slide{
        0%{transform: scale(1)}
        50%{transform: scale(2);opacity: .3;}
        100%{transform: scale(1)}
    }
</style>
