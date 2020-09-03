
var date = new Date("2020-09-10");

document.getElementById("weekNumber").innerHTML = (getWeekOfTheMonth(date));

function getWeekOfTheMonth(date) {

    //getDay() renvoi le numero entre [0 1 2 3 4 5 6] (De Dimanche 0 à Samedi 6) du jour du mois de l'année actuelle (Ici c'est le numero 4 "JEUDI")
    //getDate() renvoi le jour (ici c'est le 03) 
    //On doit ajuster la date en faisant cette addition
    let adjDate = date.getDate()+date.getDay(); //=> resultat 7

    console.log('DATE => ', date.getDay());


    let pref = ['0', '1', '2', '3', '4', '5'];

    return (parseInt(pref[0 | adjDate / 7]));

}