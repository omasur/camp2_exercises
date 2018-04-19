function toWords(sentence) {

  if (!sentence) {
    return [];
  } else {
    const allWords = sentence.split(/[.?!, :']+/);
    return allWords.filter(word => word !== "");
  }
}

console.log(toWords("je.mange ? Et toi..."))

module.exports = toWords;
