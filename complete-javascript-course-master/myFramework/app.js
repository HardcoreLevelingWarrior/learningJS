
//gers a new object (the architecture allows us to not have to use the 'new' keyword here)
var g = $G("amir", "khatir");
console.log(g);

//use our chainable methods
g.greet().setLang("es").greet(true).log();



//we want to use jquery to add a click event to the login button
// when the button is clicked , it will set the greeting based on the language thats chosen


//usse our objecct on the click of the login button
$("#login").click(function () {

    var loginGrtr = $G("john", "Doe");

    //hide entire select and button
    $("#logindiv").hide();

    //need the value of select option
    loginGrtr.setLang($("#lang").val()).HTMLGreeting("#greeting", true).log();


});

//try to add another language to the greetr library , some methods ,some altred greetings
