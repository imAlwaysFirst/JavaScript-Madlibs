// Defining variables in different types \\
const adjective = "enormous"
const MoneyCount = 300000
const DoubleUp = MoneyCount * 2
const isRich = true
const Username = prompt("What is your name?")

// Construct Story \\
const story = `Once upon a time, ${Username} found an ${adjective} amount of money.` + ` The amount was ${MoneyCount} and ${Username} decided he wanted to double the amount.` + ` In the end, ${Username} ended up getting ${DoubleUp}.` + ` His friends asked him if he really is rich and he told them that it is ${isRich}.`
document.getElementById("story").innerText=story
