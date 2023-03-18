function test() {
    var num = parseInt(document.getElementById("numCard").value);
    var date = document.getElementById("dateCard").value;
    var mdp = parseInt(document.getElementById("mdpCard").value);

    if (num == 1111 && mdp == 333 && date == "09/24") {
        var value = parseInt(document.getElementById("amount").value);
        if(isNaN(value)){
            alert("Entrer une valeur");
        }else{myFunction(value);}
        
    } else {
        if ( num != 1111) {
            alert("revoir le Numero");
        }
        if (date != "09/24") {
            alert("revoir la date");
        }
        if ( mdp != 333) {
            alert("revoir le mot de passe");
        }
    }
}

var sect = document.getElementsByTagName("main");
var i = 0;
function myFunction(totals) {
    var newdiv = document.createElement("div");
    var p = document.createElement("p");
    var tab = [500, 200, 100, 50, 20, 10, 5, 1];

    if (totals == 0) {
        p.innerText = "";
        newdiv.appendChild(p);
        sect.appendChild(newdiv);
    }
    if (i <= 7) {
        if (totals >= tab[i]) {
            var s = Math.floor(totals / tab[i]);
            totals = totals % tab[i];

            p.innerText = `vous aurez besoin de ${s} billet de ${tab[i]}$`;
            newdiv.appendChild(p);
            sect[0].appendChild(newdiv).setAttribute("class", "div3");
        }
        i++;
        myFunction(totals);
    }
}


// function myFunction(totals) {
//     var newdiv = document.createElement("div");
//     var p = document.createElement("p");
//     var tab = [
//         {billet:500 ,nbr:0},
//         {billet:200 ,nbr:0},
//         {billet:100 ,nbr:0},
//         {billet:50 ,nbr:0},
//         {billet:20 ,nbr:0},
//         {billet:10 ,nbr:0},
//         {billet:5 ,nbr:0},
//         {billet:1 ,nbr:0},  
//     ];

//     if (totals == 0) {
//          p.innerText = "";
//          newdiv.appendChild(p);
//          sect.appendChild(newdiv);
//     }
//     if (i <= 7) {
//         if (totals >= tab[i].billet) {
//             tab[i].nbr = Math.round(totals /  tab[i].billet);
//             totals = totals %  tab[i].billet;
//             p.innerText = `vous aurez besoin de ${tab[i].nbr} billet de ${tab[i].billet}$`;
//             newdiv.appendChild(p);
//             sect[0].appendChild(newdiv);
//         }
//         i++;

//         myFunction(totals);


//     }
// }





// function myFunction2(total) {
//     var totalValue = total;
//     var billsnum = 0;
//     var tab = [500, 200, 100, 50, 20, 10, 5, 1];
//     while (totalValue != 0) {
//         if (totalValue / tab[i] >= 1) {
//             // s = totalValue / tab[i];
//             billsnum = (totalValue - (totalValue % tab[i])) / tab[i];
//             console.log("🚀 ~ file: js.js:68 ~ myFunction2 ~ billsnum:", billsnum, tab[i]);
//             totalValue = totalValue % tab[i];
//             console.log("🚀 ~ file: js.js:70 ~ myFunction2 ~ totalValue:", totalValue);
//             var newdiv = document.createElement("div");
//             var p = document.createElement("p");
//             p.innerText = `${billsnum}`;
//             newdiv.appendChild(p);
//             sect.appendChild(newdiv);
//         }
//         i++;
//     }
// }
//  function getMyMoney() {
//     var value = parseInt(document.getElementById("amount").value);
//     myFunction(value);
// }