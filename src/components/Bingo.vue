<template>
    <div id="content">
        <table>
            <tbody>
                <tr v-bind:key="y" v-for="y in tableHeight">
                    <td  class="bingo" v-bind:key="x" v-for="x in tableWidth">
                        {{ answers[(y - 1)*tableHeight + x] }}
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
    import BingoElements from '../assets/items'

    export default {
        data() {
          return {
              tableWidth: 5,
              tableHeight: 5
          }
        },
        computed: {
            answers() {
                const bingoAnswers = BingoElements.answers
                return this._.shuffle(bingoAnswers).slice(0,26)
            }
        }
    }
</script>
