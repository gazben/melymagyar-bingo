<template>
    <div>
        <ul>
            <li v-bind:key="index" v-for="(element, index) in answers">{{ element }}</li>
        </ul>
        Ide jön a bingó
    </div>
</template>

<script>
    import BingoElements from '../assets/items'

    export default {
        computed: {
            answers() {
                const bingoAnswers = BingoElements.answers
                return this._.shuffle(bingoAnswers).slice(0,24)
            }
        }
    }
</script>
