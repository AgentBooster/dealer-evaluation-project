const express = require("express");
var cors = require('cors')
const app = express();
app.use(cors());

const dealerslist = require("./utils/dealers.json");



app.get("/price/:dealer/:product", function (request, response) {
  let req_dealer = request.params.dealer;
  let req_product = request.params.product;
  
  // Find the dealer first to optimize searching
  let dealer = dealerslist.dealers.find(d => d.Dealer === req_dealer);
  
  if (dealer) {
    if (dealer.products[req_product]) {
      response.send({"message": `${req_product} costs ${dealer.products[req_product]} at ${req_dealer}`});
    } else {
      response.send({"message": `${req_product} is not available with ${req_dealer}`});
    }
  } else {
    response.send({"message": "The product is not available with this dealer"});
  }
});

app.get("/allprice/:product", function (request, response) {
  let req_product = request.params.product;
  
  // Map and filter prices in a more declarative way
  let priceslist = dealerslist.dealers
    .filter(dealer => dealer.products[req_product] !== undefined)
    .map(dealer => ({ key: dealer.Dealer, value: dealer.products[req_product] }));

  if (priceslist.length > 0) {
    response.send({"prices": priceslist});
  } else {
    response.send({"message": "The product is not available with any dealer"});
  }
});

let port = process.env.PORT || 8080
app.listen(port, function () {
  console.log("To view your app, open this link in your browser: http://localhost:" + port);
})