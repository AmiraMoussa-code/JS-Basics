document.getElementById("validate").onclick = function(a,b){
    var shoeSize= document.getElementById("shoe_size").value;
    var dof = document.getElementById("year").value;

    var game = [(shoeSize * 2) + 5 ] * 50;
    game -= dof;
    game += 1766;

    alert(game);
}