<template>
    <div>
        <h1>Burası kırmızı component</h1>
        <p>Saat 22.37</p>
        <button @click="counter++">Kırmızı sayaç</button>
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
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>