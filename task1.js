const getMiddle = (word) => {
  const index = Math.floor(word.length / 2);
  if (word.length % 2) {
    console.log(word.charAt(Math.floor));
  } else {
    console.log(word.slice(index - 1, index + 1));
  }
};

getMiddle("test");

getMiddle("testing");

getMiddle("middle");

getMiddle("A");
