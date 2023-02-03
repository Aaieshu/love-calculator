// console.log("hello world");
// alert("k chha?");
// let response = prompt("what is your name");
// alert("hello" + response);
// let output = document.querySelector("#output");
// console.log(output);
// output.innerText = response;

let yourName = document.querySelector("#yourName");
let theirName = document.querySelector("#theirName");
let output = document.querySelector("#output")
let singlePeople = ['rupesh', 'shyam', 'hariS']

function calculate() {
    let name1 = yourName.value;
    let name2 = theirName.value;
    if (name1.length == 0 || name2.length == 0) {
        output.innerText = "love sove nagari padhna ja!"


    }
    else {
        if (singlePeople.includes(name1.toLowerCase())) {
            output.innerText = " Single Forever";
            yourName.value = ""
            theirName.value = ""
        }
        else {


            // console.log(name1, name2)
            let lovepercent = parseInt(Math.random() * 100)

            output.innerText = name1 + " & " + name2 + " " + lovepercent + "% in love"
            yourName.value = ""
            theirName.value = ""
        }
    }
}