<template>
    <div>
       <h1>New Memory Componenti</h1>
       <button @click="counter++">Arttır</button>
       <p>{{counter}}</p>
    </div>
 

</template>


<script>
export default {
    data(){
        return{
            counter:0,
        }
    },
    destroyed(){
        console.log("destroyed")
    },
    activated(){
        console.log("actived")
    },
    deactivated(){
        console.log("deactived")
    }
}
</script>

<style scoped>
div{
    border: 1px solid #ccc;
    box-shadow:1px 1px 2 px #666;
    padding: 10px 20px;
    margin-top: 20px;

}
</style>