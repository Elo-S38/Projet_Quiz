let scoreArray = []
let nbTentatives = 0

let scoreP = document.querySelector('#score');
if (window.localStorage.scoreArray)
{
	scoreArray = JSON.parse(window.localStorage.getItem("scoreArray"))
}
for (let j = 0;j < scoreArray.length ;j++)
{
	scoreP.innerHTML += "tentative n " + (j+1) + ":" + `<br>` + scoreArray[j] + " / " + 4 + `<br>`
}