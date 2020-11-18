<template>
    <div id="main">
        <Header title="喵喵登录"></Header>
        <Login></Login>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Header from '@/components/Header/header.vue'
import Tabbar from '@/components/Tabbar/tabbar.vue'
import Login from '@/components/Login'

export default {
    name: 'Mine',
    components:{
        Header,
        Tabbar,
        Login
    }
}
</script>

<style scoped>

</style>