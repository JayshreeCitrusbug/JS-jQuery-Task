
var country = [];
fetch("http://127.0.0.1:5500/Implemetation/countries.json")
.then(response => {
   return response.json();
})
.then(data => {
    
    for(i of data){
      var name = i.name
      var id = i.id
        country.push({'id':id ,'name':name});
        // document.getElementById("country").innerHTML = country;
        // console.log(areas);
        // console.log(i.name);
    }
})
// console.log(country);
var countryObject = country;
// console.log("countryObject",countryObject);
// ...............................................................................................................

var states = [];
fetch("http://127.0.0.1:5500/Implemetation/states.json")
.then(response => {
   return response.json();
})
.then(data1 => {
    
    for(i of data1){
      var name = i.name
      var cname = i.country_name
      states.push({'name':name, 'cname':cname});
       
    }
})
// console.log("states", states);
var stateObject = states;
// console.log("satteObject", stateObject);

// ............................................................................................................


var cities = [];
fetch("http://127.0.0.1:5500/Implemetation/cities.json")
.then(response => {
   return response.json();
})
.then(data2 => {
    
    for(i of data2){
      var name = i.name
      var sname = i.state_name
      cities.push({'name':name, 'sname':sname});
       
    }
})
// console.log("cities", cities);
var cityObject = cities;
// console.log("cityObject", cityObject);
// ..............................................................................................................







window.onload = function() {
  var countrySel = document.getElementById("country");
  var stateSel = document.getElementById("state");
  var citySel = document.getElementById("city");
  for (var x in countryObject) {
    
    countrySel.options[countrySel.options.length] = new Option(countryObject[x].name, countryObject[x].name);
    
  }

  
  // debugger

countrySel.onchange = function() {
 //empty citys- and States- dropdowns
 citySel.length = 1;
 stateSel.length = 1;
    //display correct values
    var finalstate = [];
    console.log("this value country", countrySel.options[countrySel.selectedIndex].value);


    // for (i in countryObject){
      // console.log(countryObject[i].name);
      for(j in stateObject){
        // console.log(stateObject[j].name);
        if(stateObject[j].cname == this.value){
          
          finalstate.push(stateObject[j].name);
          console.log('finalstate',finalstate);
      }
      }
    // }
    
      console.log('true for states')
      console.log("this value of country name", this.value);
      for (var y in finalstate) {
        // console.log(stateObject[y].name);
        stateSel.options[stateSel.options.length] = new Option(finalstate[y],finalstate[y]);
    }

  }
  stateSel.onchange = function() {
 //empty citys dropdown
 citySel.length = 1;
 var finalcity = [];
 console.log("this value state", stateSel.options[stateSel.selectedIndex].value);
 for(k in cityObject){
  // console.log(stateObject[j].name);
  if(cityObject[k].sname == this.value){
    
    finalcity.push(cityObject[k].name);
    // console.log(finalcity);
}
}
console.log('true for cities')
      console.log("this value of state name", this.value);
      for (var z in finalcity) {
        console.log('finalcity',finalcity);
        console.log(cityObject);
        citySel.options[citySel.options.length] = new Option(finalcity[z], finalcity[z]);
    }
    
    //display correct values




    // var z = countryObject[countrySel.value][this.value];
    // for (var i = 0; i < z.length; i++) {
    //   citySel.options[citySel.options.length] = new Option(z[i], z[i]);
    // }
  }
}

