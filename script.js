const board = document.querySelector(".board");

let pairs = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
let selectedCards = [];

pairs.forEach((pair) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerText = pair;
  card.dataset.value = pair;
  card.addEventListener("click", isMatch);

  board.append(card);
});

function isMatch(value) {
  const selectedCard = value.target;

  if (selectedCard.classList.contains("open")) {
    return;
  }

  selectedCard.classList.add("open");
 
  selectedCards.push(selectedCard);

  if(selectedCards.length > 1) {
    const card1 = selectedCards[0];
    const card2 = selectedCards[1];

    if(card1.dataset.value === card2.dataset.value) {
      console.log('fez par')
      selectedCards = [];
    } else {
      selectedCards = [];
      setTimeout(() => {
        card1.classList.remove('open');
        card2.classList.remove('open');
      }, 800)
    }
  }
}
