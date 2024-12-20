var data = [
    {
        "question": "1.A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        "head": "PROBLEMS ON TRAIN",
        "one": "200 Meters",
        "two": "180 Meters",
        "three": "140 Meters",
        "four": "150 Meters",
        "Answer": "four",
        "select": ""

    }, {
        "question": "2.A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going in 10 seconds.The speed of the train is: ",
        "head": "PROBLEMS ON TRAIN",
        "one": "100 km/hr",
        "two": "50 km/hr",
        "three": "490 km/hr",
        "four": "200 km/hr",
        "Answer": "two",
        "select": ""
    }, {
        "question": "3.The length of the bridge, which a train 130 metres long and travelling at 45 km/hr can cross in 30  seconds, is:",
        "head": "PROBLEMS ON TRAIN",
        "one": "200 M",
        "two": "180 M",
        "three": "400 M",
        "four": "150 M",
        "Answer": "three",
        "select": ""
    }, {
        "question": "1.A alone can do a piece of work in 6 days and B alone in 8 days. A and B undertook to do it for Rs. 3200. With the help of C, they completed the work in 3 days. How much is to be paid to C?",
        "head": "PROBLEMS ON WORK AND TIME",
        "one": "Rs.200",
        "two": "Rs.400",
        "three": "Rs.375",
        "four": "Rs.234",
        "Answer": "two",
        "select": ""
    }, {
        "question": "2.If 6 men and 8 boys can do a piece of work in 10 days while 26 men and 48 boys can do the same in 2  days, the time taken by 15 men and 20 boys in doing the same type of work will be:",
        "head": "PROBLEMS ON WORK AND TIME",
        "one": "4 days",
        "two": "5 days",
        "three": "6 days",
        "four": "7 days",
        "Answer": "one",
        "select": ""
    }, {
        "question": "3.A can do a piece of work in 4 hours; B and C together can do it in 3 hours, while A and C together can do it in 2 hours. How long will B alone take to do it?",
        "head": "PROBLEMS ON WORK AND TIME",
        "one": "8 Hours",
        "two": "10 Hours",
        "three": "12 Hours",
        "four": "24 Hours",
        "Answer": "three",
        "select": ""
    }, {
        "question": "1.If a person walks at 14 km/hr instead of 10 km/hr, he would have walked 20 km more. The actual  distance travelled by him is:",
        "head": "TIME AND DISTANCE",
        "one": "50 Km",
        "two": "29 Km",
        "three": "60 Km",
        "four": "45 Km",
        "Answer": "one",
        "select": ""
    }, {
        "question": "2.Excluding stoppages, the speed of a bus is 54 kmph and including stoppages, it is 45 kmph. For how many minutes does the bus stop per hour?",
        "head": "TIME AND DISTANCE",
        "one": "9 Min",
        "two": "10 Min",
        "three": "12 Min",
        "four": "20 Min",
        "Answer": "two",
        "select": ""
    }, {
        "question": "3.Robert is travelling on his cycle and has calculated to reach point A at 2 P.M. if he travels at 10  kmph, he will reach there at 12 noon if he travels at 15 kmph. At what speed must he travel to reach A at 1 P.M.?",
        "head": "TIME AND DISTANCE",
        "one": "8 Kmph",
        "two": "13 Kmph",
        "three": "12 Kmph",
        "four": "5 Kmph",
        "Answer": "three",
        "select": ""
    }
]
var count = 0;
var conAnswer = 0;
var i, answer = [];
var questions = document.getElementById("ques")
var options1 = document.getElementById("op1")
var options2 = document.getElementById("op2")
var options3 = document.getElementById("op3")
var options4 = document.getElementById("op4")
var heading = document.getElementById("head")
questions.innerHTML = data[count].question
options1.innerHTML = data[count].one
options2.innerHTML = data[count].two
options3.innerHTML = data[count].three
options4.innerHTML = data[count].four
heading.innerHTML = data[count].head
ne = document.getElementById("next").addEventListener("click", () => {
    if (data[count].select == "") {
        var answer = document.getElementById("ans-error")
        answer.innerHTML = "Please Select Any One"
        answer.style.color = "red"
    } else if (count < 8) {
        var answer = document.getElementById("ans-error")
        answer.innerHTML = "";
        count++;
        heading.innerHTML = data[count].head
        questions.innerHTML = data[count].question
        options1.innerHTML = data[count].one
        options2.innerHTML = data[count].two
        options3.innerHTML = data[count].three
        options4.innerHTML = data[count].four

    } else {
        openPopup();
    }
    if (count == 8) {
        var NEXT = document.getElementById("next")
        NEXT.innerHTML = "SUBMIT"
    } else {
        var NEXT = document.getElementById("next")
        NEXT.innerHTML = "NEXT"
    }
})


pre = document.getElementById("previous").addEventListener("click", () => {
    if (count > 0) {
        count--;
        questions.innerHTML = data[count].question
        options1.innerHTML = data[count].one
        options2.innerHTML = data[count].two
        options3.innerHTML = data[count].three
        options4.innerHTML = data[count].four

    }
    if (count == 8) {
        var NEXT = document.getElementById("next")
        NEXT.innerHTML = "SUBMIT"
    } else {
        var NEXT = document.getElementById("next")
        NEXT.innerHTML = "NEXT"
    }

})

function radcheck() {
    var radiocheck = document.getElementById('option1');
    radiocheck.checked = false;
    var radiocheck = document.getElementById('option2');
    radiocheck.checked = false;
    var radiocheck = document.getElementById('option3');
    radiocheck.checked = false;
    var radiocheck = document.getElementById('option4');
    radiocheck.checked = false;
    if (data[count + 1].select == "one") {
        var radiocheck = document.getElementById('option1');
        radiocheck.checked = true;
    }
    if (data[count + 1].select == "two") {
        var radiocheck = document.getElementById('option2');
        radiocheck.checked = true;
    }
    if (data[count + 1].select == "three") {
        var radiocheck = document.getElementById('option3');
        radiocheck.checked = true;
    }
    if (data[count + 1].select == "four") {
        var radiocheck = document.getElementById('option4');
        radiocheck.checked = true;
    }


}

function val(c) {
    data[count].select = c
    var answer = document.getElementById("ans-error")
    answer.innerHTML = ""
}
function previousradcheck() {
    var answer = document.getElementById("ans-error")
    answer.innerHTML = ""
    answer.style.color = "red"
    if (data[count - 1].select == "one") {
        var radiocheck = document.getElementById('option1');
        radiocheck.checked = true;
    }
    if (data[count - 1].select == "two") {
        var radiocheck = document.getElementById('option2');
        radiocheck.checked = true;
    }
    if (data[count - 1].select == "three") {
        var radiocheck = document.getElementById('option3');
        radiocheck.checked = true;
    }
    if (data[count - 1].select == "four") {
        var radiocheck = document.getElementById('option4');
        radiocheck.checked = true;
    }

}
function openPopup() {
    var popup = document.getElementById('popup')
    var bo = document.getElementById('bo')
    bo.classList.add('open-bo')
    popup.classList.add("open-popup")
}
function closepopup() {
    popup.classList.remove('open-popup')
    answers();
}
function answers() {
    for (i = 0; i < 9; i++) {
        if (data[i].select == data[i].Answer) {
            conAnswer++;
        }
        if (i == 2) {
            answer[0] = conAnswer;
            conAnswer = 0
        }
        if (i == 5) {
            answer[1] = conAnswer;
            conAnswer = 0
        }
        if (i == 8) {
            answer[2] = conAnswer;
            conAnswer = 0
        }
    }

    var LastAnswer = answer[0] + answer[1] + answer[2]
    localStorage.setItem("passValue", answer[0])
    localStorage.setItem("textValue", answer[1])
    localStorage.setItem("Value", answer[2])
    localStorage.setItem("answerValue", LastAnswer)

}


