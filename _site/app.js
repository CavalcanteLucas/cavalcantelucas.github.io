document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
    {
      name: 'bet1',
      img: 'images/bet1.jpeg',
    },
    {
      name: 'bet1',
      img: 'images/bet1.jpeg',
    },
    {
      name: 'bet2',
      img: 'images/bet2.jpeg',
    },
    {
      name: 'bet2',
      img: 'images/bet2.jpeg',
    },
    {
      name: 'bet3',
      img: 'images/bet3.jpeg',
    },
    {
      name: 'bet3',
      img: 'images/bet3.jpeg',
    },
    {
      name: 'bet4',
      img: 'images/bet4.jpeg',
    },
    {
      name: 'bet4',
      img: 'images/bet4.jpeg',
    },
    {
      name: 'bet5',
      img: 'images/bet5.jpeg',
    },
    {
      name: 'bet5',
      img: 'images/bet5.jpeg',
    },
    {
      name: 'bet6',
      img: 'images/bet6.jpeg',
    },
    {
      name: 'bet6',
      img: 'images/bet6.jpeg',
    },
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []

  //board
  function createBoard() {
    for (let i=0; i<cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.setAttribute('class', 'card')
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/bet-b.jpeg')
      cards[optionTwoId].setAttribute('src', 'images/bet-b.jpeg')
      cardsWon.push(cards)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all'
    }
  }

  //flip card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard() 
})
