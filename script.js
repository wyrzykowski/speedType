"use strict";

window.onkeydown = inputing;
var text="";
var first=true;
var input_for_work="";


	
var d;
var l;
var dl=0;
var minutesTime;
var ln;

var noww;
var time_sec=0;

var text_input_l;


function randomText(){
	
	
	
}

function start()
{
	//text ="Peel and rinse the potatoes. Cut each potato lengthwise into 4 or 5 pieces, then cut each piece into sticks. The thinner these are, the crispier they will be. Place the fries in a large bowl. Cover with cold water, then allow them to soak 2 or 3 hours (or you can stick them in the fridge and let them soak overnight).";
	
		$.getJSON("texts.json", dataReady);
		
}


function dataReady( data ) {
	var randedNum=Math.floor(Math.random() * 10) + 0;  //rand 0 to 10
	 text = data[randedNum];

		document.getElementById("text_for_input").innerHTML=text;
	}


function time_calc()
{
	
	noww = new Date();
	 ln = noww.getTime();
	minutesTime = ((ln-l)/1000)/60;
	time_sec = ln-l;
}

function msToTime(s,r) {
	  var ms = s % 1000;
	  s = (s - ms) / 1000;
	  var secs = s % 60;
	  s = (s - secs) / 60;
	  var mins = s % 60;
	  var hrs = (s - mins) / 60;
	  if(secs<10) secs= "0"+secs;
	  if(mins<10) mins= "0"+mins;
	  if(hrs<10) hrs= "0"+hrs;
	 var mili = Math.floor(ms/100);
	 if(mili<10) mili="0" + mili;
	  if(r==0)return hrs + ':' + mins + ':' + secs + '.' + mili;
	  else return   mins + ' minutes, ' + secs + ' seconds ';
	  
	}


function inputing()
{
	//Thhis variable heve to be here because of text which is declarated after start function and can't be global
	var text_l = text.length;// length of text_for_type
	var text_t = text.split(" "); // array of text splited by space
	var text_t_l = text_t.length; // the length of text_t array
	
	if(time_sec==0)
		{
		
		d = new Date();
		l = d.getTime();
		time_sec = 10;
		
		}
	 
	
	if((text_l)!=text_input_l)
		{
		setTimeout("time_calc()", 200);

		}
	else
		{
		document.getElementById("well_done").style.display="block";
		document.getElementById("well_done").innerHTML= "Well done! " +msToTime(time_sec,1) + " - "+ Math.floor((dl)/minutesTime) + " Words per minute";
		
		}

	
	
var input_txt = document.getElementById("inputer").value;
document.getElementById("inputer").style.color="green";


var len = input_txt.length;
var new_text = text.slice(0, len);
//document.getElementById("text_area").innerHTML=input_txt;//show sliced correct text it's a test
//testing="";
var display="";

if(new_text==input_txt){
	text_input_l= input_txt.length;
		var out;
		var input_for_work = text;
		var res = input_txt.split(" ");
		
		
		dl= res.length-1;		
		var n = 0;
		for(n=0;n<text_t_l;n++)
		{
		out=text_t[n];
		if(dl<=n){
	display+='<span id="good">' + text_t[n] +' </span>';
		}
		else if(n<0) n=0;
		else  display+='<span id="good1">' + text_t[n] +' </span>';
		document.getElementById("text_for_input").innerHTML= display;	
		
		}
		
		/*
		for(i=0;i<text_l;i++)
			{
			out=res[1];
			document.getElementById("text_for_input").innerHTML=out;		
			}
            document.getElementById("inputer").style.color="green";
		*/

		
}
else  document.getElementById("inputer").style.color="red";
document.getElementById("for_time").innerHTML = "Time: " +  msToTime(time_sec,0) ;
document.getElementById("speed").innerHTML="Speed: " + Math.floor((dl)/minutesTime) + " words/min";

/* testy
document.getElementById("test").innerHTML=(dl+1)/minutesTime + " dl:" + dl + " text_t_l: " +
text_t_l + "text_input_l:;"+ text_input_l+" text_l"+ text_l;
*/
if(text_l==text_input_l)
{
document.getElementById("good").style.color="#00FF00";

}



setTimeout("inputing()", 100);

}



