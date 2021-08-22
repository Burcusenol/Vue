<template>
    <div>
        <h1>Burası mavi component</h1>
        <p>Saat 22.39</p>
        <button @click="counter++">Mavi sayaç</button>
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
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>