<template>
    <div>
        <h1>Burası yeşil component</h1>
        <p>Saat 22.38</p>
        <button @click="counter++">Yeşil sayaç</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
export default{
    data(){
        return{
            counter:0,
        }
    }
}
</script>

<style scoped>
    div {
        border: 1px solid green;
        background-color: lightgreen;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>