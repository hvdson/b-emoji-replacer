const tagElement = document.body.getElementsByTagName('p');
const emoji = "🅱️";
const niggaRegex = (/(ni(?=bb|g|s|er|qq))/gi);
const nibba = "ni" + emoji + emoji + "a";

function replaceWithNibba(tagName) {
  for (let i = 0, l = tagName.length; i < l; i++) {
    // tagName[i].innerHTML = "inside " + tagName[i];

    let nibbaString = "";
    let parseText = tagName[i].innerHTML.split(" ");
    for (let word of parseText) {
      if (niggaRegex.test(word)){
        nibbaString += (nibba + " ");
      } else {
        nibbaString += (word + " ");
      }
    }
    tagName[i].innerHTML = nibbaString;
  }
}


function replaceWithBEmoji(tagName) {
  for (let i = 0, l = tagName.length; i < l; i++) {
    
    // replaces instances of any variation of niggas with nibbas
    let emojiString = "";
    let parseText = tagName[i].innerHTML.split("");
    for (let char of parseText) {
      if (char === "b" || char === "B"){
        emojiString += emoji + " ";
      } else {
        emojiString += char;
      }
    }
    tagName[i].innerHTML = emojiString;
  }
}

replaceWithBEmoji(tagElement);
// replaceWithNibba(tagElement);