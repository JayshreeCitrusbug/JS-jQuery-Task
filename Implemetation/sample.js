// async function search_area() {
//     {let searchbox = document.getElementById("area_name").value.toUpperCase();
  
//     console.log(searchbox)
//     const respo = await fetch ('area.json');
//     const data = await respo.json();
//     // console.log(data)
  
//     let op1 = ""
//     for (i of data){
//     areas=i.title.toUpperCase();
//     // console.log(areas)
//     if (areas.indexOf(searchbox) > -1){
//       op1+= 
// }} 
fetch("http://127.0.0.1:5500/Implemetation/countries.json")
.then(response => {
   return response.json();
})
.then(data => {
    console.log(data);
    for( i of data){
        console.log(i.id);

    }
   // console.log(JSON.stringify(data))
  // console.log(data.name);
})


fetch("http://127.0.0.1:5500/Implemetation/states.json")
.then(response => {
   return response.json();
})
.then(data => {
    console.log(data);
   // console.log(JSON.stringify(data))
  // console.log(data.name);
})



fetch("http://127.0.0.1:5500/Implemetation/cities.json")
.then(response => {
   return response.json();
})
.then(data => {
    console.log(data);
   // console.log(JSON.stringify(data))
  // console.log(data.name);
})