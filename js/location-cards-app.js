function Card(locationName, locationAddress, locationDistance, websiteLink, wikipediaLink, navigationLink,
                    timingsLine1, timingsLine2, localPrice, foreignPrice, cameraPrice, className, id, order) {
    this.locationName = locationName;
    this.locationAddress = locationAddress;
    this.locationDistance = locationDistance;
    this.websiteLink = websiteLink;
    this.wikipediaLink = wikipediaLink;
    this.navigationLink = navigationLink;
    this.addressLine1 = timingsLine1;
    this.addressLine2 = timingsLine2;
    this.localPrice = localPrice;
    this.foreignPrice = foreignPrice;
    this.cameraPrice = cameraPrice;
    this.className = className;
    this.id = id;
    this.order = order;
}

var wedgeCardsList = [];
var squareCardsList = [];
var tallCardsList = [];

var lotusTemple = new Card('Lotus Temple', 'Delhi', 43.2, 'http://bahaihouseofworship.in/', 'http://en.wikipedia.org/wiki/Lotus_Temple',
    'https://www.bing.com/maps/directions?rtp=adr.~pos.28.5534324645996_77.2586898803711_\n' +
    '                           Lotus+Temple+Rd%2c+Shambhu+Dayal+Bagh%2c+Bahapur%2c+Shambhu+Dayal+Bagh%2c+Kalkaji%2c+New+Delhi%2c+Delhi+110019\n' +
    '                           _Lotus+Temple_', 'temporary string', 'hello world', 100,
    200 ,300, "square-box", 'lotus', 'one');
squareCardsList.push(lotusTemple);

var locationCardsContainer = $('.location-cards-container');

for(var cardIndex=0 ; cardIndex < squareCardsList.length ; cardIndex++){
    var card = squareCardsList[cardIndex];
    var newCard = '<div class="' + card.className + ' box" id="' + card.id + '">\n' +
        '                     <h1 class="location-title">' + card.locationName + '</h1>\n' +
        '                     <h2 class="location-address">' + card.locationAddress + '</h2>\n' +
        '                     <p class="location-distance">' + card.locationDistance + '<span class="location-distance-km">km</span> </p>\n' +
        '                     <div class="location-icon-container">\n' +
        '                        <div class="location-icon">\n' +
        '                           <a href="' + card.websiteLink + '" target="_blank"><img src="assets/Places%20to%20Explore/web.png"></a>\n' +
        '                        </div>\n' +
        '                        <div class="location-icon">\n' +
        '                           <a href="' + card.wikipediaLink + '" target="_blank"><img src="assets/Places%20to%20Explore/wikipedia-logo.png"></a>\n' +
        '                        </div>\n' +
        '                        <div class="location-icon">\n' +
        '                           <a href="' + card.navigationLink + '" target="_blank"><img src="assets/Places%20to%20Explore/map.png"></a>\n' +
        '                        </div>\n' +
        '                     </div>\n' +
        '                     <div class="location-timings-container">\n' +
        '                        <p class="location-timings">' + card.addressLine1 + '</p>\n' +
        '                        <p class="location-timings">' + card.addressLine2 + '</p>\n' +
        '                     </div>\n' +
        '                     <div class="location-prices-container">\n' +
        '                        <span class="badge badge-warning"><img src="assets/Places%20to%20Explore/train.png" class="badge-icon"> &#8377; ' + card.localPrice + ' </span>\n' +
        '                        <span class="badge badge-info"><img src="assets/Places%20to%20Explore/plane.png" class="badge-icon"> &#8377; ' + card.foreignPrice + ' </span>\n' +
        '                        <span class="badge badge-light"><img src="assets/Places%20to%20Explore/camera.png" class="badge-icon"> &#8377; ' + card.cameraPrice + '</span>\n' +
        '                     </div>\n' +
        '                  </div>';
    locationCardsContainer.append(newCard);
}