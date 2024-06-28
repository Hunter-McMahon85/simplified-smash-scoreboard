/*
this file just stores all the input handleing and function calls for the scoreboard controller. 
*/
document.querySelector("#et").addEventListener("click", function () { set_token(document.querySelector('#token').value.trim()) });
document.getElementById("token").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("et").click();
    }
});

document.querySelector("#ebl").addEventListener("click", function () { fetch_tourney_data(document.querySelector('#bracket_link').value.trim()) });
document.getElementById("bracket_link").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("ebl").click();
    }
});

document.querySelector("#emn").addEventListener("click", function () { fetch_and_set_tags(document.querySelector('#match_num').value.trim()) });
document.getElementById("match_num").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("emn").click();
    }
});

document.querySelector("#enter_round").addEventListener("click", set_round);
document.getElementById("round").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("enter_round").click();
    }
});

document.querySelector("#ert").addEventListener("click", function () { update_tag('right', document.querySelector('#righttag').value.trim()) });
document.getElementById("righttag").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("ert").click();
    }
});

document.querySelector("#elt").addEventListener("click", function () { update_tag('left', document.querySelector('#lefttag').value.trim()) });
document.getElementById("lefttag").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("elt").click();
    }
});

document.querySelector("#eli").addEventListener("click", function () { update_control_icons("left") });
document.querySelector("#l0").addEventListener("click", function () { update_score_icons("left", 0) });
document.querySelector("#l1").addEventListener("click", function () { update_score_icons("left", 1) });
document.querySelector("#l2").addEventListener("click", function () { update_score_icons("left", 2) });
document.querySelector("#l3").addEventListener("click", function () { update_score_icons("left", 3) });
document.querySelector("#l4").addEventListener("click", function () { update_score_icons("left", 4) });
document.querySelector("#l5").addEventListener("click", function () { update_score_icons("left", 5) });
document.querySelector("#l6").addEventListener("click", function () { update_score_icons("left", 6) });
document.querySelector("#l7").addEventListener("click", function () { update_score_icons("left", 7) });

document.querySelector("#eri").addEventListener("click", function () { update_control_icons("right") });
document.querySelector("#r0").addEventListener("click", function () { update_score_icons("right", 0) });
document.querySelector("#r1").addEventListener("click", function () { update_score_icons("right", 1) });
document.querySelector("#r2").addEventListener("click", function () { update_score_icons("right", 2) });
document.querySelector("#r3").addEventListener("click", function () { update_score_icons("right", 3) });
document.querySelector("#r4").addEventListener("click", function () { update_score_icons("right", 4) });
document.querySelector("#r5").addEventListener("click", function () { update_score_icons("right", 5) });
document.querySelector("#r6").addEventListener("click", function () { update_score_icons("right", 6) });
document.querySelector("#r7").addEventListener("click", function () { update_score_icons("right", 7) });

document.querySelector("#winL").addEventListener("click", score_l);
document.querySelector("#winR").addEventListener("click", score_r);
document.querySelector("#resetscore").addEventListener("click", reset_score);
document.querySelector("#resetall").addEventListener("click", reset_all);