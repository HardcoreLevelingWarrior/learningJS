//requirments for building frameworks and libraries
//greetr framework

//structuring safe code 
//create a new executio context for our entire greetr library
(function (global, $) {



    greetr = function (firstName, lastName, language) {
        // this function returns a function constructor to generate the object 
        return new greetr.init(firstName, lastName, language);
    }


    //declaring a variable and setting it up that is never exposed anywhere(outside the function)
    var supportedLangs = ['en', 'es'];
    //no developers can mutate these data but they can get access to it ...
    var greetings = {
        en: "Hello",
        es: "Hola"
    };
    //if I want to other developers to mutate my variables I have to expose these variables to them
    var formalGreetings = {
        en: "Greetings",
        es: "Saludos"
    };

    //add an option to log whenever this greetings get used or called
    var logMessages = {
        en: "Logged in",
        es: "Inicio sesion"
    }


    //setting the prototype of the object thats being returned from the function
    greetr.prototype = {

        //lets add something that will be exposed inside this prototype object
        fullName: function () {
            return this.firstName + " " + this.lastName;
        },

        //declare a method that validates if the function is supported 
        validate: function () {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid lang";
                //a simple way to throw an error in javaScript
            }
        },

        greeting: function () {
            return greetings[this.language] + " " + this.firstName + " !";
        },

        formalGreeting: function () {
            return formalGreetings[this.language] + "," + this.fullName();
        },

        //adding some chainable methods to the prototype of this function constructor
        greet: function (formal) {
            var msg;

            //if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }
            //'this' refers to the calling object at the execution time
            //makes the method chainable
            return this;
        },

        //manually make sure that something is logged 
        log: function () {
            if (console) {
                console.log(logMessages[this.language] + " : " + this.fullName());
            }
            return this;
        },
        setLang: function (Lang) {
            this.language = Lang;
            //dont fuck it up
            this.validate();

            return this;
        },
        HTMLGreeting: function (selector, formal) {
            //selector = takes a selector for jQuery

            //make sure to have jQuery
            if (!$) {
                throw "jQuery not loaded";
            }
            if (!selector) {
                throw "Missing jQuery selector";
            }

            var msg;

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            //setting the html to this greeting
            $(selector).html(msg);

            return this;
        }

    };

    //set up my object , build my object (my function constructor)
    greetr.init = function (firstName, lastName, language) {
        //set up this variable to a variable
        var self = this;
        //set up the parameters as properties & defafult values
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        //you have to call the validate when you initially create the object
        self.validate();

    }

    //the object thats being created needs to point to greet.init prototype
    greetr.init.prototype = greetr.prototype;

    //to expose our greetr to the outside world, attach it to our global object
    global.$G = global.greetr = greetr;

}(window, jQuery));


//don't forgot commenting
//helpful to explain what your intent is , how you are doing something becuase javaScript is so terse,(it does'nt hava a lot of explanatory in itself)


//reminder you have to come back to this a year later so you have to refigure out what you did

//SO COMMENT WHAT YOU ARE DOING, SO YOU CAN DOUBLE CHECK THE LOGIC AND THE FLOW OF WHAT YOU HAVE DONE , MAYBE YOU MISS SOMETHING



//if a library puts a semicolon before the immediately invoke function expression = a trick

//just in case there are some other code or library that maybe injected before the greetr.js that does'nt quite finish out its semicolons properly

; (function (global, $) {
    //putting semicolon make it more useful
})