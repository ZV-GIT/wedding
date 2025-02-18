var 
MainFIO,            //ФИО главного гостя 
Email,              //Email главного гостя
YESNO,              //Идёт или не идёт на свадьбу
countPeople = 0,    //Количество гостей
MainEat,            //Блюдо главного гостя
MainDrink,           //Напиток главного гостя

FIO1,               //ФИО гостя №1
Eat1,               //Еда гостя №1
Drink1,             //Напиток гостя №1

FIO2,               //ФИО гостя №2
Eat2,               //Еда гостя №2
Drink2,             //Напиток гостя №2

FIO3,               //ФИО гостя №3
Eat3,               //Еда гостя №3
Drink3,             //Напиток гостя №3

FIO4,               //ФИО гостя №4
Eat4,               //Еда гостя №4
Drink4,             //Напиток гостя №4

FIO5,               //ФИО гостя №5
Eat5,               //Еда гостя №5
Drink5,             //Напиток гостя №5

FIO6,               //ФИО гостя №6
Eat6,               //Еда гостя №6
Drink6,             //Напиток гостя №6

FIO7,               //ФИО гостя №7
Eat7,               //Еда гостя №7
Drink7,             //Напиток гостя №7

FIO8,               //ФИО гостя №8
Eat8,               //Еда гостя №8
Drink8,             //Напиток гостя №8

FIO9,               //ФИО гостя №9
Eat9,               //Еда гостя №9
Drink9;             //Напиток гостя №9

function func1(stringClass1) {
    document.querySelector(stringClass1).style.display = "none"
}
function func2(stringClass2) {
    document.querySelector(stringClass2).style.display = "block"
}
function func3(stringClass3) {
    document.querySelector(stringClass3).classList.toggle('unvisible');
}
function forwardQuestion(currentSection, nextSection) {
    document.querySelector(currentSection).classList.toggle('unvisible');
    document.querySelector(currentSection).style.pointerEvents = "none";
    setTimeout(func1, 400, currentSection);

    document.querySelector(nextSection).style.pointerEvents = "all";
    setTimeout(func2, 400, nextSection);
    setTimeout(func3, 500, nextSection);
}

function checkCountPeople(count, currentSection, nextSection) {
    if (countPeople == count) {
        forwardQuestion (currentSection, '.section-end1');
        console.log(MainFIO)            //ФИО главного гостя 
        console.log(Email)              //Email главного гостя
        console.log(YESNO)              //Идёт или не идёт на свадьбу
        console.log(countPeople)        //Количество гостей
        console.log(MainEat)            //Блюдо главного гостя
        console.log(MainDrink)           //Напиток главного гостя

        console.log(FIO1)               //ФИО гостя №1
        console.log(Eat1)               //Еда гостя №1
        console.log(Drink1)             //Напиток гостя №1

        console.log(FIO2)               //ФИО гостя №2
        console.log(Eat2)               //Еда гостя №2
        console.log(Drink2)             //Напиток гостя №2

        console.log(FIO3)               //ФИО гостя №3
        console.log(Eat3)               //Еда гостя №3
        console.log(Drink3)             //Напиток гостя №3

        console.log(FIO4)               //ФИО гостя №4
        console.log(Eat4)               //Еда гостя №4
        console.log(Drink4)             //Напиток гостя №4

        console.log(FIO5)               //ФИО гостя №5
        console.log(Eat5)               //Еда гостя №5
        console.log(Drink5)             //Напиток гостя №5

        console.log(FIO6)               //ФИО гостя №6
        console.log(Eat6)               //Еда гостя №6
        console.log(Drink6)             //Напиток гостя №6

        console.log(FIO7)               //ФИО гостя №7
        console.log(Eat7)               //Еда гостя №7
        console.log(Drink7)             //Напиток гостя №7

        console.log(FIO8)               //ФИО гостя №8
        console.log(Eat8)               //Еда гостя №8
        console.log(Drink8)             //Напиток гостя №8

        console.log(FIO9)               //ФИО гостя №9
        console.log(Eat9)               //Еда гостя №9
        console.log(Drink9)             //Напиток гостя №9
    } else {
        forwardQuestion (currentSection, nextSection);
    }
}

function enabledButtonForward(btn) {
    document.querySelector(btn).style.opacity = 1;
    document.querySelector(btn).style.pointerEvents = "all";
}

function defaultBackgraundColor(choice1, choice2, choice3, choice4, currentChoice) {
    document.querySelector(choice1).style.backgroundColor = "revert-layer";
    document.querySelector(choice2).style.backgroundColor = "revert-layer";
    document.querySelector(choice3).style.backgroundColor = "revert-layer";
    document.querySelector(choice4).style.backgroundColor = "revert-layer";
    document.querySelector(currentChoice).style.backgroundColor = "rgba(174, 23, 73, 0.35)";
}

function paintTextPeople(currentText) {
    for (i = 1; i <= 10; i++) {
        document.getElementById("p" + i).style.color = "rgba(41, 48, 69, 0.7)";
        document.getElementById("p" + i).style.textDecoration = "none";
    }
    document.getElementById(currentText).style.color = "rgba(41, 48, 69, 1)";
    document.getElementById(currentText).style.textDecoration = "underline";
}

document.querySelector('.btn0-f').addEventListener('click', () => {
    forwardQuestion ('.section0', '.section1');
});

// Отмена нажатия Enter
document.querySelector('.form1').addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
});
document.querySelector('.form1').addEventListener('submit', function(event) {
    if (document.querySelector('.section1-inner__input').value !== "") {
        event.preventDefault();
        forwardQuestion ('.section1', '.section2');
        MainFIO = document.querySelector('.section1-inner__input').value;
    }
});

document.querySelector('.form2').addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
});
document.querySelector('.form2').addEventListener('submit', function(event) {
    if (document.querySelector('.section2-inner__input').value !== "") {
        event.preventDefault();
        forwardQuestion ('.section2', '.section3');
        Email = document.querySelector('.section2-inner__input').value;
    }
});

document.querySelector('.btn3-fgood').addEventListener('click', () => {
    forwardQuestion ('.section3', '.section4');
    document.querySelector(".btn3-fgood").style.backgroundColor = "rgba(174, 23, 73, 0.35)";
    YESNO = 1;
});

document.querySelector('.btn3-fbad').addEventListener('click', () => {
    forwardQuestion ('.section3', '.section-end2');
    YESNO = 0;
});

document.querySelector('.btn3-f').addEventListener('click', () => {
    forwardQuestion ('.section3', '.section4');
});

// function fullPeopleAgain(x) {
//     for (i = 0; i <= x; i++) {
//         img[i].src = './img/icon-man3.png';
//     }
// }

document.querySelector('.btn4-f1').addEventListener('click', () => {
    forwardQuestion ('.section4', '.section5');
    countPeople = 1;
    setTimeout(enabledButtonForward, 500, ".btn4-f");
    paintTextPeople("p1");
});
document.querySelector('.btn4-f2').addEventListener('click', () => {
    forwardQuestion ('.section4', '.section5');
    countPeople = 2;
    setTimeout(enabledButtonForward, 500, ".btn4-f");
    paintTextPeople("p2");
});
document.querySelector('.btn4-f3').addEventListener('click', () => {
    forwardQuestion ('.section4', '.section5');
    countPeople = 3;
    setTimeout(enabledButtonForward, 500, ".btn4-f");
    paintTextPeople("p3");
});
document.querySelector('.btn4-f4').addEventListener('click', () => {
    forwardQuestion ('.section4', '.section5');
    countPeople = 4;
    setTimeout(enabledButtonForward, 500, ".btn4-f");
    paintTextPeople("p4");
});
document.querySelector('.btn4-f5').addEventListener('click', () => {
    forwardQuestion ('.section4', '.section5');
    countPeople = 5;
    setTimeout(enabledButtonForward, 500, ".btn4-f");
    paintTextPeople("p5");
});
document.querySelector('.btn4-f6').addEventListener('click', () => {
    forwardQuestion ('.section4', '.section5');
    countPeople = 6;
    setTimeout(enabledButtonForward, 500, ".btn4-f");
    paintTextPeople("p6");
});
document.querySelector('.btn4-f7').addEventListener('click', () => {
    forwardQuestion ('.section4', '.section5');
    countPeople = 7;
    setTimeout(enabledButtonForward, 500, ".btn4-f");
    paintTextPeople("p7");
});
document.querySelector('.btn4-f8').addEventListener('click', () => {
    forwardQuestion ('.section4', '.section5');
    countPeople = 8;
    setTimeout(enabledButtonForward, 500, ".btn4-f");
    paintTextPeople("p8");
});
document.querySelector('.btn4-f9').addEventListener('click', () => {
    forwardQuestion ('.section4', '.section5');
    countPeople = 9;
    setTimeout(enabledButtonForward, 500, ".btn4-f");
    paintTextPeople("p9");
});
document.querySelector('.btn4-f10').addEventListener('click', () => {
    forwardQuestion ('.section4', '.section5');
    countPeople = 10;
    setTimeout(enabledButtonForward, 500, ".btn4-f");
    paintTextPeople("p10");
});
document.querySelector('.btn4-f').addEventListener('click', () => {
    forwardQuestion ('.section4', '.section5');
});



document.querySelector('.btn5-f').addEventListener('click', () => {
    forwardQuestion ('.section5', '.section6');
});

// background-color:rgba(174, 23, 73, 0.15);



document.querySelector('.btn6-f1').addEventListener('click', () => {
    defaultBackgraundColor('.btn6-f1', '.btn6-f2', '.btn6-f3', '.btn6-f4', '.btn6-f1');
    forwardQuestion ('.section6', '.section7');
    MainEat = "Говядина";
    setTimeout(enabledButtonForward, 500, ".btn6-f");
});
document.querySelector('.btn6-f2').addEventListener('click', () => {
    defaultBackgraundColor('.btn6-f1', '.btn6-f2', '.btn6-f3', '.btn6-f4', '.btn6-f2');
    forwardQuestion ('.section6', '.section7');
    MainEat = "Свинина";
    setTimeout(enabledButtonForward, 500, ".btn6-f");
});
document.querySelector('.btn6-f3').addEventListener('click', () => {
    defaultBackgraundColor('.btn6-f1', '.btn6-f2', '.btn6-f3', '.btn6-f4', '.btn6-f3');
    forwardQuestion ('.section6', '.section7');
    MainEat = "Курица";
    setTimeout(enabledButtonForward, 500, ".btn6-f");
});
document.querySelector('.btn6-f4').addEventListener('click', () => {
    defaultBackgraundColor('.btn6-f1', '.btn6-f2', '.btn6-f3', '.btn6-f4', '.btn6-f4');
    forwardQuestion ('.section6', '.section7');
    MainEat = "Рыба";
    setTimeout(enabledButtonForward, 500, ".btn6-f");
});
document.querySelector('.btn6-f').addEventListener('click', () => {
    forwardQuestion ('.section6', '.section7');
});

document.querySelector('.btn7-f1').addEventListener('click', () => {
    defaultBackgraundColor('.btn7-f1', '.btn7-f2', '.btn7-f3', '.btn7-f4', '.btn7-f1');
    MainDrink = "Шампанское";
    setTimeout(enabledButtonForward, 500, ".btn7-f");
    checkCountPeople(1, '.section7', '.section8');
});
document.querySelector('.btn7-f2').addEventListener('click', () => {
    defaultBackgraundColor('.btn7-f1', '.btn7-f2', '.btn7-f3', '.btn7-f4', '.btn7-f2');
    MainDrink = "Вино";
    setTimeout(enabledButtonForward, 500, ".btn7-f");
    checkCountPeople(1, '.section7', '.section8');
});
document.querySelector('.btn7-f3').addEventListener('click', () => {
    defaultBackgraundColor('.btn7-f1', '.btn7-f2', '.btn7-f3', '.btn7-f4', '.btn7-f3');
    MainDrink = "Водка";
    setTimeout(enabledButtonForward, 500, ".btn7-f");
    checkCountPeople(1, '.section7', '.section8');
});
document.querySelector('.btn7-f4').addEventListener('click', () => {
    defaultBackgraundColor('.btn7-f1', '.btn7-f2', '.btn7-f3', '.btn7-f4', '.btn7-f4');
    MainDrink = "Сок";
    setTimeout(enabledButtonForward, 500, ".btn7-f");
    checkCountPeople(1, '.section7', '.section8');
});
document.querySelector('.btn7-f').addEventListener('click', () => {
    forwardQuestion ('.section7', '.section8');
});

document.querySelector('.btn8-f').addEventListener('click', () => {
    forwardQuestion ('.section8', '.section101');
});
// 1
document.querySelector('.form3').addEventListener('submit', function(event) {
    if (document.querySelector('.section101-inner__input').value !== "") {
        event.preventDefault();
        forwardQuestion ('.section101', '.section102');
        FIO1 = document.querySelector('.section101-inner__input').value;
        console.log(FIO1);
    }
});

// document.querySelector('.btn101-f').addEventListener('click', () => {
//     forwardQuestion ('.section102', '.section103');
//     FIO1 = document.querySelector('.section101-inner__input').value;
// });

document.querySelector('.btn102-f1').addEventListener('click', () => {
    defaultBackgraundColor('.btn102-f1', '.btn102-f2', '.btn102-f3', '.btn102-f4', '.btn102-f1');
    forwardQuestion ('.section102', '.section103');
    Eat1 = "Говядина";
    setTimeout(enabledButtonForward, 500, ".btn102-f");

});
document.querySelector('.btn102-f2').addEventListener('click', () => {
    defaultBackgraundColor('.btn102-f1', '.btn102-f2', '.btn102-f3', '.btn102-f4', '.btn102-f2');
    forwardQuestion ('.section102', '.section103');
    Eat1 = "Свинина";
    setTimeout(enabledButtonForward, 500, ".btn102-f");

});
document.querySelector('.btn102-f3').addEventListener('click', () => {
    defaultBackgraundColor('.btn102-f1', '.btn102-f2', '.btn102-f3', '.btn102-f4', '.btn102-f2');
    forwardQuestion ('.section102', '.section103');
    Eat1 = "Курица";
    setTimeout(enabledButtonForward, 500, ".btn102-f");

});
document.querySelector('.btn102-f4').addEventListener('click', () => {
    defaultBackgraundColor('.btn102-f1', '.btn102-f2', '.btn102-f3', '.btn102-f4', '.btn102-f2');
    forwardQuestion ('.section102', '.section103');
    Eat1 = "Рыба";
    setTimeout(enabledButtonForward, 500, ".btn102-f");

});
document.querySelector('.btn102-f').addEventListener('click', () => {
    forwardQuestion ('.section102', '.section103');
});

document.querySelector('.btn103-f1').addEventListener('click', () => {
    defaultBackgraundColor('.btn103-f1', '.btn103-f2', '.btn103-f3', '.btn103-f4', '.btn103-f1');
    Drink1 = "Шампанское";
    checkCountPeople(2, '.section103', '.section111');
    setTimeout(enabledButtonForward, 500, ".btn103-f");
});
document.querySelector('.btn103-f2').addEventListener('click', () => {
    defaultBackgraundColor('.btn103-f1', '.btn103-f2', '.btn103-f3', '.btn103-f4', '.btn103-f2');
    Drink1 = "Вино";
    checkCountPeople(2, '.section103', '.section111');
    setTimeout(enabledButtonForward, 500, ".btn103-f");
});
document.querySelector('.btn103-f3').addEventListener('click', () => {
    defaultBackgraundColor('.btn103-f1', '.btn103-f2', '.btn103-f3', '.btn103-f4', '.btn103-f3');
    Drink1 = "Водка";
    checkCountPeople(2, '.section103', '.section111');
    setTimeout(enabledButtonForward, 500, ".btn103-f");
});
document.querySelector('.btn103-f4').addEventListener('click', () => {
    defaultBackgraundColor('.btn103-f1', '.btn103-f2', '.btn103-f3', '.btn103-f4', '.btn103-f4');
    Drink1 = "Сок";
    checkCountPeople(2, '.section103', '.section111');
    setTimeout(enabledButtonForward, 500, ".btn103-f");
});
document.querySelector('.btn103-f').addEventListener('click', () => {
    checkCountPeople(2, '.section103', '.section111');
});

// 2

document.querySelector('.form4').addEventListener('submit', function(event) {
    if (document.querySelector('.section111-inner__input').value !== "") {
        event.preventDefault();
        forwardQuestion ('.section111', '.section112');
        FIO2 = document.querySelector('.section111-inner__input').value;
    }
});

document.querySelector('.btn112-f1').addEventListener('click', () => {
    defaultBackgraundColor('.btn112-f1', '.btn112-f2', '.btn112-f3', '.btn112-f4', '.btn112-f1');
    forwardQuestion ('.section112', '.section113');
    Eat2 = "Говядина";
});
document.querySelector('.btn112-f2').addEventListener('click', () => {
    defaultBackgraundColor('.btn112-f1', '.btn112-f2', '.btn112-f3', '.btn112-f4', '.btn112-f2');
    forwardQuestion ('.section112', '.section113');
    Eat2 = "Свинина";
});
document.querySelector('.btn112-f3').addEventListener('click', () => {
    defaultBackgraundColor('.btn112-f1', '.btn112-f2', '.btn112-f3', '.btn112-f4', '.btn112-f3');
    forwardQuestion ('.section112', '.section113');
    Eat2 = "Курица";
});
document.querySelector('.btn112-f4').addEventListener('click', () => {
    defaultBackgraundColor('.btn112-f1', '.btn112-f2', '.btn112-f3', '.btn112-f4', '.btn112-f4');
    forwardQuestion ('.section112', '.section113');
    Eat2 = "Рыба";
});
document.querySelector('.btn112-f').addEventListener('click', () => {
    forwardQuestion ('.section112', '.section113');
});

document.querySelector('.btn113-f1').addEventListener('click', () => {
    defaultBackgraundColor('.btn113-f1', '.btn113-f2', '.btn113-f3', '.btn113-f4', '.btn113-f1');
    Drink2 = "Шампанское";
    checkCountPeople(3, '.section113', '.section121');
});
document.querySelector('.btn113-f2').addEventListener('click', () => {
    defaultBackgraundColor('.btn113-f1', '.btn113-f2', '.btn113-f3', '.btn113-f4', '.btn113-f2');
    Drink2 = "Вино";
    checkCountPeople(3, '.section113', '.section121');
});
document.querySelector('.btn113-f3').addEventListener('click', () => {
    defaultBackgraundColor('.btn113-f1', '.btn113-f2', '.btn113-f3', '.btn113-f4', '.btn113-f3');
    Drink2 = "Водка";
    checkCountPeople(3, '.section113', '.section121');
});
document.querySelector('.btn113-f4').addEventListener('click', () => {
    defaultBackgraundColor('.btn113-f1', '.btn113-f2', '.btn113-f3', '.btn113-f4', '.btn113-f4');
    Drink2 = "Сок";
    checkCountPeople(3, '.section113', '.section121');
});
document.querySelector('.btn113-f').addEventListener('click', () => {
    checkCountPeople(3, '.section113', '.section121');
});

// 3

document.querySelector('.form5').addEventListener('submit', function(event) {
    if (document.querySelector('.section121-inner__input').value !== "") {
        event.preventDefault();
        forwardQuestion ('.section121', '.section122');
        FIO3 = document.querySelector('.section121-inner__input').value;
    }
});

document.querySelector('.btn122-f1').addEventListener('click', () => {
    defaultBackgraundColor('.btn122-f1', '.btn122-f2', '.btn122-f3', '.btn122-f4', '.btn122-f1');
    forwardQuestion ('.section122', '.section123');
    Eat3 = "Говядина";
});
document.querySelector('.btn122-f2').addEventListener('click', () => {
    defaultBackgraundColor('.btn122-f1', '.btn122-f2', '.btn122-f3', '.btn122-f4', '.btn122-f2');
    forwardQuestion ('.section122', '.section123');
    Eat3 = "Свинина";
});
document.querySelector('.btn122-f3').addEventListener('click', () => {
    defaultBackgraundColor('.btn122-f1', '.btn122-f2', '.btn122-f3', '.btn122-f4', '.btn122-f3');
    forwardQuestion ('.section122', '.section123');
    Eat3 = "Курица";
});
document.querySelector('.btn122-f4').addEventListener('click', () => {
    defaultBackgraundColor('.btn122-f1', '.btn122-f2', '.btn122-f3', '.btn122-f4', '.btn122-f4');
    forwardQuestion ('.section122', '.section123');
    Eat3 = "Рыба";
});
document.querySelector('.btn122-f').addEventListener('click', () => {
    forwardQuestion ('.section122', '.section123');
});

document.querySelector('.btn123-f1').addEventListener('click', () => {
    defaultBackgraundColor('.btn123-f1', '.btn123-f2', '.btn123-f3', '.btn123-f4', '.btn123-f1');
    Drink3 = "Шампанское";
    checkCountPeople(4, '.section123', '.section131');
});
document.querySelector('.btn123-f2').addEventListener('click', () => {
    defaultBackgraundColor('.btn123-f1', '.btn123-f2', '.btn123-f3', '.btn123-f4', '.btn123-f2');
    Drink3 = "Вино";
    checkCountPeople(4, '.section123', '.section131');
});
document.querySelector('.btn123-f3').addEventListener('click', () => {
    defaultBackgraundColor('.btn123-f1', '.btn123-f2', '.btn123-f3', '.btn123-f4', '.btn123-f3');
    Drink3 = "Водка";
    checkCountPeople(4, '.section123', '.section131');
});
document.querySelector('.btn123-f4').addEventListener('click', () => {
    defaultBackgraundColor('.btn123-f1', '.btn123-f2', '.btn123-f3', '.btn123-f4', '.btn123-f4');
    Drink3 = "Сок";
    checkCountPeople(4, '.section123', '.section131');
});
document.querySelector('.btn123-f').addEventListener('click', () => {
    checkCountPeople(4, '.section123', '.section131');
});

// 4
document.querySelector('.form6').addEventListener('submit', function(event) {
    if (document.querySelector('.section131-inner__input').value !== "") {
        event.preventDefault();
        forwardQuestion ('.section131', '.section132');
        FIO4 = document.querySelector('.section131-inner__input').value;
    }
});

document.querySelector('.btn132-f1').addEventListener('click', () => {
    defaultBackgraundColor('.btn132-f1', '.btn132-f2', '.btn132-f3', '.btn132-f4', '.btn132-f1');
    forwardQuestion ('.section132', '.section133');
    Eat4 = "Говядина";
});
document.querySelector('.btn132-f2').addEventListener('click', () => {
    defaultBackgraundColor('.btn132-f1', '.btn132-f2', '.btn132-f3', '.btn132-f4', '.btn132-f2');
    forwardQuestion ('.section132', '.section133');
    Eat4 = "Свинина";
});
document.querySelector('.btn132-f3').addEventListener('click', () => {
    defaultBackgraundColor('.btn132-f1', '.btn132-f2', '.btn132-f3', '.btn132-f4', '.btn132-f3');
    forwardQuestion ('.section132', '.section133');
    Eat4 = "Курица";
});
document.querySelector('.btn132-f4').addEventListener('click', () => {
    defaultBackgraundColor('.btn132-f1', '.btn132-f2', '.btn132-f3', '.btn132-f4', '.btn132-f4');
    forwardQuestion ('.section132', '.section133');
    Eat4 = "Рыба";
});
document.querySelector('.btn132-f').addEventListener('click', () => {
    forwardQuestion ('.section132', '.section133');
});

document.querySelector('.btn133-f1').addEventListener('click', () => {
    defaultBackgraundColor('.btn133-f1', '.btn133-f2', '.btn133-f3', '.btn133-f4', '.btn133-f1');
    Drink4 = "Шампанское";
    checkCountPeople(5, '.section133', '.section141');
});
document.querySelector('.btn133-f2').addEventListener('click', () => {
    defaultBackgraundColor('.btn133-f1', '.btn133-f2', '.btn133-f3', '.btn133-f4', '.btn133-f2');
    Drink4 = "Вино";
    checkCountPeople(5, '.section133', '.section141');
});
document.querySelector('.btn133-f3').addEventListener('click', () => {
    defaultBackgraundColor('.btn133-f1', '.btn133-f2', '.btn133-f3', '.btn133-f4', '.btn133-f3');
    Drink4 = "Водка";
    checkCountPeople(5, '.section133', '.section141');
});
document.querySelector('.btn133-f4').addEventListener('click', () => {
    defaultBackgraundColor('.btn133-f1', '.btn133-f2', '.btn133-f3', '.btn133-f4', '.btn133-f4');
    Drink4 = "Сок";
    checkCountPeople(5, '.section133', '.section141');
});
document.querySelector('.btn133-f').addEventListener('click', () => {
    checkCountPeople(5, '.section133', '.section141');
});

// 5

document.querySelector('.form7').addEventListener('submit', function(event) {
    if (document.querySelector('.section141-inner__input').value !== "") {
        event.preventDefault();
        forwardQuestion ('.section141', '.section142');
        FIO5 = document.querySelector('.section141-inner__input').value;
    }
});

document.querySelector('.btn142-f1').addEventListener('click', () => {
    defaultBackgraundColor('.btn142-f1', '.btn142-f2', '.btn142-f3', '.btn142-f4', '.btn142-f1');
    forwardQuestion ('.section142', '.section143');
    Eat5 = "Говядина";
});
document.querySelector('.btn142-f2').addEventListener('click', () => {
    defaultBackgraundColor('.btn142-f1', '.btn142-f2', '.btn142-f3', '.btn142-f4', '.btn142-f2');
    forwardQuestion ('.section142', '.section143');
    Eat5 = "Свинина";
});
document.querySelector('.btn142-f3').addEventListener('click', () => {
    defaultBackgraundColor('.btn142-f1', '.btn142-f2', '.btn142-f3', '.btn142-f4', '.btn142-f3');
    forwardQuestion ('.section142', '.section143');
    Eat5 = "Курица";
});
document.querySelector('.btn142-f4').addEventListener('click', () => {
    defaultBackgraundColor('.btn142-f1', '.btn142-f2', '.btn142-f3', '.btn142-f4', '.btn142-f4');
    forwardQuestion ('.section142', '.section143');
    Eat5 = "Рыба";
});
document.querySelector('.btn142-f').addEventListener('click', () => {
    forwardQuestion ('.section142', '.section143');
});

document.querySelector('.btn143-f1').addEventListener('click', () => {
    defaultBackgraundColor('.btn143-f1', '.btn143-f2', '.btn143-f3', '.btn143-f4', '.btn143-f1');
    Drink5 = "Шампанское";
    checkCountPeople(6, '.section143', '.section151');
});
document.querySelector('.btn143-f2').addEventListener('click', () => {
    defaultBackgraundColor('.btn143-f1', '.btn143-f2', '.btn143-f3', '.btn143-f4', '.btn143-f2');
    Drink5 = "Вино";
    checkCountPeople(6, '.section143', '.section151');
});
document.querySelector('.btn143-f3').addEventListener('click', () => {
    defaultBackgraundColor('.btn143-f1', '.btn143-f2', '.btn143-f3', '.btn143-f4', '.btn143-f3');
    Drink5 = "Водка";
    checkCountPeople(6, '.section143', '.section151');
});
document.querySelector('.btn143-f4').addEventListener('click', () => {
    defaultBackgraundColor('.btn143-f1', '.btn143-f2', '.btn143-f3', '.btn143-f4', '.btn143-f4');
    Drink5 = "Сок";
    checkCountPeople(6, '.section143', '.section151');
});
document.querySelector('.btn143-f').addEventListener('click', () => {
    checkCountPeople(6, '.section143', '.section151');
});

// 6

document.querySelector('.form8').addEventListener('submit', function(event) {
    if (document.querySelector('.section151-inner__input').value !== "") {
        event.preventDefault();
        forwardQuestion ('.section151', '.section152');
        FIO6 = document.querySelector('.section151-inner__input').value;
    }
});

document.querySelector('.btn152-f1').addEventListener('click', () => {
    defaultBackgraundColor('.btn152-f1', '.btn152-f2', '.btn152-f3', '.btn152-f4', '.btn152-f1');
    forwardQuestion ('.section152', '.section153');
    Eat6 = "Говядина";
});
document.querySelector('.btn152-f2').addEventListener('click', () => {
    defaultBackgraundColor('.btn152-f1', '.btn152-f2', '.btn152-f3', '.btn152-f4', '.btn152-f2');
    forwardQuestion ('.section152', '.section153');
    Eat6 = "Свинина";
});
document.querySelector('.btn152-f3').addEventListener('click', () => {
    defaultBackgraundColor('.btn152-f1', '.btn152-f2', '.btn152-f3', '.btn152-f4', '.btn152-f3');
    forwardQuestion ('.section152', '.section153');
    Eat6 = "Курица";
});
document.querySelector('.btn152-f4').addEventListener('click', () => {
    defaultBackgraundColor('.btn152-f1', '.btn152-f2', '.btn152-f3', '.btn152-f4', '.btn152-f4');
    forwardQuestion ('.section152', '.section153');
    Eat6 = "Рыба";
});
document.querySelector('.btn152-f').addEventListener('click', () => {
    forwardQuestion ('.section152', '.section153');
});

document.querySelector('.btn153-f1').addEventListener('click', () => {
    defaultBackgraundColor('.btn153-f1', '.btn153-f2', '.btn153-f3', '.btn153-f4', '.btn153-f1');
    Drink6 = "Шампанское";
    checkCountPeople(7, '.section153', '.section161');
});
document.querySelector('.btn153-f2').addEventListener('click', () => {
    defaultBackgraundColor('.btn153-f1', '.btn153-f2', '.btn153-f3', '.btn153-f4', '.btn153-f2');
    Drink6 = "Вино";
    checkCountPeople(7, '.section153', '.section161');
});
document.querySelector('.btn153-f3').addEventListener('click', () => {
    defaultBackgraundColor('.btn153-f1', '.btn153-f2', '.btn153-f3', '.btn153-f4', '.btn153-f3');
    Drink6 = "Водка";
    checkCountPeople(7, '.section153', '.section161');
});
document.querySelector('.btn153-f4').addEventListener('click', () => {
    defaultBackgraundColor('.btn153-f1', '.btn153-f2', '.btn153-f3', '.btn153-f4', '.btn153-f4');
    Drink6 = "Сок";
    checkCountPeople(7, '.section153', '.section161');
});
document.querySelector('.btn153-f').addEventListener('click', () => {
    checkCountPeople(7, '.section153', '.section161');
});

// 7

document.querySelector('.form9').addEventListener('submit', function(event) {
    if (document.querySelector('.section161-inner__input').value !== "") {
        event.preventDefault();
        forwardQuestion ('.section161', '.section162');
        FIO7 = document.querySelector('.section161-inner__input').value;
    }
});

document.querySelector('.btn162-f1').addEventListener('click', () => {
    defaultBackgraundColor('.btn162-f1', '.btn162-f2', '.btn162-f3', '.btn162-f4', '.btn162-f1');
    forwardQuestion ('.section162', '.section163');
    Eat7 = "Говядина";
});
document.querySelector('.btn162-f2').addEventListener('click', () => {
    defaultBackgraundColor('.btn162-f1', '.btn162-f2', '.btn162-f3', '.btn162-f4', '.btn162-f2');
    forwardQuestion ('.section162', '.section163');
    Eat7 = "Свинина";
});
document.querySelector('.btn162-f3').addEventListener('click', () => {
    defaultBackgraundColor('.btn162-f1', '.btn162-f2', '.btn162-f3', '.btn162-f4', '.btn162-f3');
    forwardQuestion ('.section162', '.section163');
    Eat7 = "Курица";
});
document.querySelector('.btn162-f4').addEventListener('click', () => {
    defaultBackgraundColor('.btn162-f1', '.btn162-f2', '.btn162-f3', '.btn162-f4', '.btn162-f4');
    forwardQuestion ('.section162', '.section163');
    Eat7 = "Рыба";
});
document.querySelector('.btn162-f').addEventListener('click', () => {
    forwardQuestion ('.section162', '.section163');
});

document.querySelector('.btn163-f1').addEventListener('click', () => {
    defaultBackgraundColor('.btn163-f1', '.btn163-f2', '.btn163-f3', '.btn163-f4', '.btn163-f1');
    Drink7 = "Шампанское";
    checkCountPeople(8, '.section163', '.section171');
});
document.querySelector('.btn163-f2').addEventListener('click', () => {
    defaultBackgraundColor('.btn163-f1', '.btn163-f2', '.btn163-f3', '.btn163-f4', '.btn163-f2');
    Drink7 = "Вино";
    checkCountPeople(8, '.section163', '.section171');
});
document.querySelector('.btn163-f3').addEventListener('click', () => {
    defaultBackgraundColor('.btn163-f1', '.btn163-f2', '.btn163-f3', '.btn163-f4', '.btn163-f3');
    Drink7 = "Водка";
    checkCountPeople(8, '.section163', '.section171');
});
document.querySelector('.btn163-f4').addEventListener('click', () => {
    defaultBackgraundColor('.btn163-f1', '.btn163-f2', '.btn163-f3', '.btn163-f4', '.btn163-f4');
    Drink7 = "Сок";
    checkCountPeople(8, '.section163', '.section171');
});
document.querySelector('.btn163-f').addEventListener('click', () => {
    checkCountPeople(8, '.section163', '.section171');
});

// 8

document.querySelector('.form10').addEventListener('submit', function(event) {
    if (document.querySelector('.section171-inner__input').value !== "") {
        event.preventDefault();
        forwardQuestion ('.section171', '.section172');
        FIO8 = document.querySelector('.section171-inner__input').value;
    }
});

document.querySelector('.btn172-f1').addEventListener('click', () => {
    defaultBackgraundColor('.btn172-f1', '.btn172-f2', '.btn172-f3', '.btn172-f4', '.btn172-f1');
    forwardQuestion ('.section172', '.section173');
    Eat8 = "Говядина";
});
document.querySelector('.btn172-f2').addEventListener('click', () => {
    defaultBackgraundColor('.btn172-f1', '.btn172-f2', '.btn172-f3', '.btn172-f4', '.btn172-f2');
    forwardQuestion ('.section172', '.section173');
    Eat8 = "Свинина";
});
document.querySelector('.btn172-f3').addEventListener('click', () => {
    defaultBackgraundColor('.btn172-f1', '.btn172-f2', '.btn172-f3', '.btn172-f4', '.btn172-f3');
    forwardQuestion ('.section172', '.section173');
    Eat8 = "Курица";
});
document.querySelector('.btn172-f4').addEventListener('click', () => {
    defaultBackgraundColor('.btn172-f1', '.btn172-f2', '.btn172-f3', '.btn172-f4', '.btn172-f4');
    forwardQuestion ('.section172', '.section173');
    Eat8 = "Рыба";
});
document.querySelector('.btn172-f').addEventListener('click', () => {
    forwardQuestion ('.section172', '.section173');
});

document.querySelector('.btn173-f1').addEventListener('click', () => {
    defaultBackgraundColor('.btn173-f1', '.btn173-f2', '.btn173-f3', '.btn173-f4', '.btn173-f1');
    Drink8 = "Шампанское";
    checkCountPeople(9, '.section173', '.section181');
});
document.querySelector('.btn173-f2').addEventListener('click', () => {
    defaultBackgraundColor('.btn173-f1', '.btn173-f2', '.btn173-f3', '.btn173-f4', '.btn173-f2');
    Drink8 = "Вино";
    checkCountPeople(9, '.section173', '.section181');
});
document.querySelector('.btn173-f3').addEventListener('click', () => {
    defaultBackgraundColor('.btn173-f1', '.btn173-f2', '.btn173-f3', '.btn173-f4', '.btn173-f3');
    Drink8 = "Водка";
    checkCountPeople(9, '.section173', '.section181');
});
document.querySelector('.btn173-f4').addEventListener('click', () => {
    defaultBackgraundColor('.btn173-f1', '.btn173-f2', '.btn173-f3', '.btn173-f4', '.btn173-f4');
    Drink8 = "Сок";
    checkCountPeople(9, '.section173', '.section181');
});
document.querySelector('.btn173-f').addEventListener('click', () => {
    checkCountPeople(9, '.section173', '.section181');
});



// 9

document.querySelector('.form11').addEventListener('submit', function(event) {
    if (document.querySelector('.section181-inner__input').value !== "") {
        event.preventDefault();
        forwardQuestion ('.section181', '.section182');
        FIO9 = document.querySelector('.section181-inner__input').value;
    }
});

document.querySelector('.btn182-f1').addEventListener('click', () => {
    defaultBackgraundColor('.btn182-f1', '.btn182-f2', '.btn182-f3', '.btn182-f4', '.btn182-f1');
    forwardQuestion ('.section182', '.section183');
    Eat9 = "Говядина";
});
document.querySelector('.btn182-f2').addEventListener('click', () => {
    defaultBackgraundColor('.btn182-f1', '.btn182-f2', '.btn182-f3', '.btn182-f4', '.btn182-f2');
    forwardQuestion ('.section182', '.section183');
    Eat9 = "Свинина";
});
document.querySelector('.btn182-f3').addEventListener('click', () => {
    defaultBackgraundColor('.btn182-f1', '.btn182-f2', '.btn182-f3', '.btn182-f4', '.btn182-f3');
    forwardQuestion ('.section182', '.section183');
    Eat9 = "Курица";
});
document.querySelector('.btn182-f4').addEventListener('click', () => {
    defaultBackgraundColor('.btn182-f1', '.btn182-f2', '.btn182-f3', '.btn182-f4', '.btn182-f4');
    forwardQuestion ('.section182', '.section183');
    Eat9 = "Рыба";
});
document.querySelector('.btn182-f').addEventListener('click', () => {
    forwardQuestion ('.section182', '.section183');
});

document.querySelector('.btn183-f1').addEventListener('click', () => {
    defaultBackgraundColor('.btn183-f1', '.btn183-f2', '.btn183-f3', '.btn183-f4', '.btn183-f1');
    Drink9 = "Шампанское";
    checkCountPeople(10, '.section183', '.section-end1');
});
document.querySelector('.btn183-f2').addEventListener('click', () => {
    defaultBackgraundColor('.btn183-f1', '.btn183-f2', '.btn183-f3', '.btn183-f4', '.btn183-f2');
    Drink9 = "Вино";
    checkCountPeople(10, '.section183', '.section-end1');
});
document.querySelector('.btn183-f3').addEventListener('click', () => {
    defaultBackgraundColor('.btn183-f1', '.btn183-f2', '.btn183-f3', '.btn183-f4', '.btn183-f3');
    Drink9 = "Водка";
    checkCountPeople(10, '.section183', '.section-end1');
});
document.querySelector('.btn183-f4').addEventListener('click', () => {
    defaultBackgraundColor('.btn183-f1', '.btn183-f2', '.btn183-f3', '.btn183-f4', '.btn183-f4');
    Drink9 = "Сок";
    checkCountPeople(10, '.section183', '.section-end1');
});
document.querySelector('.btn183-f').addEventListener('click', () => {
    checkCountPeople(10, '.section183', '.section-end1');
});

// СНИЗУ ЛИШНИЙ 11 ГОСТЬ







// BACK BUTTONS




document.querySelector('.btn1-b').addEventListener('click', () => {
    forwardQuestion ('.section1', '.section0');
});

document.querySelector('.btn2-b').addEventListener('click', () => {
    forwardQuestion ('.section2', '.section1');
});

document.querySelector('.btn3-b').addEventListener('click', () => {
    forwardQuestion ('.section3', '.section2');
});

document.querySelector('.btn4-b').addEventListener('click', () => {
    forwardQuestion ('.section4', '.section3');
});

document.querySelector('.btn5-b').addEventListener('click', () => {
    flag = 0;
    forwardQuestion ('.section5', '.section4');
});

document.querySelector('.btn6-b').addEventListener('click', () => {
    forwardQuestion ('.section6', '.section5');
});

document.querySelector('.btn7-b').addEventListener('click', () => {
    forwardQuestion ('.section7', '.section6');
});

document.querySelector('.btn8-b').addEventListener('click', () => {
    forwardQuestion ('.section8', '.section7');
});

document.querySelector('.btn101-b').addEventListener('click', () => {
    forwardQuestion ('.section101', '.section8');
});
document.querySelector('.btn102-b').addEventListener('click', () => { // КАКАЯ_ТО ХУЙНЯ ПРИ НАЖАТИИ (2 секции вместо одной)
    forwardQuestion ('.section102', '.section101');
});
document.querySelector('.btn103-b').addEventListener('click', () => {
    forwardQuestion ('.section103', '.section102');
});

// ВОЗМОЖЕН БАГ меж гостей, но это не точно

document.querySelector('.btn111-b').addEventListener('click', () => {
    forwardQuestion ('.section111', '.section103');
});
document.querySelector('.btn112-b').addEventListener('click', () => {
    forwardQuestion ('.section112', '.section111');
});
document.querySelector('.btn113-b').addEventListener('click', () => {
    forwardQuestion ('.section113', '.section112');
});

document.querySelector('.btn121-b').addEventListener('click', () => {
    forwardQuestion ('.section121', '.section113');
});
document.querySelector('.btn122-b').addEventListener('click', () => {
    forwardQuestion ('.section122', '.section121');
});
document.querySelector('.btn123-b').addEventListener('click', () => {
    forwardQuestion ('.section123', '.section122');
});

document.querySelector('.btn131-b').addEventListener('click', () => {
    forwardQuestion ('.section131', '.section123');
});
document.querySelector('.btn132-b').addEventListener('click', () => {
    forwardQuestion ('.section132', '.section131');
});
document.querySelector('.btn133-b').addEventListener('click', () => {
    forwardQuestion ('.section133', '.section132');
});

document.querySelector('.btn141-b').addEventListener('click', () => {
    forwardQuestion ('.section141', '.section133');
});
document.querySelector('.btn142-b').addEventListener('click', () => {
    forwardQuestion ('.section142', '.section141');
});
document.querySelector('.btn143-b').addEventListener('click', () => {
    forwardQuestion ('.section143', '.section142');
});

document.querySelector('.btn151-b').addEventListener('click', () => {
    forwardQuestion ('.section151', '.section143');
});
document.querySelector('.btn152-b').addEventListener('click', () => {
    forwardQuestion ('.section152', '.section151');
});
document.querySelector('.btn153-b').addEventListener('click', () => {
    forwardQuestion ('.section153', '.section152');
});

document.querySelector('.btn161-b').addEventListener('click', () => {
    forwardQuestion ('.section161', '.section153');
});
document.querySelector('.btn162-b').addEventListener('click', () => {
    forwardQuestion ('.section162', '.section161');
});
document.querySelector('.btn163-b').addEventListener('click', () => {
    forwardQuestion ('.section163', '.section162');
});

document.querySelector('.btn171-b').addEventListener('click', () => {
    forwardQuestion ('.section171', '.section163');
});
document.querySelector('.btn172-b').addEventListener('click', () => {
    forwardQuestion ('.section172', '.section171');
});
document.querySelector('.btn173-b').addEventListener('click', () => {
    forwardQuestion ('.section173', '.section172');
});

document.querySelector('.btn181-b').addEventListener('click', () => {
    forwardQuestion ('.section181', '.section173');
});
document.querySelector('.btn182-b').addEventListener('click', () => {
    forwardQuestion ('.section182', '.section181');
});
document.querySelector('.btn183-b').addEventListener('click', () => {
    forwardQuestion ('.section183', '.section182');
});

