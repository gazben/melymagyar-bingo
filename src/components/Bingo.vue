<template>
    <div id="content">
        <table class="table h-90" v-if="answers.length > 0">
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

        <div class="align-center" style="margin-top: 50px">
            <button class="reset" style="display: block;" @click="newGame">
                Új ebéd!
            </button>
        </div>
    </div>
</template>

<script>
    import BingoElements from '../assets/items'

    export default {
        mounted() {
            this.newGame()
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

              if(this.isBingo) {
                  alert('Egészségetekre, hajrá Magyarország, hajrá Magyarok!')
              }
          },
          newGame() {
              const bingoAnswers = BingoElements.answers
              this.answers = this._.shuffle(bingoAnswers).slice(0,this.tableHeight * this.tableWidth).map((element) => {
                  return { count: 0, answer: element }
              })
          },
        },
        computed: {
            isBingo() {
                let bingo = true

                this.answers.forEach((elem) => {
                    if(elem.count === 0)
                        bingo = false
                })

                return bingo
            }
        }
    }
</script>

<style>
    .reset{
        margin:auto;
        text-align:center;
        z-index:3;
        position:relative;
        display:none;
        border:1px solid #eeeeee;
        background-color:#cc0000;
        border-radius:2px;
        color:#eeeeee;
        font-weight:bold;
        padding:5px;
        cursor:pointer;
        width:100px;
    }

    .reset:hover{
        background-color:#ee0000;
    }
</style>


