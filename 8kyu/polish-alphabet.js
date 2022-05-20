// Instructions

// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

// P: Will I be given a string without a diacritic? Will I ever be given an empty string?
// Will I ever be given anything other than a string? What to do about special characters?

function correctPolishLetters(str) {
  let polDiacritics = {
    ą: "a",
    ć: "c",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };
  return str
    .split(" ")
    .map((e) => polDiacritics[e] || e)
    .join(" ");
}
// look through array for diacritics

//conditional to replace diacritics

// if not a diacritic return letter

// join string back together

// R: Return a string that has no diacritics.

// E:

console.log(unPolished("Jędrzej Błądziński")), "Jedrzej Bladzinski";
console.log("Michael is awesome!"), "Michael is awesome!";
console.log(" "), " ";
