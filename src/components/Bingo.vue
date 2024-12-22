<template>
  <div class="notouch py-5">
    <div class="bingo-cards-wrapper" v-if="answers.length > 0">
      <div class="bingo-grid-row" v-bind:key="y" v-for="y in tableHeight">
        <div
            class="bingo-card"
            @click="answerClick(answers[(y - 1) * tableHeight + (x - 1)])"
            :class="isActive(answers[(y - 1) * tableHeight + (x - 1)]) ? 'active' : ''"
            v-bind:key="x"
            v-for="x in tableWidth"
        >
          <p class="mb-0">{{ answers[(y - 1) * tableHeight + (x - 1)].answer }}</p>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-bingo mx-auto d-block mt-5" @click="newGame">
      Új ebéd!
    </button>
  </div>
</template>

<script setup>
import BingoElements from '@/assets/items'
import BingoElements2018 from '@/assets/archive/2018.json'
import BingoElements2019 from '@/assets/archive/2019.json'
import BingoElements2020 from '@/assets/archive/2020.json'
import BingoElements2021 from '@/assets/archive/2021.json'
import BingoElements2022 from '@/assets/archive/2022.json'
import BingoElements2023 from '@/assets/archive/2023.json'
import shuffle from 'lodash/shuffle'
import {computed, onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()
const tableWidth = ref(5)
const tableHeight = ref(5)
const answers = ref([])

onMounted(() => {
  newGame(Number(route.params.year ?? 2024))
})

function isActive(element) {
  return element.count > 0
}

function answerClick(element) {
  element.count++

  if (isBingo.value) {
    alert('Egészségetekre, hajrá Magyarország, hajrá Magyarok!')
  }
}

function bingoEntries(year) {
  switch (year) {
    case 2018:
      return BingoElements2018.answers
    case 2019:
      return BingoElements2019.answers
    case 2020:
      return BingoElements2020.answers
    case 2021:
      return BingoElements2021.answers
    case 2022:
      return BingoElements2022.answers
    case 2023:
      return BingoElements2023.answers
    case 2024:
      return BingoElements.answers
    default:
      return []
  }
}

function newGame(year) {
  const bingoAnswers = bingoEntries(year)

  if (!bingoAnswers.length) {
    answers.value = []
    alert('Itt most nincs bingo :(')

    return
  }

  answers.value = shuffle(bingoAnswers)
      .slice(0, tableHeight.value * tableWidth.value)
      .map((element) => {
        return {
          count: 0,
          answer: element
        }
      })
}

const isBingo = computed(() => {
  return !answers.value.filter((a) => a.count === 0).length
})
</script>

<style>
.bingo-cards-wrapper {
  padding: 5px;
  margin: 0 auto;
}

.bingo-grid-row {
  display: flex;
}

.bingo-card {
  margin: 5px;
  cursor: pointer;
  text-align: center;
  background-color: hsla(0, 0%, 100%, 0.95);
  background-image: linear-gradient(0deg, hsla(0, 0%, 70.6%, 0.8), hsla(0, 0%, 100%, 0.25));
  border: 5px solid #c00;
  font-weight: bold;
  font-family: Lucida Sans Unicode,
  Lucida Grande,
  sans-serif;
  font-size: 18px;
  word-wrap: break-word;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  padding: 5px 10px;
  color: #333;
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bingo-card:hover {
  border: 5px solid #e00;
  color: #111;
}

.bingo-card.active {
  background-color: hsla(0, 0%, 66.7%, 0.85);
  border-color: #f22;
  animation-name: bingo;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.btn-bingo {
  border-color: #eee;
  background-color: #cc0000;
  color: #eee;
  font-weight: bold;
}

.btn-bingo:focus {
  box-shadow: none;
}

.btn-bingo:hover {
  color: #eee;
  background-color: #ee0000;
}

@keyframes bingo {
  0% {
    border-color: #ff2222;
  }

  25% {
    border-color: #ee0000;
  }

  50% {
    border-color: #ff9911;
  }

  100% {
    border-color: #ff2222;
  }
}

@media screen and (max-width: 767px) {
  .bingo-grid-row {
    display: block;
  }
}
</style>
