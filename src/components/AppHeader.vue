<template>
    <div id="header" class="text-center">
        <p>Ünnepi Bingo az Ünnepi Ebéd mellé</p>
    </div>
</template>

<style scoped>
    #header{
        position:absolute;
        top:0px;
        left:0px;
        right:0px;
        width:100%;
        height:50px;
        background-color:rgba(0,0,0,.66);
        background-image: linear-gradient(to top,rgba(180,180,180,.5),rgba(255,255,255,0));
        text-align:center;
        z-index:1;
        border-bottom:4px solid rgba(0,0,0,0.8);
    }
    #header p{
        padding:14px;
        font-size:22px;
        color:#eeeeee;
        font-family:"Times New Roman", Times, serif;
        font-style:italic;
        font-weight:bold;
        margin:auto;
        max-width:50%;
        white-space: nowrap;
    }
</style>
