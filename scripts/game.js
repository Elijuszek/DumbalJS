function initGameScreen() {
  const gameScreen = document.createElement('div');
  gameScreen.id = 'game';
  gameScreen.classList.add('scene');
  gameScreen.style.display = 'none';

  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');
  
  cardContainer.style.display = 'flex';
  cardContainer.style.flexDirection = 'row';
  
  gameScreen.appendChild(cardContainer);

  const cards = [
      { value: '2', suit: 'heart' },
      { value: '3', suit: 'spade' },
      { value: 'A', suit: 'diamond' },
      { value: 'J', suit: 'club' },
      { value: 'Q', suit: 'heart' },
      { value: 'K', suit: 'spade' },
      { value: 'Joker', suit: 'Joker' }
  ];

  // Adding cards on screen
  cards.forEach(({ value, suit }) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.value = value;
      card.dataset.suit = suit;
      card.style.marginRight = '10px';
      
      cardContainer.appendChild(card);
  });

  document.body.appendChild(gameScreen);

  const cardElements = document.querySelectorAll(".card");
  cardElements.forEach(addCardElements);
}

function addCardElements(card) {
  const value = card.dataset.value;
  const valueAsNumber = parseInt(value);

  if (isNaN(valueAsNumber)) {
      card.append(createPip(card.dataset.suit));
  } else {
      for (let i = 0; i < valueAsNumber; i++) {
          card.append(createPip(card.dataset.suit));
      }
  }

  card.append(createCornerNumber("top", value));
  card.append(createCornerNumber("bottom", value));
}

function createCornerNumber(position, value) {
  const corner = document.createElement("div");
  corner.textContent = value;
  corner.classList.add("corner-number");
  corner.classList.add(position);
  return corner;
}

function createPip(suit) {
  const pip = document.createElement("div");
  pip.classList.add("pip");
  pip.dataset.suit = suit;
  return pip;
}

// Initialize the game screen
initGameScreen();
