const Discord = require("discord.js");
const Canvas= require('canvas');
const bot = new Discord.Client();

var Request = require('pixl-request');


var Image = Canvas.Image;
var canvas = new Canvas(200, 200)
var ctx = canvas.getContext('2d')

const img = new Image();
var prof=new Image();

img.onload = () =>{
  console.log("n1");
    ctx.drawImage(img, 0, 0);}
 img.src = 'testes.jpg'

const prefix="/";
var token =  process.env.Discord_token ||  process.argv[2];;

bot.on('message', mes => {
var resu = mes.content.toLowerCase();
if(resu==prefix+"avatar"){
  mes.channel.send(`url de ton profile ${mes.author.displayAvatarURL}`)
}
if(resu==prefix+"hello"){

  mes.channel.send(`hello my frend ${mes.author.username}`);}
if(resu==prefix+"test"){

/*  prof.onload=()=>{console.log("load");
    ctx.drawImage(prof,100,50);
  }
  prof.src='  scontent-mrs1-1.xx.fbcdn.net/v/t1.0-9/30741644_846344895565309_8799480136496840704_n.jpg';

  let attachment = new Discord.Attachment(canvas.toBuffer());
 mes.channel.send(`test ${prof.src}`,attachment);*/

  var url =mes.author.displayAvatarURL ;
  var request = new Request();

  request.get( url, function(err, resp, data) {
  	if (err) throw err;
    let ctx2 = canvas.getContext('2d')
    ctx2=ctx;
    prof.onload=()=>{
      console.log("load");
        ctx.drawImage(prof,100,50,70,60);
      }
  	  prof.src = data;
      ctx.font = '60px Impact';
      ctx.rotate(0);
      ctx.fillText(mes.author.username, 100, 350);
      let attachment = new Discord.Attachment(canvas.toBuffer());
     mes.channel.send(`test ${prof.src}`,attachment);
     ctx=ctx2;
})

//------------------------------------------------------------------------------






//-----------------------------------------------------------------------------------




/*
// Création des dégradés
var lingrad = ctx.createLinearGradient(0,0,0,150); // dégradé linéaire
lingrad.addColorStop(0, '#00ABEB');
lingrad.addColorStop(0.5, '#fff');
lingrad.addColorStop(0.5, '#26C000');
lingrad.addColorStop(1, '#fff');

var lingrad2 = ctx.createLinearGradient(0,50,0,95);
lingrad2.addColorStop(0.5, '#000');
lingrad2.addColorStop(1, 'rgba(0,0,0,0)');

// assign gradients to fill and stroke styles
ctx.fillStyle = lingrad;
ctx.strokeStyle = lingrad2;

// draw shapes
ctx.fillRect(10,10,130,130);


*/





//pour cree un char
  /*ctx.font = '60px Impact';
  ctx.rotate(0);
  ctx.fillText(mes.author.username, 0, 100);

//pour charche une image dans ton fichier
/*  img.onload = () =>{
     ctx.drawImage(img, 0, 0);}
  img.onerror = err => { throw err }
  img.src = 'testes.jpg'*/




/*




  //pour cree un trai
  var te = ctx.measureText('station007');
ctx.strokeStyle = 'rgba(255,0,0,1)';
ctx.beginPath();
ctx.lineTo(0, 102);
ctx.lineTo(te.width, 102);
ctx.stroke();*/


}


});
bot.login(token);
