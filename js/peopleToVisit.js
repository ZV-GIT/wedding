var img = [];
var flag = 0;
for (i = 0; i < 10; i++) {
    img[i] = document.getElementById("img" + (i+1));
}

function nullPeople(x) {
    if (flag == 0) {
        for (i = 0; i <= x; i++) {
            img[i].src = './img/icon-man1.png';
        }
    }
}

function fullPeople(x) {
    flag = 0;
    nullPeople(9)
    for (i = 0; i <= x; i++) {
        img[i].src = './img/icon-man2.png';
    }
}

function choiceCountPeople(x) {
    for (i = 0; i <= x; i++) {
        img[i].src = './img/icon-man3.png';
    }
}

        
// img[0].addEventListener('mouseover', function() { fullPeople(0); });
img[0].addEventListener('mouseenter', function() { fullPeople(0); });
img[0].addEventListener('mouseleave', function() { nullPeople(0); });
img[0].addEventListener('click', function() { flag = 1; choiceCountPeople(0); });

img[1].addEventListener('mouseenter', function() { fullPeople(1); });
img[1].addEventListener('mouseleave', function() { nullPeople(1); });
img[1].addEventListener('mousedown', function() { flag = 1; choiceCountPeople(1); });

img[2].addEventListener('mouseenter', function() { fullPeople(2); });
img[2].addEventListener('mouseleave', function() { nullPeople(2); });
img[2].addEventListener('mousedown', function() { flag = 1; choiceCountPeople(2); });

img[3].addEventListener('mouseover', function() { fullPeople(3); });
img[3].addEventListener('mouseleave', function() { nullPeople(3); });
img[3].addEventListener('mousedown', function() { flag = 1; choiceCountPeople(3); });

img[4].addEventListener('mouseover', function() { fullPeople(4); });
img[4].addEventListener('mouseleave', function() { nullPeople(4); });
img[4].addEventListener('mousedown', function() { flag = 1; choiceCountPeople(4); });

img[5].addEventListener('mouseover', function() { fullPeople(5); });
img[5].addEventListener('mouseleave', function() { nullPeople(5); });
img[5].addEventListener('mousedown', function() { flag = 1; choiceCountPeople(5); });

img[6].addEventListener('mouseover', function() { fullPeople(6); });
img[6].addEventListener('mouseleave', function() { nullPeople(6); });
img[6].addEventListener('mousedown', function() { flag = 1; choiceCountPeople(6); });

img[7].addEventListener('mouseover', function() { fullPeople(7); });
img[7].addEventListener('mouseleave', function() { nullPeople(7); });
img[7].addEventListener('mousedown', function() { flag = 1; choiceCountPeople(7); });

img[8].addEventListener('mouseover', function() { fullPeople(8); });
img[8].addEventListener('mouseleave', function() { nullPeople(8); });
img[8].addEventListener('mousedown', function() { flag = 1; choiceCountPeople(8); });

img[9].addEventListener('mouseover', function() { fullPeople(9); });
img[9].addEventListener('mouseleave', function() { nullPeople(9); });
img[9].addEventListener('mousedown', function() { flag = 1; choiceCountPeople(9); });


