function defineSuit(card) {
  if (card.includes("♣")) {
    return "clubs";
  } else if (card.includes("♦")) {
    return "diamonds";
  } else if (card.includes("♥")) {
    return "hearts";
  } else if (card.includes("♠")) {
    return "spades";
  }
}

// More beautiful solution

function defineSuit(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts",
  };
  return s[card.charAt(card.length - 1)];
}
