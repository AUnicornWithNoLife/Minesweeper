$(document).ready(function(){
    var boardata = generate();

    $("#board").html(boardata);

    console.log(boardata);

    $("#gen").click(function(){
        var boardata = generate();

        $("#board").html(boardata);

        console.log(boardata);
    });
});

/*function press(id){
    var idd = "#" + id.id;

    var clas = id.className;

    $(idd).attr("class", "tttt");

    console.log(idd);
    console.log(clas);

    if (clas == "down"){
        clas = "up";
    }else{
        clas = "down";
    }

    $(idd).addClass(clas);
    //$(idd).removeClass(id.className);
}*/