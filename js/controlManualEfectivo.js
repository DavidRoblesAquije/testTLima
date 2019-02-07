var mcorp = document.querySelectorAll('.manualCorp');

for (var i = 0; i < mcorp.length; i++) {
    mcorp[i].addEventListener("click", function () {
        location.href = "manualintranetcorp.html";
    });
}

var mefect = document.querySelectorAll('.manualEfectivo');
for (var i = 0; i < mcorp.length; i++) {
    mefect[i].addEventListener("click", function () {
        location.href = "manualintranetefec.html";
    });
}