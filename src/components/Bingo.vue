<template>
<div id="content" class="bingo-content notouch">
  <div class="bingo-cards-wrapper" v-if="answers.length > 0">
    <div class="bingo-grid-row" v-bind:key="y" v-for="y in tableHeight">
      <div class="bingo-card" @click="answerClick(answers[(y - 1)*tableHeight + (x-1)])" :class="isActive(answers[(y - 1)*tableHeight + (x-1)]) ? 'active' : ''" v-bind:key="x" v-for="x in tableWidth">
        <div class="bingo-card-content">{{ answers[(y - 1)*tableHeight + (x-1)].answer }}</div>
      </div>
    </div>
  </div>

  <div class="reset">
    <button class="btn-bingo active" @click="newGame">
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

      if (this.isBingo) {
        alert('Egészségetekre, hajrá Magyarország, hajrá Magyarok!')
      }
    },
    newGame() {
      const bingoAnswers = BingoElements.answers
      this.answers = this._.shuffle(bingoAnswers).slice(0, this.tableHeight * this.tableWidth).map((element) => {
        return {
          count: 0,
          answer: element
        }
      })
    },
  },
  computed: {
    isBingo() {
      let bingo = true

      this.answers.forEach((elem) => {
        if (elem.count === 0) {
          bingo = false
        }
      })

      return bingo
    }
  }
}
</script>
