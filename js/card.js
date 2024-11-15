let cotalogRow = document.querySelector(".cotalog-row");

function getCotalogs(cotalog) {
  let cotalogCard = document.createElement("div");
  cotalogCard.className = "cotalog-card";

  let cotalogCardBody = document.createElement("div");
  cotalogCardBody.className = "cotalog-card__body";

  let cotalogImg = document.createElement("img");
  cotalogImg.src = cotalog.img[0];
  cotalogImg.alt = cotalog.name;
  cotalogCardBody.appendChild(cotalogImg);

  let cotalogCardFooter = document.createElement("div");
  cotalogCardFooter.className = "cotalog-card__footer";

  let cotalogTitle = document.createElement("h3");
  cotalogTitle.innerHTML = `${cotalog.name}`;

  cotalogCardFooter.prepend(cotalogTitle);

  cotalogCard.append(cotalogCardBody, cotalogCardFooter);

  return cotalogCard;
}

function renderCotalogCards() {
  const groupSizes = [3, 4, 3];
  let currentGroupIndex = 0;
  let cardCount = 0;
  let cardGroup = document.createElement("div");
  cardGroup.className = "card-group";

  cotalog.forEach((cotalog) => {
    let card = getCotalogs(cotalog);
    cardGroup.appendChild(card);
    cardCount++;

    if (cardCount === groupSizes[currentGroupIndex]) {
      cotalogRow.appendChild(cardGroup);
      cardGroup = document.createElement("div");
      cardGroup.className = "card-group";
      cardCount = 0;
      currentGroupIndex++;
    }
  });

  if (cardGroup.children.length > 0) {
    cotalogRow.appendChild(cardGroup);
  }
}

renderCotalogCards();
