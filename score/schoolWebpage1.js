let scoreArray = []
let nbTentatives = 0
if (window.localStorage.scoreArray)
{
	scoreArray = JSON.parse(window.localStorage.getItem("scoreArray"))
}
if (window.localStorage.nbTentatives = window.localStorage.getItem('nbTentatives'))
{
	nbTentatives = window.localStorage.getItem('nbTentatives')
}
else
{
	window.localStorage.setItem("nbTentatives", nbTentatives)
}
let scoreP = document.querySelector('#score');

if (window.localStorage.score && scoreArray.length <= nbTentatives)
{
	console.log("ok");
	scoreArray.push(localStorage.getItem('score'))
	window.localStorage.setItem("scoreArray", JSON.stringify(scoreArray))
	nbTentatives++
	window.localStorage.setItem('nbTentatives', nbTentatives)
}

for (let j = 0;j < scoreArray.length ;j++)
{
	scoreP.innerHTML += "tentative n " + (j+1) + ":" + `<br>` + scoreArray[j] + " / " + 4 + `<br>`
}