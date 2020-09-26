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

function press(id){
    console.log(id.id);
}