<template>
    <div id="content">
        <table v-if="answers.length > 0">
            <tbody>
                <tr v-bind:key="y" v-for="y in tableHeight">
                    <td @click="answerClick(answers[(y - 1)*tableHeight + (x-1)])" class="bingo"
                        :class="isActive(answers[(y - 1)*tableHeight + (x-1)]) ? 'active' : ''" v-bind:key="x"
                        v-for="x in tableWidth">
                        {{ answers[(y - 1)*tableHeight + (x-1)].answer }}
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
    import BingoElements from '../assets/items'

    export default {
        mounted() {
            const bingoAnswers = BingoElements.answers
            this.answers = this._.shuffle(bingoAnswers).slice(0,25).map((element) => {
                return { count: 0, answer: element }
            })
        },
        data() {
          return {
              tableWidth: 5,
              tableHeight: 5,
              answers: [],
          }
        },
        methods: {
          isActive(element) {
              return element.count > 0
          },
          answerClick(element) {
              element.count++
          }
        }
    }
</script>
