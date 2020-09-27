function generate(){
    var out = "";

    var xsize = 20;
    var ysize = 38;

    for (var x = 0; x <= xsize; x++){
        out += "<tr>";

        for (var y = 0; y <= ysize; y++){
            out += "<td id='" + String(x) + "," + String(y) + "', class='up', onmousedown='press(this);'></td>";
        }

        out += "</tr>";
    }

    return out;
}