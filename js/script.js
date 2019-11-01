var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Parent "Locations"
var Locations = /** @class */ (function () {
    function Locations(country, city, zip, address, mainPic) {
        this.country = country;
        this.city = city;
        this.zip = zip;
        this.address = address;
        this.mainPic = mainPic;
    }
    Locations.prototype.display = function () {
        return "<div class=\"row align-items-center flex-sm-column flex-md-row\">\n\t\t\t\t\t<div class=\"col-md-5 col-sm-10 offset-1\"><img class=\"card-img img-thumbnail\" src=\"" + this.mainPic + "\"></div>\n\t\t\t\t\t<div class=\"col-md-5 col-sm-10 h3 text-center text-light\">" + this.country + " - " + this.city + "</div>\n\t\t\t\t</div>";
    };
    return Locations;
}());
;
//Child  Placess --> Locations
var Places = /** @class */ (function (_super) {
    __extends(Places, _super);
    function Places(country, city, zip, address, mainPic, name) {
        var _this = _super.call(this, country, city, zip, address, mainPic) || this;
        _this.name = name;
        return _this;
    }
    Places.prototype.display = function () {
        return "<div class=\"row align-items-center flex-lg-row\">\n\t\t\t\t\t<div class=\"d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens\">\n\t\t\t\t\t\t<img class=\"card-img\" style=\"object-fit:cover\" src=\"" + this.mainPic + "\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0\">\n\t\t\t\t\t\t<p><b>Place: " + this.name + "</b></p>\n\t\t\t\t\t\t<p><Address: " + this.address + "</p>\n\t\t\t\t\t\t<p>ZIP: " + this.zip + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<hr class=\"d-sm-block d-lg-none\">";
    };
    return Places;
}(Locations));
;
//Child  Restaurant --> Locations
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(country, city, zip, address, mainPic, name, kindOf, phone, www) {
        var _this = _super.call(this, country, city, zip, address, mainPic) || this;
        _this.name = name;
        _this.kindOf = kindOf;
        _this.phone = phone;
        _this.www = www;
        return _this;
    }
    Restaurant.prototype.display = function () {
        return "<div class=\"row align-items-center flex-lg-row\">\n\t\t\t\t\t<div class=\"d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens\">\n\t\t\t\t\t\t<img style=\"object-fit:cover\" class=\"card-img\" src=\"" + this.mainPic + "\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0\">\n\t\t\t\t\t\t<p><b>Restaurant: " + this.name + "</b></p>\n\t\t\t\t\t\t<p>Kind of " + this.kindOf + "</p>\n\t\t\t\t\t\t<p>Address: " + this.address + "</p>\n\t\t\t\t\t\t<p>ZIP: " + this.zip + "</p>\n\t\t\t\t\t\t<p>Tel.: " + this.phone + "</p>\n\t\t\t\t\t\t<a href=\"" + this.www + "\">Website</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<hr class=\"d-sm-block d-lg-none\">";
    };
    return Restaurant;
}(Locations));
;
//Child Events --> Locations
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(country, city, zip, address, mainPic, name, eventDate, eventTime, eventPrice) {
        var _this = _super.call(this, country, city, zip, address, mainPic) || this;
        _this.name = name;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.eventPrice = eventPrice;
        return _this;
    }
    Events.prototype.display = function () {
        return "<div class=\"row align-items-center flex-lg-row\">\n\t\t\t\t\t<div class=\"d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens\">\n\t\t\t\t\t\t<img style=\"object-fit:cover\" class=\"card-img\" src=\"" + this.mainPic + "\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0\">\n\t\t\t\t\t\t<p><b>Event: " + this.name + "</b></p>\n\t\t\t\t\t\t<p>Date: " + this.eventDate + "</p>\n\t\t\t\t\t\t<p>Time: " + this.eventTime + "</p>\n\t\t\t\t\t\t<p>Price: " + this.eventPrice + "</p>\n\t\t\t\t\t\t<p>Address: " + this.address + "</p>\n\t\t\t\t\t\t<p>ZIP: " + this.zip + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>";
    };
    return Events;
}(Locations));
// :: DATA SETTING Overview ::
// :: BARCELONA -->
// ---------------------------
// :: Data --> Locations ::
var barcelona = new Locations("Spain", "Barcelona", "", "", "./img/barcelona.jpg");
// :: Data --> Places ::
var barcelonaPlaces = new Places("Spain", "Barcelona", "08024 Barcelona", "Province Barcelona", "./img/barcaplaces.jpg", "Park Güell");
// :: Data --> Restaurant ::
var barcelonaRes = new Restaurant("Spain", "Barcelona", "08002 Barcelona", "Carrer del Vidre, 7", "./img/barcarest.jpg", "Viana", "Spanish Kitchen", "+34 934 63 82 95", "http://www.vianabcn.com/");
// :: Data --> Event ::
var barcelonaEvent = new Events("Spain", "Barcelona", "08028 Barcelona", "C. d'Arístides Maillol, 12", "./img/campnou.jpg", "FC Barcelona - Real Madrid", "08.11.2019", "20:45", "EUR 29,99");
// :: ROM -->
// ------------------------
// :: Data --> Locations ::
var rom = new Locations("Italy", "Rom", "", "", "./img/rom.jpg");
// :: Data --> Places ::
var romPlaces = new Places("Italy", "Rom", "00184 Roma RM", "Piazza del Colosseo, 1", "./img/romplaces.jpg", "Colosseum");
// :: Data --> Restaurant ::
var romRes = new Restaurant("Italy", "Rom", "00153 Roma RM", "Via della Paglia, 1", "./img/romrest.jpg", "Tonnarello", "Italian Kitchen", "+39 06 580 6404", "http://www.tonnarello.it/");
// :: Data --> Event ::
var romEvent = new Events("Italy", "Rom", "00153 Roma RM", "Via della Supreste, 34", "./img/silvesterrom.jpg", "Silvester Party", "31.12.2019", "22:00", "EUR 99,99");
// Assignment Arrays
var arraySummary = [
    [barcelona.display(), rom.display()],
    [barcelonaPlaces.display(), romPlaces.display()],
    [barcelonaRes.display(), romRes.display()],
    [barcelonaEvent.display(), romEvent.display()]
];
// !!! building the site !!!
document.querySelector("body").innerHTML += "<div class=\"container\">\n\t\t\t\t\t\t\t\t\t\t\t    <nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\t\t\t\t\t\t\t\t\t\t\t        <a href=\"#\" class=\"navbar-brand\"><img src=\"./img/earth.gif\">BL<b style=\"color: lightblue\">O</b>Gehmayer</a>\n\t\t\t\t\t\t\t\t\t\t\t        <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\n\t\t\t\t\t\t\t\t\t\t\t            <span class=\"navbar-toggler-icon\"></span>\n\t\t\t\t\t\t\t\t\t\t\t        </button>\n\t\t\t\t\t\t\t\t\t\t\t        <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n\t\t\t\t\t\t\t\t\t\t\t            <div class=\"navbar-nav\">\n\t\t\t\t\t\t\t\t\t\t\t                <a href=\"#\" class=\"nav-item nav-link active\">Blog</a>\n\t\t\t\t\t\t\t\t\t\t\t                <a href=\"#\" class=\"nav-item nav-link\">About</a>\n\t\t\t\t\t\t\t\t\t\t\t            </div>\n\t\t\t\t\t\t\t\t\t\t\t            <div class=\"d-flex justify-content-center\"><button class=\"btn btn-dark m-2\" id=\"addBlog\">New Blog</button></div>\n\t\t\t\t\t\t\t\t\t\t\t            <form class=\"form-inline ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t                <input type=\"text\" class=\"form-control mr-sm-2\" placeholder=\"something...\" >\n\t\t\t\t\t\t\t\t\t\t\t                <button type=\"submit\" class=\"btn btn-outline-light\"><i class=\"fa fa-binoculars\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t            </form>\n\t\t\t\t\t\t\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t\t\t\t\t    </nav>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"accordion\" id=\"accordionExample\"></div> \n\t\t\t\t\t\t\t\t\t\t\t<footer class=\"bg-dark text-light text-center\">&copy; 2019 Markus Gehmayer</footer></div>";
// Elements created by for loop
var base = document.getElementById("accordionExample");
for (var i = 0; i < arraySummary[0].length; i++) {
    base.innerHTML += "<div class=\"card\">\n                            <div class=\"card-header bg-dark\" id=\"heading" + +i + " p-2\">\n                                <h2 class=\"mb-1 p-2\">\n                                    <button style=\"width :100%\" class=\"btn btn-link text-decoration-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse" + +i + "\" aria-expanded=\"false\" aria-controls=\"collapse" + +i + "\">\n                                        " + arraySummary[0][i] + "\n                                    </button>\n                                </h2>\n                            </div>\n                            <div id=\"collapse" + +i + "\" class=\"collapse\" aria-labelledby=\"heading" + +i + "\" data-parent=\"#accordionExample\">\n                                <div class=\"card-body p-2 d-flex flex-column flex-lg-row\" id=\"data" + +i + "\">";
    var datas = document.getElementById("data" + i);
    for (var j = 1; j < arraySummary.length; j++) {
        datas.innerHTML += "<div id=\"sourceData" + +j + "\" " + arraySummary[j][i] + "</div>";
    }
    "</div>\n                            </div>\n                        </div>";
}
//media query img width  - solution (found an example @www)
$(window).on("load resize click", function resize() {
    var picWidth = $(window).width() / 3;
    if ($(window).width() > 992) {
        $("[id^='sourceData']").css("width", picWidth + "px"); // Q: ask theo: bitwise operator XOR - why?
    }
    else {
        $("[id^='sourceData']").css("width", "100%");
    }
});
//Add new Blog Function 
$("#addBlog").on("click", addBlogFunc);
var countId = 99;
function addBlogFunc() {
    countId += 1;
    base.innerHTML += "<div class=\"card\">\n\t                            <div class=\"card-header bg-dark\" id=\"heading" + +countId + "\">\n\t                                <h2 class=\"mb-0\">\n\t                                    <button style=\"width :100%\" class=\"btn btn-link text-decoration-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapse" + +countId + "\" aria-expanded=\"true\" aria-controls=\"collapse" + +countId + "\">\n\t                                       <div class=\"row align-items-center flex-sm-column flex-md-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5 col-sm-10 offset-1\" id=\"appendImgHere" + +countId + "\"><p id=\"addNewBtn\" style=\"color:white\">ADD new Blog</p></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-5 col-sm-10 h2 text-center text-light\" id=\"userCountry" + +countId + "\"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t                                    </button>\n\t                                </h2>\n\t                            </div>\n\t                            <div id=\"collapse" + +countId + "\" class=\"collapse\" aria-labelledby=\"heading" + +countId + "\" data-parent=\"#accordionExample\">\n\t                                <div class=\"card-body d-flex flex-column flex-lg-row\" id=\"data" + +countId + "\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"mx-auto\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n            \t\t\t\t\t\t\t\t\t<div class=\"p-a-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-globe\" style=\"font-size:12px\"></i><b> Country</b>: <input id=\"country" + +countId + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-map-marker\"></i><b> City</b>: <input id=\"city" + +countId + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-picture-o\"></i> WWW picture: <input id=\"firstImg" + +countId + "\" type=\"text\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n            \t\t\t\t\t\t\t\t\t<div class=\"p-a-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-map-pin\"></i><b> Place</b>: <input id=\"PlacesP" + +countId + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-map-signs\"></i> Address: <input id=\"addressP" + +countId + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-flag-checkered\"></i> ZIP: <input id=\"zipP" + +countId + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-picture-o\"></i> WWW picture: <input id=\"PlacesImg" + +countId + "\" type=\"text\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n            \t\t\t\t\t\t\t\t\t<div class=\"p-a-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-cutlery\"></i> <b>Restaurant</b>: <input id=\"restaR" + +countId + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-info\"></i> Kind of?: <input id=\"kindOfR" + +countId + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-map-signs\"></i> Address: <input id=\"addressR" + +countId + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-flag-checkered\"></i> ZIP: <input id=\"zipR" + +countId + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-phone\"></i> Phone: <input id=\"phoneR" + +countId + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-laptop\"></i> Website: <input value=\"https://www.\" id=\"wwwR" + +countId + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-picture-o\"></i> WWW picture: <input id=\"restaImg" + +countId + "\" type=\"text\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\n            \t\t\t\t\t\t\t\t\t<div class=\"p-a-2\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-eye\"></i> <b>Event</b>: <input id=\"eventE" + +countId + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-calendar\"></i> Date: <input id=\"dateE" + +countId + "\" type=\"date\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-clock-o\"></i> Time: <span class=\"float-right\"><input id=\"timeStartE" + +countId + "\" type=\"time\"></input></span></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-money\"></i> Price: <input id=\"priceE" + +countId + "\" type=\"number\"></input>EUR</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-map-signs\"></i> Address: <input id=\"addressE" + +countId + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-flag-checkered\"></i> ZIP: <input id=\"zipE" + +countId + "\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-picture-o\"></i> WWW picture: <input id=\"eventImg" + +countId + "\" type=\"text\"></input></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<center><button class=\"lazyBtn\" class=\"btn btn-dark float-right\" style=\"text-align: center\" onclick=\"addEntry(this.id)\" id=\"submit" + +countId + "\">Add it!</button></center>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t                            </div>\n\t                        </div>";
}
//Entry from user input
function addEntry(e) {
    var addNew = Number((e).slice(6));
    var inputData = [];
    inputData.push([
        [$("#country" + addNew).val(), $("#city" + addNew).val(), $("#firstImg" + addNew).val()],
        [$("#PlacesP" + addNew).val(), $("#addressP" + addNew).val(), $("#zipP" + addNew).val(), $("#PlacesImg" + addNew).val()],
        [$("#restaR" + addNew).val(), $("#kindOfR" + addNew).val(), $("#addressR" + addNew).val(), $("#zipR" + addNew).val(), $("#phoneR" + addNew).val(), $("#wwwR" + addNew).val(), $("#restaImg" + addNew).val()],
        [$("#eventE" + addNew).val(), $("#dateE" + addNew).val(), $("#timeStartE" + addNew).val(), $("#timeEndE" + addNew).val(), $("#priceE" + addNew).val(), $("#addressE" + addNew).val(), $("#zipE" + addNew).val(), $("#eventImg" + addNew).val()]
    ]);
    $(".mx-auto").remove(); // remove the form - yack fu..takes a lot of time to notice that i have to do this :-D
    $("#appendImgHere" + addNew).html("<img class=\"card-img img-thumbnail\" src=\"" + inputData[0][0][2] + "\">");
    $("#userCountry" + addNew).text(inputData[0][0][0] + " - " + inputData[0][0][1]);
    $("#data" + addNew).append("\n\t\t\t\t\t\t\t<div id=\"sourceData" + +addNew + "\">\n\t\t\t\t\t\t\t\t<div class=\"row align-items-center flex-lg-row\">\n\t\t\t\t\t\t\t\t\t<div class=\"d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens\">\n\t\t\t\t\t\t\t\t\t\t<img class=\"card-img\" style=\"object-fit:cover\" src=\"" + inputData[0][1][3] + "\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0\">\n\t\t\t\t\t\t\t\t\t\t<p><b><u>Place</u>: " + inputData[0][1][0] + "</b></p>\n\t\t\t\t\t\t\t\t\t\t<p>Address: " + inputData[0][1][1] + "</p>\n\t\t\t\t\t\t\t\t\t\t<p>ZIP: " + inputData[0][1][2] + "</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<hr class=\"d-sm-block d-lg-none\">\n\n\t\t\t\t\t\t\t<div id=\"sourceData" + +addNew + "\">\n\t\t\t\t\t\t\t\t<div class=\"row align-items-center flex-lg-row\">\n\t\t\t\t\t\t\t\t\t<div class=\"d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens\">\n\t\t\t\t\t\t\t\t\t\t<img style=\"object-fit:cover\" class=\"card-img\" src=\"" + inputData[0][2][6] + "\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0\">\n\t\t\t\t\t\t\t\t\t\t<p><b><u>Restaurant</u>: " + inputData[0][2][0] + "</b></p>\n\t\t\t\t\t\t\t\t\t\t<p>Kind of " + inputData[0][2][1] + "</p>\n\t\t\t\t\t\t\t\t\t\t<p>Address: " + inputData[0][2][2] + "</p>\n\t\t\t\t\t\t\t\t\t\t<p>ZIP: " + inputData[0][2][3] + "</p>\n\t\t\t\t\t\t\t\t\t\t<p>Tel.: " + inputData[0][2][4] + "</p>\n\t\t\t\t\t\t\t\t\t\t<a href=\"" + inputData[0][2][5] + "\">Website</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<hr class=\"d-sm-block d-lg-none\">\n\n\t\t\t\t\t\t\t<div id=\"sourceData" + +addNew + "\">\n\t\t\t\t\t\t\t\t<div class=\"row align-items-center flex-lg-row\">\n\t\t\t\t\t\t\t\t\t<div class=\"d-none d-md-block col-md-5 col-lg-12 offset-1 offset-lg-0 lg-screens\">\n\t\t\t\t\t\t\t\t\t\t<img style=\"object-fit:cover\" class=\"card-img\" src=\"" + inputData[0][3][7] + "\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-10 col-md-5 col-lg-12 offset-1 offset-lg-0\">\n\t\t\t\t\t\t\t\t\t\t<p><b><u>Event</u>: " + inputData[0][3][0] + "</b></p>\n\t\t\t\t\t\t\t\t\t\t<p>Date: " + inputData[0][3][1] + "</p>\n\t\t\t\t\t\t\t\t\t\t<p>Time: " + inputData[0][3][2] + "</p>\n\t\t\t\t\t\t\t\t\t\t<p>Price: EUR " + inputData[0][3][4] + "</p>\n\t\t\t\t\t\t\t\t\t\t<p>Address: " + inputData[0][3][5] + "</p>\n\t\t\t\t\t\t\t\t\t\t<p>ZIP: " + inputData[0][3][6] + "</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>");
}
;
