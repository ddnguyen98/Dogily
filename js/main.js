let main = document.querySelector("#content")
let adoptionprocess = 0;
let num = -1;
let data = [
    {name: "Timmy", 
    age: 1, 
    distance: 30,
    weight: 30,
    size: 3, 
    sf: 9, 
    ut: 8, 
    ce: 10, 
    uv: 3,
    description:"The Pembroke is a bright, sensitive dog who enjoys play with his human family and responds well to training. As herders bred to move cattle, they are fearless and independent. They are vigilant watchdogs, with acute senses and a “big dog” bark. Families who can meet their bold but kindly Pembroke’s need for activity and togetherness will never have a more loyal, loving pet.",
    image:"../images/timmy.jpg",
    breed: "Pembroke Welsh Corgi",
    vacinated: 'Vacinated',
    sn: 'Spaded'},
    {name: "James", 
    age: 12, 
    distance: 100,
    weight: 50,
    size: 7, 
    sf: 1, 
    ut: 3, 
    ce: 5, 
    uv: 5,
    description:"The Pembroke is a bright, sensitive dog who enjoys play with his human family and responds well to training. As herders bred to move cattle, they are fearless and independent. They are vigilant watchdogs, with acute senses and a “big dog” bark. Families who can meet their bold but kindly Pembroke’s need for activity and togetherness will never have a more loyal, loving pet.",
    image:"../images/james.jpg",
    breed: "Border Collie",
    vacinated: 'Vacinated',
    sn: 'Spaded'},
    {name: "Arnold", 
    age: 5, 
    distance: 130,
    weight: 60,
    size: 9, 
    sf: 5, 
    ut: 10, 
    ce: 1, 
    uv: 10,
    description:"The Pembroke is a bright, sensitive dog who enjoys play with his human family and responds well to training. As herders bred to move cattle, they are fearless and independent. They are vigilant watchdogs, with acute senses and a “big dog” bark. Families who can meet their bold but kindly Pembroke’s need for activity and togetherness will never have a more loyal, loving pet.",
    image:"../images/arnold.jpg",
    breed: "Real Cool Dog",
    vacinated: 'Vacinated',
    sn: 'Spaded'},
]
function home(){
    let html = ''
    html +='<section id="main"><button id="quizbtn" onclick="dogQuiz()">Take Quiz To Determine Your Future Pal!</button></section>'
    main.innerHTML = html;
}
function dogQuiz(){

    let html = ''
    html += '<section id="dogquiz">'
    html += '<section id="qcontent">'
    html += '<h2>Is your new pal a boy or a girl?</h2>'
    html += '<button class="false" id="boychoice" onclick="clickOpacity(this)"><article><img src="../images/bpaw.png"><h3>Male</h3></article></buton>'
    html += '<button class="false" id="girlchoice" onclick="clickOpacity(this)"><article><img src="../images/gpaw.png"><h3>Female</h3></article></buton>'
    html += '<button class="right" id="part2" onclick="part2()"><img src="../images/right.png"></button>'
    html += '</section>'
    html += '</section>'
    main.innerHTML = html;
}

function part2(){

    let html = ''
    html += '<section id="dogquiz">'
    html += '<section id="qcontent">'
    html += '<h2>How big is your new pal?</h2>'
    html += '<button class="left"  onclick="dogQuiz()"><img src="../images/left.png"></button>'
    html += '<button class="false" id="youngchoice" onclick="clickOpacity(this)"><article><img src="../images/young.png"><h3>Young</h3></article></buton>'
    html += '<button class="false" id="adultchoice" onclick="clickOpacity(this)"><article><img src="../images/adult.png"><h3>Adult</h3></article></buton>'
    html += '<button class="false" id="oldchoice" onclick="clickOpacity(this)"><article><img src="../images/old.png" ><h3>Senior</h3></article></buton>'
    html += '<button class="right"  onclick="part3()"><img src="../images/right.png"></button>'
    html += '</section>'
    html += '</section>'

    main.innerHTML = html;
}

function part3(){
    let html = ''
    html += '<section id="dogquiz">'
    html += '<section id="qcontent">'
    html += '<h2>How big is your new pal?</h2>'
    html += '<button class="left"  onclick="part2()"><img src="../images/left.png"></button>'
    html += '<button class="false" id="smallchoice" onclick="clickOpacity(this)"><article><img src="../images/small.png"><h3>Small</h3></article></buton>'
    html += '<button class="false" id="mediumchoice" onclick="clickOpacity(this)"><article><img src="../images/medium.png"><h3>Medium</h3></article></buton>'
    html += '<button class="false" id="largechoice" onclick="clickOpacity(this)"><article><img src="../images/large.png" ><h3>Large</h3></article></buton>'
    html += '<button class="right"  onclick="part4()"><img src="../images/right.png"></button>'
    html += '</section>'
    html += '</section>'

    main.innerHTML = html;
}

function part4(){
    let html = ''
    html += '<section id="dogquiz">'
    html += '<section id="qcontent">'
    html += '<h2>How big is your new pal?</h2>'
    html += '<button class="left"  onclick="part3()"><img src="../images/left.png"></button>'
    html += '<button class="false" id="choiceone" onclick="clickOpacity(this)" style="background:url(../images/playful.png) no-repeat; background-size: cover"><article><h3>Playful</h3></article></buton>'
    html += '<button class="false" id="choicetwo" onclick="clickOpacity(this)" style="background:url(../images/loving.png) no-repeat; background-size: cover"><article><h3>Loving</h3></article></buton>'
    html += '<button class="false" id="choicethree" onclick="clickOpacity(this)" style="background:url(../images/smart.png) no-repeat; background-size: cover"><article><h3>Smart</h3></article></buton>'
    html += '<button class="false" id="choicefour" onclick="clickOpacity(this)" style="background:url(../images/loyal.png) no-repeat; background-size: cover"><article><h3>Loyal</h3></article></buton>'
    html += '<button class="false" id="choicefive" onclick="clickOpacity(this)" style="background:url(../images/confident.png) no-repeat; background-size: cover"><article><h3>Confident</h3></article></buton>'
    html += '<button class="false" id="choicesix" onclick="clickOpacity(this)" style="background:url(../images/cuddly.png) no-repeat; background-size: cover"><article><h3>Cuddly</h3></article></buton>'
    html += '<button class="false" id="choiceseven" onclick="clickOpacity(this)" style="background:url(../images/alert.png) no-repeat; background-size: cover"><article><h3>Alert</h3></article></buton>'
    html += '<button class="false" id="choiceeight" onclick="clickOpacity(this)" style="background:url(../images/calm.png) no-repeat; background-size: cover"><article><h3>Calm</h3></article></buton>'
    html += '<button class="right"  onclick="results()"><img src="../images/right.png"></button>'
    html += '</section>'
    html += '</section>'

    main.innerHTML = html;
}

function results(){
    let html = ''
    html += '<section id="dogquiz">'
    html += '<section id="qcontent">'
    html += '<div id="dogtype">'
    html += '<h3>The best breed for you is</h3>'
    html += '<h3>Dog breed</h3>'
    html += '</div>'
    html += '<div id="dogbreed">'
    html += '<button>Learn More</button>'
    html += '</div>'
    html += '<div id="resultsbuttons">'
    html += '<button onclick="dogQuiz()">Nawh. Test Me Again!</button>'
    html += '<button onclick="search()">Yeah! Lets Adopt One</button>'
    html += '</div>'
    html += '</section>'
    html += '</section>'
    main.innerHTML = html;
}

function search(){
    let html = ''
    html += '<section id="search">'
    html += '<div id="searchbar">'
    html += '<div class="wrapper" >'
    html += '<img src="../images/search.png">'
    html += '</div>'
    html += '</div>'
    html += '<section id="scontent">'
    html += '<div class="wrapper">'

    data.forEach(e => {
        num ++

        html += `<article class="dog1" id="${num}" style="background: url(${e.image}) center; background-size: cover;">`
        html += '<div id="dname">'
        html += `<h2>${e.name}</h2>`
        html += '</div>'
        html += '<div id="shovercontent">'
    
        html += '<div id="shc1">'
        html += '<p>Near</p><p>Far</p>'
        html += `<progress value="${e.distance}" max="200"></progress>`
        html += '</div>'
        html += '<div id="shc1">'
        html += `<p>Young</p><p>Senior</p>`
        html += `<progress value="${e.age}" max="20"></progress>`
        html += '</div>'
        html += '<div id="shc1">'
        html += `<p>Small</p><p>Large</p>`
        html += `<progress value="${e.size}" max="10"></progress>`
        html += '</div>'
        html += `<button onclick="doginfo(${num})">More Info</button>`
        html += '</div>'
        html += '</article>'
    });



    html += '</div>'
    html += '</section>'
    html += '</section>'
    main.innerHTML = html;
    num = -1;
}

function doginfo(e){
    let value = parseInt(e)
    let html = ''
    
    html += '<section id="doginfo">'
    html += '<div class="wrapper">'
    html += '<section  id="dicontent">'
    html += `<div id="lcontent"><img src="${data[value].image}"><button onclick=(adopt())>Adopt Me</button></div>`
    html += '<section id="rcontent">'
    html += '<div id="diheader">'
    html += `<div id="status"><h2>${data[value].name}</h2><p>${data[value].vacinated}</p><p>${data[value].sn}</p></div>`
    html += `<h3>${data[value].breed}</h3>`
    html += `<div id="status2"><p>${data[value].age}</p><p>${data[value].weight} Pounds</p><p>${data[value].distance} Miles Away</p></div>`
    html += '</div>'
    html += '<div id="distats">'
    html += '<div id="diprogress">'
    html += '<p>Shy</p><p>Friendly</p>'
    html += `<progress value="${data[value].sf}" max="10"></progress>`
    html += '</div>'
    html += '<div id="diprogress">'
    html += '<p>Untrained</p><p>Trained</p>'
    html += `<progress value="${data[value].ut}" max="10"></progress>`
    html += '</div>'
    html += '<div id="diprogress">'
    html += '<p>Calm</p><p>Energetic</p>'
    html += `<progress value="${data[value].ce}" max="10"></progress>`
    html += '</div>'
    html += '<div id="diprogress">'
    html += '<p>Unaware</p><p>Vigilent</p>'
    html += `<progress value="${data[value].uv}" max="10"></progress>`
    html += '</div>'
    html += '</div>'
    html += '<div id="didescription">'
    html += `<p>${data[value].description}</p>`
    html += '</div>'
    html +='</section>'
    html += '</section>'
    html += '</div>'
    html += '</section>'

    main.innerHTML = html;
}

function adopt(){
    let html = ''
    if(adoptionprocess == 0){
        html += '<section id="adopt">'
        html += '<div class="wrapper">'
        html += '<section  id="acontent">'
        html += '<h2>Step 1</h2><h2>Choose A Dog!</h2>'
        html += '<p onclick="adopt()">The first step in adopting a dog is... Choosing a Dog! So Go to the home page first to take our quiz or use the advanced search to fill out what you already want in a dog.</p>'
        html += '<div id="aprogress">'
        html +='<img src="../images/hospice.png">'
        html += '<progress value="1" max="5"></progress>'
        html += '<img src="../images/home.png">'
        html += '</div>'
        html += '</section>'
        html += '</div>'
        html += '</section>'

        adoptionprocess ++
    }
    else if(adoptionprocess == 1){
        html += '<section id="adopt">'
        html += '<div class="wrapper">'
        html += '<section  id="acontent">'
        html += '<h2>Step 2</h2><h2>Submit Your Aplication</h2>'
        html += '<p>Download the pdf and email it to us at dogilyadoption@gmail.com so we can review your files to see if you are fit to adopt your new friend.</p>'
        html += '<div id="aprogress">'
        html += '<div id="txt" onclick="adopt()" ><p><img src="../images/txt.png">Dogily_Adoption_Papers.pdf</p></div>'
        html += '<img src="../images/hospice.png">'
        html += '<progress value="2" max="5"></progress>'
        html += '<img src="../images/home.png">'
        html += '</div>'
        html += '</section>'
        html += '</div>'
        html += '</section>'

        adoptionprocess ++
    }
    else if(adoptionprocess == 2){
        html += '<section id="adopt">'
        html += '<div class="wrapper">'
        html += '<section  id="acontent">'
        html += '<h2>Step 3</h2><h2>Interview</h2>'
        html += '<p onclick="adopt()"> You are now able to have a one on one interview with us. We will be contacting you through the phone and email provided you provided us.</p>'
        html += '<div id="aprogress">'
        html +='<img src="../images/hospice.png">'
        html += '<progress value="3" max="5"></progress>'
        html += '<img src="../images/home.png">'
        html += '</div>'
        html += '</section>'
        html += '</div>'
        html += '</section>'
        
        adoptionprocess ++
    }
    else if(adoptionprocess == 3){
        html += '<section id="adopt">'
        html += '<div class="wrapper">'
        html += '<section  id="acontent">'
        html += '<h2>Step 4</h2><h2>Meet your Pal!</h2>'
        html += '<p onclick="adopt()">We have deemed you capable of taking care of your precious pal. An email has been sent to you the home your new pal will be waiting for you! </p>'
        html += '<div id="aprogress">'
        html +='<img src="../images/hospice.png">'
        html += '<progress value="4" max="5"></progress>'
        html += '<img src="../images/home.png">'
        html += '</div>'
        html += '</section>'
        html += '</div>'
        html += '</section>'

        adoptionprocess ++

    }
    else if(adoptionprocess == 4){
        html += '<section id="adopt">'
        html += '<div class="wrapper">'
        html += '<section  id="acontent">'
        html += "<h2>Step 5</h2><h2>You've Adopted your Pal!</h2>"
        html += "<p onclick='adopt()'>Congratulations! You've just adopted your pal, have this certificate showing your ownership of your new animal. Make sure to share with your friends on the new friend you made!</p>"
        html += '<div id="aprogress">'
        html +='<img src="../images/hospice.png">'
        html += '<progress value="5" max="5"></progress>'
        html += '<img src="../images/home.png">'
        html += '</div>'
        html += '</section>'
        html += '</div>'
        html += '</section>'

        adoptionprocess = 0;

    }

    main.innerHTML = html;
}
function aboutus(){
    let html = ''
    html += '<section id="about">'
    html += '<div class="wrapper">'
    html += '<section  id="abcontent">'
    html += '<div id="ableft"><h2>Who are we?</h2><p>Dogily was created for the soul purpose of giving the user an easier time when it came to finding the perfect dog. With our new quiz system  we implemented we knew it would give users a more fun and interactive time when it came to adopting their favorite friend</p></div>'
    html += '<div id="abright"><img src="../images/about.png"</div>'
    html += '</section>'
    html += '</div>'
    html += '</section>'
    main.innerHTML = html;
}

function clickOpacity(e){
    console.log()
    if(document.getElementById(e.id).className == 'true'){

        document.getElementById(e.id).style.opacity = .5;
        document.getElementById(e.id).className = 'false'

    }
    else{
        document.getElementById(e.id).style.opacity = 1;
        document.getElementById(e.id).className = 'true'
    }
}