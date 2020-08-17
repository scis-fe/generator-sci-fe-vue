<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    mounted() {
        this.$nextTick(() => {
            console.log(this.$http)
            console.log(this.$share)
        })
    },
}
</script>

<style>
#app {
    font-family: "PingFang SC", "Microsoft YaHei", sans-serif, Helvetica;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
