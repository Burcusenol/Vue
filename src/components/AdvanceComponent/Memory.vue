<template>
    <div>
        <slot name="heading"></slot>
    </div>
 

</template>


<script>
export default {
    props:["content"]
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