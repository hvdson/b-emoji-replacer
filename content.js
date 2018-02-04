const pText = document.body.getElementsByTagName('span');
const emoji = "🅱️";
for (let i = 0, l = pText.length; i < l; i++) {
  pText[i].innerHTML = emoji;
}