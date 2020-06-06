window.onload = choosePic;

var foods = new Array("zen_curry.jpg", "yakyudori.jpg", "tasty_noodle_house.jpg",
    "shanxi_magic_kitchen.jpg", "pot_king.jpg", "kroran_uyghur_cuisine.jpg",
    "tea_station.jpg", "din_tai_fung.jpg", "izakaya_sakura.jpg", "ajisen_ramen.jpg",
    "yokohama_yakitori_koubou.jpg", "nishiki_ramen.jpg");
var names = new Array("Zen Curry", "Yakyudori", "Tasty Noodle House", "Shaanxi Magic Kitchen",
    "Pot King", "Kroran Uyghur Cuisine", "Tea Station", "Din Tai Fung", "Izakaya Sakura",
    "Ajisen Ramen", "Yokohama Yakitori Koubou", "Nishiki Ramen");

function choosePic() {
     var randomNum = Math.floor(Math.random() * foods.length);
     document.getElementById("food").src = "imgs/" + foods[randomNum];
     document.getElementById("name").innerText = names[randomNum];
}