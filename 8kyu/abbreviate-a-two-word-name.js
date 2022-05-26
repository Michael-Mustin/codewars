const abbrevName = (
  names //switched to an arrow function
) =>
  names
    .split(" ") //split characters into an array
    .map((s) => s[0].toUpperCase()) //returned new arrays and made index 0 uppercase
    .join("."); //Joined with a period between the letters
