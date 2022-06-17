
var country = [];
fetch("http://127.0.0.1:5500/Implemetation/countries.json")
.then(response => {
   return response.json();
})
.then(data => {
    
    for(i of data){
      var name = i.name
        country.push(name);
        // document.getElementById("country").innerHTML = country;
        // console.log(areas);
        // console.log(i.name);
    }
})

console.log(country);


var countryObject = country;
console.log(countryObject);

  // 1:{},
  // 2:{},
  // 3:{},
  // 4:{},

  // "Front-end": {
  //   "HTML": ["Links", "Images", "Tables", "Lists"],
  //   "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
  //   "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]    
  // },
  // "Back-end": {
  //   "PHP": ["Variables", "Strings", "Arrays"],
  //   "SQL": ["SELECT", "UPDATE", "DELETE"]
  // }


window.onload = function() {
  var countrySel = document.getElementById("country");
  var topicSel = document.getElementById("topic");
  var chapterSel = document.getElementById("chapter");
  for (var x in countryObject) {
    
    countrySel.options[countrySel.options.length] = new Option(countryObject[x], countryObject[x]);
  }
  countrySel.onchange = function() {
 //empty Chapters- and Topics- dropdowns
 chapterSel.length = 1;
 topicSel.length = 1;
    //display correct values
    for (var y in countryObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  }
  topicSel.onchange = function() {
 //empty Chapters dropdown
 chapterSel.length = 1;
    //display correct values
    var z = countryObject[countrySel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  }
}

// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }

// //usage:
// readTextFile("/countries.json", function(text){
//     var data = JSON.parse(text);
//     console.log(data);
// });