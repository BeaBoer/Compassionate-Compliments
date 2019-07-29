var button= $('.button');
var paragraph =$('.paragraph');

var quotes = ["You should see how many people smile when they talk to you!","You are the best version of yourself you could be!","You are making a difference!","Actions speak loader than words and yours tell an incredible story!","If you were a box of crayons, you'd be the giant name brand one with the built in sharpener!","You are appreciated!","You're a rainbow on a cloudy day!","You're inspiring!","You could survive a Zombie apocalypse!"];

button.on("click",comCom)

function comCom(){
  // event.preventDefault();
  var randomDec =  Math.random()
  var random = randomDec * 9;
  var final = Math.floor(random);
  console.log(quotes[final]);
  paragraph.text(quotes[final]);
  // console.log(quotes[final]);
  // var print = return quotes[final];
  // paragraph.text=  quotes[final];
  // paragraph.text(quotes[final]);

  // document.getElementById("par").innerHTML = comp[final];

}
//  par.text(`${comp[final]}`);
