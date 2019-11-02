//Parent "Locations"
class Locations {
	constructor(country, city, zip, address, mainPic) {
		this.country = country;
		this.city = city;
		this.zip = zip;
		this.address = address;
		this.mainPic = mainPic;
	}

	display() {
		return `<div class="row align-items-center flex-sm-column flex-md-row">
					<div class="col-md-5 col-sm-10 offset-1"><img class="card-img img-thumbnail" src="${this.mainPic}"></div>
					<div class="col-md-5 col-sm-10 h3 text-center text-light">${this.country} - ${this.city}</div>
				</div>`
	}
};

//Child  Placess --> Locations
class Places extends Locations {
	constructor(country, city, zip, address, mainPic, name) {
		super(country, city, zip, address, mainPic);
		this.name = name;	
	}

	display(){
		return `<div class="row align-items-center flex-lg-row">
					<div class="d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens">
						<img class="card-img" style="object-fit:cover" src="${this.mainPic}">
					</div>
					<div class="col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0">
						<p><b>Place: ${this.name}</b></p>
						<p><Address: ${this.address}</p>
						<p>ZIP: ${this.zip}</p>
					</div>
				</div>
				<hr class="d-sm-block d-lg-none">`
	}
};

//Child  Restaurant --> Locations
class Restaurant extends Locations {
	constructor(country, city, zip, address, mainPic, name, kindOf, phone, www) {
		super(country, city, zip, address, mainPic);
		this.name = name;
		this.kindOf = kindOf;
		this.phone = phone;
		this.www = www;
	}

	display(){
		return `<div class="row align-items-center flex-lg-row">
					<div class="d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens">
						<img style="object-fit:cover" class="card-img" src="${this.mainPic}">
					</div>
					<div class="col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0">
						<p><b>Restaurant: ${this.name}</b></p>
						<p>Kind of ${this.kindOf}</p>
						<p>Address: ${this.address}</p>
						<p>ZIP: ${this.zip}</p>
						<p>Phone: ${this.phone}</p>
						<a href="${this.www}">Website</a>
					</div>
				</div>
				<hr class="d-sm-block d-lg-none">`
	}
};

//Child Events --> Locations
class Events extends Locations {
	constructor(country, city, zip, address, mainPic, name, eventDate, eventTime, eventPrice) {
		super(country, city, zip, address, mainPic);
		this.name = name;
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.eventPrice = eventPrice;
	}

	display(){
		return `<div class="row align-items-center flex-lg-row">
					<div class="d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens">
						<img style="object-fit:cover" class="card-img" src="${this.mainPic}">
					</div>
					<div class="col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0">
						<p><b>Event: ${this.name}</b></p>
						<p>Date: ${this.eventDate}</p>
						<p>Time: ${this.eventTime}</p>
						<p>Price: ${this.eventPrice}</p>
						<p>Address: ${this.address}</p>
						<p>ZIP: ${this.zip}</p>
					</div>
				</div>`
	}
}

// :: DATA SETTING Overview ::

// :: BARCELONA -->
// ---------------------------
// :: Data --> Locations ::
let barcelona = new Locations("Spain", "Barcelona", "", "", "./img/barcelona.jpg");
// :: Data --> Places ::
let barcelonaPlaces = new Places("Spain", "Barcelona", "08024 Barcelona", "Province Barcelona", "./img/barcaplaces.jpg", "Park Güell");
// :: Data --> Restaurant ::
let barcelonaRes = new Restaurant("Spain", "Barcelona", "08002 Barcelona", "Carrer del Vidre, 7", "./img/barcarest.jpg", "Viana", "Spanish Kitchen", "+34 934 63 82 95", "http://www.vianabcn.com/");
// :: Data --> Event ::
let barcelonaEvent = new Events("Spain", "Barcelona", "08028 Barcelona", "C. d'Arístides Maillol, 12", "./img/campnou.jpg", "FC Barcelona - Real Madrid", "08.11.2019", "20:45", "EUR 29,99");


// :: ROM -->
// ------------------------
// :: Data --> Locations ::
let rom = new Locations("Italy", "Rom", "", "", "./img/rom.jpg");
// :: Data --> Places ::
let romPlaces = new Places("Italy", "Rom", "00184 Roma RM", "Piazza del Colosseo, 1", "./img/romplaces.jpg", "Colosseum");
// :: Data --> Restaurant ::
let romRes = new Restaurant("Italy", "Rom", "00153 Roma RM", "Via della Paglia, 1", "./img/romrest.jpg", "Tonnarello", "Italian Kitchen", "+39 06 580 6404", "http://www.tonnarello.it/");
// :: Data --> Event ::
let romEvent = new Events("Italy", "Rom", "00153 Roma RM", "Via della Supreste, 34", "./img/silvesterrom.jpg", "Silvester Party", "31.12.2019", "22:00", "EUR 99,99");


// Assignment Arrays
let arraySummary : Array<any> = [
[barcelona.display(), rom.display()],
[barcelonaPlaces.display(),romPlaces.display()],
[barcelonaRes.display(), romRes.display()],
[barcelonaEvent.display(), romEvent.display()]
];


// !!! building the site !!!
document.querySelector("body").innerHTML += `<div class="container">
											    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
											        <a href="#" class="navbar-brand"><img src="./img/earth.gif">BL<b style="color: lightblue">O</b>Gehmayer</a>
											        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
											            <span class="navbar-toggler-icon"></span>
											        </button>
											        <div class="collapse navbar-collapse" id="navbarCollapse">
											            <div class="navbar-nav">
											                <a href="#" class="nav-item nav-link active">Blog</a>
											                <a href="#" class="nav-item nav-link">About</a>
											            </div>
											            <div class="d-flex justify-content-center"><button class="btn btn-dark m-2" id="addBlog">New Blog</button></div>
											            <form class="form-inline ml-auto">
											                <input type="text" class="form-control mr-sm-2" placeholder="something..." >
											                <button type="submit" class="btn btn-outline-light"><i class="fa fa-binoculars"></i></button>
											            </form>
											        </div>
											    </nav>
											<div class="accordion" id="accordionExample"></div> 
											<footer class="bg-dark text-light text-center">&copy; 2019 Markus Gehmayer</footer></div>`

// Elements created by for loop
let base = document.getElementById("accordionExample");

for (let i = 0; i < arraySummary[0].length; i++){
	base.innerHTML += `<div class="card">
                            <div class="card-header bg-dark" id="heading${+i} p-2">
                                <h2 class="mb-1 p-2">
                                    <button style="width :100%" class="btn btn-link text-decoration-none" type="button" data-toggle="collapse" data-target="#collapse${+i}" aria-expanded="false" aria-controls="collapse${+i}">
                                        ${arraySummary[0][i]}
                                    </button>
                                </h2>
                            </div>
                            <div id="collapse${+i}" class="collapse" aria-labelledby="heading${+i}" data-parent="#accordionExample">
                                <div class="card-body p-2 d-flex flex-column flex-lg-row" id="data${+i}">`
								
	let datas = document.getElementById("data" +i)

    for (let j = 1; j < arraySummary.length; j++){
        datas.innerHTML += `<div id="sourceData${+j}" ${arraySummary[j][i]}</div>`
								}
                                `</div>
                            </div>
                        </div>`
}

//media query img width  - solution (found an example @www)
$(window).on("load resize click", function resize() {
	let picWidth = $(window).width()/3
	if($(window).width() > 992) {
        $("[id^='sourceData']").css("width",picWidth+"px") // Q: ask theo: bitwise operator XOR - why?
    } else {
        $("[id^='sourceData']").css("width","100%")
    }
}); 


//Add new Blog Function 
$("#addBlog").on("click",addBlogFunc)
let countId = 99
function addBlogFunc() {
	countId += 1 
	base.innerHTML += `<div class="card">
	                            <div class="card-header bg-dark" id="heading${+countId}">
	                                <h2 class="mb-0">
	                                    <button style="width :100%" class="btn btn-link text-decoration-none" type="button" data-toggle="collapse" data-target="#collapse${+countId}" aria-expanded="true" aria-controls="collapse${+countId}">
	                                       <div class="row align-items-center flex-sm-column flex-md-row">
												<div class="col-md-5 col-sm-10 offset-1" id="appendImgHere${+countId}"><p id="addNewBtn" style="color:white">ADD new Blog</p></div>
												<div class="col-md-5 col-sm-10 h2 text-center text-light" id="userCountry${+countId}"></div>
											</div>
	                                    </button>
	                                </h2>
	                            </div>
	                            <div id="collapse${+countId}" class="collapse" aria-labelledby="heading${+countId}" data-parent="#accordionExample">
	                                <div class="card-body d-flex flex-column flex-lg-row" id="data${+countId}">
										<div class="mx-auto">
											<div class="col-xs-6">
            									<div class="p-a-2">
													<p><i class="fa fa-globe" style="font-size:12px"></i><b> Country</b>: <input id="country${+countId}"></input></p>
													<p><i class="fa fa-map-marker"></i><b> City</b>: <input id="city${+countId}"></input></p>
													<p><i class="fa fa-picture-o"></i> WWW picture: <input id="firstImg${+countId}" type="text"></input></p>
												</div>
											</div>
											<div class="col-xs-6">
            									<div class="p-a-2">
													<p><i class="fa fa-map-pin"></i><b> Place</b>: <input id="PlacesP${+countId}"></input></p>
													<p><i class="fa fa-map-signs"></i> Address: <input id="addressP${+countId}"></input></p>
													<p><i class="fa fa-flag-checkered"></i> ZIP: <input id="zipP${+countId}"></input></p>
													<p><i class="fa fa-picture-o"></i> WWW picture: <input id="PlacesImg${+countId}" type="text"></input></p>
												</div>
											</div>
											<div class="col-xs-6">
            									<div class="p-a-2">
													<p><i class="fa fa-cutlery"></i> <b>Restaurant</b>: <input id="restaR${+countId}"></input></p>
													<p><i class="fa fa-info"></i> Kind of?: <input id="kindOfR${+countId}"></input></p>
													<p><i class="fa fa-map-signs"></i> Address: <input id="addressR${+countId}"></input></p>
													<p><i class="fa fa-flag-checkered"></i> ZIP: <input id="zipR${+countId}"></input></p>
													<p><i class="fa fa-phone"></i> Phone: <input id="phoneR${+countId}"></input></p>
													<p><i class="fa fa-laptop"></i> Website: <input value="https://www." id="wwwR${+countId}"></input></p>
													<p><i class="fa fa-picture-o"></i> WWW picture: <input id="restaImg${+countId}" type="text"></input></p>
												</div>
											</div>
											<div class="col-xs-6">
            									<div class="p-a-2">
													<p><i class="fa fa-eye"></i> <b>Event</b>: <input id="eventE${+countId}"></input></p>
													<p><i class="fa fa-calendar"></i> Date: <input id="dateE${+countId}" type="date"></input></p>
													<p><i class="fa fa-clock-o"></i> Time: <span class="float-right"><input id="timeStartE${+countId}" type="time"></input></span></p>
													<p><i class="fa fa-money"></i> Price: <input id="priceE${+countId}" type="number"></input>EUR</p>
													<p><i class="fa fa-map-signs"></i> Address: <input id="addressE${+countId}"></input></p>
													<p><i class="fa fa-flag-checkered"></i> ZIP: <input id="zipE${+countId}"></input></p>
													<p><i class="fa fa-picture-o"></i> WWW picture: <input id="eventImg${+countId}" type="text"></input></p>
													<center><button class="lazyBtn" class="btn btn-dark float-right" style="text-align: center" onclick="addEntry(this.id)" id="submit${+countId}">Add it!</button></center>
												</div>
											</div>
										</div>
									</div>
	                            </div>
	                        </div>`
}

//Entry from user input
function addEntry(e) {
	let addNew = Number((e).slice(6));
	let inputData : Array<any> = []
	inputData.push([
		[$("#country"+addNew).val(),$("#city"+addNew).val(),$("#firstImg"+addNew).val()],
		[$("#PlacesP"+addNew).val(), $("#addressP"+addNew).val(), $("#zipP"+addNew).val(), $("#PlacesImg"+addNew).val()],
		[$("#restaR"+addNew).val(), $("#kindOfR"+addNew).val(), $("#addressR"+addNew).val(), $("#zipR"+addNew).val(), $("#phoneR"+addNew).val(), $("#wwwR"+addNew).val(), $("#restaImg"+addNew).val()],
		[$("#eventE"+addNew).val(), $("#dateE"+addNew).val(), $("#timeStartE"+addNew).val(), $("#timeEndE"+addNew).val(), $("#priceE"+addNew).val(), $("#addressE"+addNew).val(), $("#zipE"+addNew).val(), $("#eventImg"+addNew).val()]
		]);
	
	$(".mx-auto").remove(); // remove the form - yack fu..takes a lot of time to notice that i have to do this :-D

	$("#appendImgHere"+addNew).html(`<img class="card-img img-thumbnail" src="${inputData[0][0][2]}">`);
	$("#userCountry"+addNew).text(`${inputData[0][0][0]} - ${inputData[0][0][1]}`);

	$("#data"+addNew).append(`
							<div id="sourceData${+addNew}">
								<div class="row align-items-center flex-lg-row">
									<div class="d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens">
										<img class="card-img" style="object-fit:cover" src="${inputData[0][1][3]}">
									</div>
									<div class="col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0">
										<p><b>Place: ${inputData[0][1][0]}</b></p>
										<p>Address: ${inputData[0][1][1]}</p>
										<p>ZIP: ${inputData[0][1][2]}</p>
									</div>
								</div>
							</div>
							<hr class="d-sm-block d-lg-none">

							<div id="sourceData${+addNew}">
								<div class="row align-items-center flex-lg-row">
									<div class="d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens">
										<img style="object-fit:cover" class="card-img" src="${inputData[0][2][6]}">
									</div>
									<div class="col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0">
										<p><b>Restaurant: ${inputData[0][2][0]}</b></p>
										<p>Kind of ${inputData[0][2][1]}</p>
										<p>Address: ${inputData[0][2][2]}</p>
										<p>ZIP: ${inputData[0][2][3]}</p>
										<p>Tel.: ${inputData[0][2][4]}</p>
										<a href="${inputData[0][2][5]}">Website</a>
									</div>
								</div>
							</div>
							<hr class="d-sm-block d-lg-none">

							<div id="sourceData${+addNew}">
								<div class="row align-items-center flex-lg-row">
									<div class="d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens">
										<img style="object-fit:cover" class="card-img" src="${inputData[0][3][7]}">
									</div>
									<div class="col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0">
										<p><b>Event: ${inputData[0][3][0]}</b></p>
										<p>Date: ${inputData[0][3][1]}</p>
										<p>Time: ${inputData[0][3][2]}</p>
										<p>Price: EUR ${inputData[0][3][4]}</p>
										<p>Address: ${inputData[0][3][5]}</p>
										<p>ZIP: ${inputData[0][3][6]}</p>
									</div>
								</div>
							</div>`)
}};