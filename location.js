let Instagram = require("instagram-nodejs-without-api");
Instagram = new Instagram();

function byLocation() {
  Instagram.commonSearch("Cancun").then(r => {
    //get location id for Kyiv
    //let places = r.places[0];
    let locationId = r.places[0].place.location["pk"];
    console.log(locationId);
    //search posts from Kyiv
    Instagram.searchBy("location", locationId, "0", 12).then(r =>
      console.log("")
    );
  });
}

byLocation();
