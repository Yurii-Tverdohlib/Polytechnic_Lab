var data = {
  "items": [
    { "img": "css/au.jpg",
      "by": "on Fashion News / by Jolia",
      "date": "12-11-2014",
      "text1": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
      "img": "css/au.jpg",
     "by": "on Technoloy News / by Deo",
      "date": "12-11-2014",
      "text1": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
       {
      "img": "css/au.jpg",
     "by": "on Fashion New / by Jolia",
      "date": "12-11-2014",
      "text1": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
      },
 ]
}
        var output="<div>";
        var i = 0;
        while(data.items.length - i > 1){
          i++;
        }
        for (i; i<data.items.length; i++) {
            output+="<div class=text1>";
            output+="<img src="+data.items[i].img+" class=iimg>"  + "</img>";
            output+="<div class=classtext>";
            output+="<span class=span1>" + data.items[i].by + "</span>" + "<br>";
            output+="<span class=span2>"+ data.items[i].date + "</span>"+ "<br>";
            output+="<span class=span3>" + data.items[i].text1 + "</span>";
            output+="</div>";
            output+="</div>";
          }
          output+="</div>";
        document.getElementById("box").innerHTML=output;
