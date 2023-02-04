/*
SSBU basic HTML controller,
Made by Hunter McMahon to be Used by the UO smash bros club for
the streams of the duck hunt tournament, if you happen to come 
accross this code be welcome to modify it to your needs. just know
that twas i who wrote it originially
*/

const entered_icons = entered_name;
const icons_filenames = names_list_in_files;

let right_tag = "";
let left_tag = "";

let right_score = 0;
let left_score = 0;

let round = "";

let left_icon = "";
let right_icon = "";

let left_icons_files = []
let right_icons_files = []

localStorage.setItem("rt", right_tag);
localStorage.setItem("lt", left_tag);
localStorage.setItem("rs", right_score);
localStorage.setItem("ls", left_score);
localStorage.setItem("rnd", round);
localStorage.setItem("ri", right_icon);
localStorage.setItem("li", left_icon);

// updating the icons

function update_score_icons(side, index) {
    if (side == "right") {
        //getting the icons
        right_icon = "../char_icons/" + right_icons_files[index];
        //setting the icons
        localStorage.setItem("ri", right_icon);
        //clear the input box
        document.querySelector("#righticon").value = '';
    } else {
        //getting the icons
        left_icon = "../char_icons/" + left_icons_files[index];
        //setting the icons
        localStorage.setItem("li", left_icon);
        //clear the input box
        document.querySelector("#lefticon").value = '';
    }

}

function update_control_icons(side) {
    if (side == "right") {
        index = entered_icons.indexOf(document.querySelector('#righticon').value);
        right_icons_files = icons_filenames[index];
        document.getElementById("r0").src = "../char_icons/" + icons_filenames[index][0];
        document.getElementById("r1").src = "../char_icons/" + icons_filenames[index][1];
        document.getElementById("r2").src = "../char_icons/" + icons_filenames[index][2];
        document.getElementById("r3").src = "../char_icons/" + icons_filenames[index][3];
        document.getElementById("r4").src = "../char_icons/" + icons_filenames[index][4];
        document.getElementById("r5").src = "../char_icons/" + icons_filenames[index][5];
        document.getElementById("r6").src = "../char_icons/" + icons_filenames[index][6];
        document.getElementById("r7").src = "../char_icons/" + icons_filenames[index][7];
        update_score_icons("right", 0)
    } else {
        index = entered_icons.indexOf(document.querySelector('#lefticon').value);
        left_icons_files = icons_filenames[index];
        document.getElementById("l0").src = "../char_icons/" + icons_filenames[index][0];
        document.getElementById("l1").src = "../char_icons/" + icons_filenames[index][1];
        document.getElementById("l2").src = "../char_icons/" + icons_filenames[index][2];
        document.getElementById("l3").src = "../char_icons/" + icons_filenames[index][3];
        document.getElementById("l4").src = "../char_icons/" + icons_filenames[index][4];
        document.getElementById("l5").src = "../char_icons/" + icons_filenames[index][5];
        document.getElementById("l6").src = "../char_icons/" + icons_filenames[index][6];
        document.getElementById("l7").src = "../char_icons/" + icons_filenames[index][7];
        update_score_icons("left", 0);
    }

}


//updating tags primitive

function update_tag(side, tag) {
    if (side == "right") {
        right_tag = tag
        localStorage.setItem("rt", right_tag);
        //clear the input box
        document.querySelector("#righttag").value = '';
    } else {
        left_tag = tag
        localStorage.setItem("lt", left_tag);
        //clear the input box
        document.querySelector("#lefttag").value = '';
    }
};


//updating tags using starg.gg api
const endpoint = "https://api.start.gg/gql/alpha";

// api tokens are case sensitive and need to be user entered
let api_token = "";

function set_token(token) {
    api_token = token
    document.querySelector("#token").value = ""
}

let tournament_set_data = [];
let bracket_id = null;

function fetch_tourney_data(tournament_link) {
    // get the tournament id
    const id_query = {
        method: 'POST',
        headers: { "Content-Type": "application/json", "Authorization": "Bearer" + api_token },
        body: JSON.stringify({
            "query": `query TournamentQuery($slug: String) {
                                tournament(slug: $slug) {
                                events {
                                    name
                                    id
                                    sets(page: 1, perPage: 150, sortType: STANDARD,){
                                        pageInfo {
                                            total
                                            }
                                        nodes {
                                            id
                                            identifier
                                            }
                                        }
                                    }
                                }
                            }`,
            "operationName": "TournamentQuery",
            "variables": { "slug": tournament_link }
        })
    };
    async function fetch_data() {
        let response = fetch(endpoint, id_query)
            .then((res) => res.json())
            .then((result) => {
                return result.data;
            });
        let data = await response;
        data = JSON.stringify(data);
        return data;
    }

    async function set_data() {
        tour_set_data = await fetch_data();
        tour_set_data = JSON.parse(tour_set_data);
        bracket_id = tour_set_data["tournament"]["events"][0]["id"];
        ultimate_matches = tour_set_data["tournament"]["events"][0]["sets"]["nodes"];
        tournament_set_data = ultimate_matches;
    }

    set_data();
    document.querySelector("#bracket_link").value = '';
}

function fetch_and_set_tags(match_num) {
    match_num = match_num.toUpperCase()
    let match_id = "";
    // find the match_num in the list of sets
    for (let i = 0; i < tournament_set_data.length; i++) {
        if (tournament_set_data[i]["identifier"] === match_num) {
            match_id = tournament_set_data[i]["id"];
        }
    }

    const tag_query = {
        method: 'POST',
        headers: { "Content-Type": "application/json", "Authorization": "Bearer" + api_token },
        body: JSON.stringify({
            "query": `query SetEntrants($ID: ID!) {
                set(id: $ID) {
                fullRoundText
                  slots {
                    entrant {
                      participants {
                        gamerTag
                      }
                    }
                  }
                }
              }`,
            "operationName": "SetEntrants",
            "variables": { "ID": match_id }
        })
    };

    async function fetch_tags() {
        let response = fetch(endpoint, tag_query)
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                return result.data;
            });
        let data = await response;
        data = JSON.stringify(data);
        return data;
    }

    async function set_tag() {
        tag_set_data = await fetch_tags();
        tag_set_data = JSON.parse(tag_set_data);
        update_tag("left", tag_set_data["set"]["slots"][0]["entrant"]["participants"][0]["gamerTag"])
        update_tag("right", tag_set_data["set"]["slots"][1]["entrant"]["participants"][0]["gamerTag"])
    }
    set_tag();
    localStorage.setItem("rnd", tag_set_data["set"]["fullRoundText"]);
    document.querySelector("#match_num").value = '';
}

// updating the round
function set_round() {
    //getting the round
    round = document.querySelector('#round').value.trim();
    //setting the round
    localStorage.setItem("rnd", round);
    //clear the input box
    document.querySelector("#round").value = '';
};

//updating the score

function score_r() {
    right_score += 1;
    localStorage.setItem("rs", right_score);
};

function score_l() {
    left_score += 1;
    localStorage.setItem("ls", left_score);
};

// reseting shit
function reset_score() {
    right_score = 0;
    left_score = 0;
    localStorage.setItem("rs", right_score);
    localStorage.setItem("ls", left_score);
}

function reset_tag() {
    right_tag = "";
    left_tag = "";
    localStorage.setItem("rt", right_tag);
    localStorage.setItem("lt", left_tag);
};

function reset_icon() {
    right_icon = "";
    left_icon = "";
    localStorage.setItem("ri", right_icon);
    localStorage.setItem("li", left_icon);
};

function reset_all() {
    reset_icon()
    reset_score()
    reset_tag()
    round = "";
    localStorage.setItem("rnd", round);
};

