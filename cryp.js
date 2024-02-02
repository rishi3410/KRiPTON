
var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var dog = document.getElementById("dogecoin");

var alpha = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr",
    "method": "GET",
    "headers": {}
}
$.ajax(alpha).done(function (response){
    console.log(response);
 btc.innerHTML = response.bitcoin.inr;
 eth.innerHTML = response.ethereum.inr;
 dog.innerHTML = response.dogecoin.inr;
});
