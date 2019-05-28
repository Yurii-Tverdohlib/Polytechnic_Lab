var data = {
  "items": [
    { "img": "css/au.jpg",
    },
    {
      "img": "css/au.jpg",
      },
       {
      "img": "css/au.jpg",
      },
 ]
}
        var output="<div id=container>";
        var i = 0;
        for (i; i<3; i++) {
	            output+="<div class=flex_start>";
	            for(var j = 0; j < 4; j++){
	            output+="<div class= >";
	             output+="<img src="+data.items[i].img+">"  + "</img>"
	            output+="</div>";
        	}
            output+="</div>";
          }
          output+="</div>";
        document.getElementById("box").innerHTML=output;