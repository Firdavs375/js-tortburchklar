const quti = document.querySelector(".flex")
const KicikQuti = document.querySelectorAll(".block")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")
const btn8 = document.getElementById("btn8")
const btn9 = document.getElementById("btn9")



btn1.onclick = () => {
    for (let i = 0; i <= KicikQuti.length - 1; i++) {
        quti.style.justifyContent = "center";
        quti.style.alignItems = "start";
        KicikQuti[i].style.background = "yellow";
        KicikQuti[i].style.borderColor = "green";
    }

}

btn2.onclick = () => {
    for (let i = 0; i <= KicikQuti.length - 1; i++) {
        quti.style.justifyContent = "space-around";
        quti.style.alignItems = "start";
        KicikQuti[i].style.background = "yellow";
        KicikQuti[i].style.borderColor = "green";
    }
}

btn3.onclick = () => {
    for (let i = 0; i <= KicikQuti.length - 1; i++) {
        quti.style.justifyContent = "space-between";
        quti.style.alignItems = "start";
        KicikQuti[i].style.background = "yellow";
        KicikQuti[i].style.borderColor = "green";
    }
}

btn4.onclick = () => {
    for (let i = 0; i <= KicikQuti.length - 1; i++) {
        quti.style.justifyContent = "center";
        quti.style.alignItems = "center";
        KicikQuti[i].style.background = "crimson";
        KicikQuti[i].style.borderColor = "blue";
    }

}

btn5.onclick = () => {
    for (let i = 0; i <= KicikQuti.length - 1; i++) {
        quti.style.justifyContent = "space-around";
        quti.style.alignItems = "cenetr";
        KicikQuti[i].style.background = "crimson";
        KicikQuti[i].style.borderColor = "blue";
    }
}

btn6.onclick = () => {
    for (let i = 0; i <= KicikQuti.length - 1; i++) {
        quti.style.justifyContent = "space-between";
        quti.style.alignItems = "center";
        KicikQuti[i].style.background = "crimson";
        KicikQuti[i].style.borderColor = "blue";
    }
}


btn7.onclick = () => {
    for (let i = 0; i <= KicikQuti.length - 1; i++) {
        quti.style.justifyContent = "center";
        quti.style.alignItems = "end";
        KicikQuti[i].style.background = "green";
        KicikQuti[i].style.borderColor = "steelblue";
    }

}

btn8.onclick = () => {
    for (let i = 0; i <= KicikQuti.length - 1; i++) {
        quti.style.justifyContent = "space-around";
        quti.style.alignItems = "end";
        KicikQuti[i].style.background = "green";
        KicikQuti[i].style.borderColor = "steelblue";
    }
}

btn9.onclick = () => {
    for (let i = 0; i <= KicikQuti.length - 1; i++) {
        quti.style.justifyContent = "space-between";
        quti.style.alignItems = "end";
        KicikQuti[i].style.background = "green";
        KicikQuti[i].style.borderColor = "steelblue";
    }
}


// btn2.onclick = () => {
//     for (let i = 0; i <= KicikQuti.length - 1; i++) {
//         quti.style.justifyContent = "center";
//         quti.style.alignItems = "center";
//         KicikQuti[i].style.background = "crimson";
//         KicikQuti[i].style.borderColor = "blue";
//     }
// }







// btn3.onclick = () => {
//     for (let i = 0; i <= KicikQuti.length - 1; i++) {
//         quti.style.justifyContent = "center";
//         quti.style.justifyContent = "space-between";
//         KicikQuti[i].style.background = "chocolate";
//         KicikQuti[i].style.borderColor = "red";
//     }
// }

btn1.style.color = "#FFF"
btn1.style.border = "none"
btn1.style.padding = "10px 30px"
btn1.style.background = "darkorange"
btn1.style.borderRadius = "8px"
btn1.style.width = "200px"
btn1.style.height = "40px"
btn1.style.fontFamily = "'Courier New'"
btn1.style.fontWeight = "100"
btn1.style.fontSize = "15px"
btn1.style.marginLeft = "440px"
btn1.style.marginTop = "20px"
// btn1.style.boxShadow = "2px 2px 20px green"
// btn1.style.Hover; boxShadow = "2px 2px 20px green"
// YELLOW


btn2.style.color = "#FFF"
btn2.style.border = "none"
btn2.style.padding = "5px 30px"
btn2.style.background = "darkorange"
btn2.style.borderRadius = "8px"
btn2.style.width = "200px"
btn2.style.height = "40px"
btn2.style.fontFamily = "'Courier New'"
btn2.style.fontWeight = "100"
btn2.style.fontSize = "15px"
btn2.style.marginLeft = "20px"
// btn2.style.marginTop = "10px"

btn3.style.color = "#FFF"
btn3.style.border = "none"
btn3.style.padding = "5px 30px"
btn3.style.background = "darkorange"
btn3.style.borderRadius = "8px"
btn3.style.width = "200px"
btn3.style.height = "40px"
btn3.style.fontFamily = "'Courier New'"
btn3.style.fontWeight = "100"
btn3.style.fontSize = "15px"
btn3.style.marginLeft = "20px"
// btn3.style.marginTop = "20px"
// MAROON

btn4.style.color = "#FFF"
btn4.style.border = "none"
btn4.style.padding = "10px 30px"
btn4.style.background = "maroon"
btn4.style.borderRadius = "8px"
btn4.style.width = "200px"
btn4.style.height = "40px"
btn4.style.fontFamily = "'Courier New'"
btn4.style.fontWeight = "100"
btn4.style.fontSize = "15px"
btn4.style.marginLeft = "440px"
btn4.style.marginTop = "20px"
// btn1.style.boxShadow = "2px 2px 20px green"
// btn1.style.Hover; boxShadow = "2px 2px 20px green"


btn5.style.color = "#FFF"
btn5.style.border = "none"
btn5.style.padding = "5px 30px"
btn5.style.background = "maroon"
btn5.style.borderRadius = "8px"
btn5.style.width = "200px"
btn5.style.height = "40px"
btn5.style.fontFamily = "'Courier New'"
btn5.style.fontWeight = "100"
btn5.style.fontSize = "15px"
btn5.style.marginLeft = "20px"
// btn2.style.marginTop = "10px"

btn6.style.color = "#FFF"
btn6.style.border = "none"
btn6.style.padding = "5px 30px"
btn6.style.background = "maroon"
btn6.style.borderRadius = "8px"
btn6.style.width = "200px"
btn6.style.height = "40px"
btn6.style.fontFamily = "'Courier New'"
btn6.style.fontWeight = "100"
btn6.style.fontSize = "15px"
btn6.style.marginLeft = "20px"
// btn3.style.marginTop = "20px"

btn7.style.color = "#FFF"
btn7.style.border = "none"
btn7.style.padding = "10px 30px"
btn7.style.background = "green"
btn7.style.borderRadius = "8px"
btn7.style.width = "200px"
btn7.style.height = "40px"
btn7.style.fontFamily = "'Courier New'"
btn7.style.fontWeight = "100"
btn7.style.fontSize = "15px"
btn7.style.marginLeft = "440px"
btn7.style.marginTop = "20px"
// btn1.style.boxShadow = "2px 2px 20px green"
// btn1.style.Hover; boxShadow = "2px 2px 20px green"


btn8.style.color = "#FFF"
btn8.style.border = "none"
btn8.style.padding = "5px 30px"
btn8.style.background = "green"
btn8.style.borderRadius = "8px"
btn8.style.width = "200px"
btn8.style.height = "40px"
btn8.style.fontFamily = "'Courier New'"
btn8.style.fontWeight = "100"
btn8.style.fontSize = "15px"
btn8.style.marginLeft = "20px"
// btn2.style.marginTop = "10px"

btn9.style.color = "#FFF"
btn9.style.border = "none"
btn9.style.padding = "5px 30px"
btn9.style.background = "green"
btn9.style.borderRadius = "8px"
btn9.style.width = "200px"
btn9.style.height = "40px"
btn9.style.fontFamily = "'Courier New'"
btn9.style.fontWeight = "100"
btn9.style.fontSize = "15px"
btn9.style.marginLeft = "20px"
// btn3.style.marginTop = "20px"





















// btn4.onclick = () => {
//     for (let i = 0; i <= KicikQuti.length - 1; i++) {
//         quti.style.justifyContent = "space-around";
//         quti.style.alignItems = "start";
//         KicikQuti[i].style.background = "yellow";
//         KicikQuti[i].style.borderColor = "green";
//     }

// }
// btn5.onclick = () => {
//     for (let i = 0; i <= KicikQuti.length - 1; i++) {
//         quti.style.justifyContent = "space-between";
//         quti.style.alignItems = "start";
//         KicikQuti[i].style.background = "yellow";
//         KicikQuti[i].style.borderColor = "green";
//     }

// }


// const rasm = document.querySelectorAll(".flex")
// const btn = document.querySelector("button")

// // console.log(rasm);
// btn.onclik = () => {
//     for (let i = 0; i <= rasm.length - 1; i++) {
//         rasm[i].style.textAlign = "cenetr"
//     }
// }