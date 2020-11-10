function dateTime()
{
    var today = new Date();

    var day = today.getDate();
    var mounth = today.getMonth()+1;
    var year = today.getFullYear();

    var hour = today.getHours();
    if (hour<10) hour = "0"+hour;
    var minute = today.getMinutes();
    if (minute<10) minute = "0"+minute;
    var second = today.getSeconds();
    if (second<10) second = "0"+second;

    document.getElementById("watch").innerHTML = hour+":"+ minute+":"+second+"<br>"+"|"+day+"/"+mounth+"/"+year
    +"| ";

    setTimeout("dateTime();",1000);

}