  let data = [{skills:"Javascript/Typescript", rating : 2}
  ,{skills:"Java", rating : 3}
  ,{skills:"Docker", rating : 3}
  ,{skills:"AWS Cloud", rating : 3}
  ,{skills:"HTML", rating : 3}
  ,{skills:"CSS", rating : 3}
  ,{skills:"JMeter", rating : 4}
]

  function giveRating(count, text){
  let p = document.createElement("p");
  let div = document.createElement("div");
  let textNode = document.createTextNode(text);
  p.appendChild(textNode);
  p.appendChild(div);
  for(let a = 0; a<5;a++){
  let childDiv1 = document.createElement("img");
  if(count<=a){
    childDiv1.setAttribute("src","/whitestar.png");
  }
  else{
  childDiv1.setAttribute("src","/bluestar.png");
  }
  div.appendChild(childDiv1);
  document.querySelector('#star').appendChild(p);  
}
}

function addImage(){
    for(let a = 0; a<data.length;a++){
      giveRating(data[a].rating, data[a].skills)
    }
  }
  
  
window.onload = addImage();