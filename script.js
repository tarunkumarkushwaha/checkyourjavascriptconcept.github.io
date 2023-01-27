// document declerations 
let frontpage = document.getElementById('frontpage')
let examsession = document.getElementById('examsession')
let quespage1 = document.getElementById('quespage1')
let quespage2 = document.getElementById('quespage2')
let quespage3 = document.getElementById('quespage3')
let quespage4 = document.getElementById('quespage4')
let quespage5 = document.getElementById('quespage5')
let resultpage = document.getElementById('resultpage')
let blankmarksheet = document.getElementById('blankmarksheet')
let time = document.getElementById('time')
let prevresult = document.getElementById('prevresponse')

// response outlet
let response = []
prevresult.innerText = localStorage.getItem("responses") ? localStorage.getItem("responses")
 : "Previous Records - no previous record, lets try for the best"
frontpage.append(prevresult)

// buttons 
const teststartbutton = () => {
    countout()
    quespage1.removeAttribute("class", "invisible")
    frontpage.removeAttribute("class", "frontpage")
    quespage1.setAttribute("class", "visible")
    frontpage.setAttribute("class", "invisible")
    time.removeAttribute("class", "invisible")
}
const retry = () => {
    window.location.reload()
}
const page2 = () => {
    quespage1.setAttribute("class", "invisible")
    quespage2.removeAttribute("class", "invisible")
    quespage2.setAttribute("class", "visible")
}
const page3 = () => {
    quespage2.setAttribute("class", "invisible")
    quespage3.removeAttribute("class", "invisible")
    quespage3.setAttribute("class", "visible")
}
const page4 = () => {
    quespage3.setAttribute("class", "invisible")
    quespage4.removeAttribute("class", "invisible")
    quespage4.setAttribute("class", "visible")
}
const page5 = () => {
    quespage4.setAttribute("class", "invisible")
    quespage5.removeAttribute("class", "invisible")
    quespage5.setAttribute("class", "visible")
}
const resultpagehandler = () => {
    time.remove()
    quespage1.remove()
    quespage2.remove()
    quespage3.remove()
    quespage4.remove()
    quespage5.remove()
    resultpage.removeAttribute("class", "invisible")
    resultpage.setAttribute("class", "visible")
}

// timers 
const startTimer = (duration, display) => {
    let timer = duration
    let minutes
    let seconds
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            resultpagehandler()
            // console.log("your response is " , response)
        }
    }, 1000);
}
const countout = () => {
    let twoMin = 60 * 10;
    // let twoMin = 10;
    let display = document.querySelector('#time');
    startTimer(twoMin, display);
};

// radios selections
// ques 1
const btn1 = document.querySelector('#btn1');
const radioButtons1 = document.querySelectorAll('input[name="size"]');
btn1.addEventListener("click", () => {
    let selectedSize;
    for (const radioButton of radioButtons1) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }
    // save the response 
    selectedSize ? response.push(selectedSize) : response.push(false)
    // console.log(response)
});
btn1.addEventListener("click", page2);
// ques 2
const btn2 = document.querySelector('#btn2');
const radioButtons2 = document.querySelectorAll('input[name="size"]');
btn2.addEventListener("click", () => {
    let selectedSize;
    for (const radioButton of radioButtons2) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }
    // save the response 
    selectedSize ? response.push(selectedSize) : response.push(false)
    // console.log(response)
});
btn2.addEventListener("click", page3);
// ques 3
const btn3 = document.querySelector('#btn3');
const radioButtons3 = document.querySelectorAll('input[name="size"]');
btn3.addEventListener("click", () => {
    let selectedSize;
    for (const radioButton of radioButtons3) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }
    // save the response 
    selectedSize ? response.push(selectedSize) : response.push(false)
    // console.log(response)
});
btn3.addEventListener("click", page4);
// ques 4 true
const btn4 = document.querySelector('#btn4');
const radioButtons4 = document.querySelectorAll('input[name="size"]');
btn4.addEventListener("click", () => {
    let selectedSize;
    for (const radioButton of radioButtons3) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }
    // save the response 
    selectedSize ? response.push(selectedSize) : response.push(false)
    // console.log(response)
});
btn4.addEventListener("click", page5);

// ques 5
const btn5 = document.querySelector('#btn5');
const radioButtons5 = document.querySelectorAll('input[name="size"]');
btn5.addEventListener("click", () => {
    let selectedSize;
    for (const radioButton of radioButtons2) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }
    // save the response 
    selectedSize ? response.push(selectedSize) : response.push(false)
    blankmarksheet.innerHTML = `No of wrong ans - ${response.filter((ans) => ans != true).length}/5 and no of True ans - ${response.filter((ans) => ans != false).length}/5`
    localStorage.setItem("responses", `Previous result - ${blankmarksheet.innerText}`)
    // console.log(response)
});
btn5.addEventListener("click", resultpagehandler);
