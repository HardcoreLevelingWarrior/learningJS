//requirments for building frameworks and libraries
//greetr framework

//structuring safe code 
//create a new executio context for our entire greetr library
(function ( global , jQuery) {

    

    greetr = function (firstName , lastName , language) {
        // this function returns a function constructor to generate the object 
        return new greetr.init(firstName , lastName , language) ;
    }


    //declaring a variable and setting it up that is never exposed anywhere(outside the function)
    var supportedLangs = ['en' , 'es'];
    //no developers can mutate these data but they can get access to it ...
    var greetings = {
        en : "Hello" ,
        es : "Hola"
    };
    //if I want to other developers to mutate my variables I have to expose these variables to them
    var formalGreetings = {
        en : "Greetings" ,
        es : "Saludos"
    };
    
    //add an option to log whenever this greetings get used or called
    var logMessages = {
        en : "Logged in" , 
        es : "Inicio sesion"
    }


    //setting the prototype of the object thats being returned from the function
    greetr.prototype = {
        
        //lets add something that will be exposed inside this prototype object
        fullName : function() {
            return this.firstName + " " + this.lastName ;
        },

        //declare a method that validates if the function is supported 
        validate : function() {
            if(supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid lang";
                //a simple way to throw an error in javaScript
            }
        },

        greeting : function() {
            return greetings[this.language] + " " +this.firstname + " !";
        },

        formalGreeting : function() {
            return formalGreetings[this.language] + "," + this.fullName();
        },

        //adding some chainable methods to the prototype of this function constructor
        greet : function(formal) {
            var msg ;
            
            //if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            }else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg) ;
            }
            //'this' refers to the calling object at the execution time
            //makes the method chainable
            return this ;
        },

        //manually make sure that something is logged 
        log : function() {
            if(console) {
                console.log(logMessages[this.language] + " : " + this.fullName());
            }
            return this;
        },
        setLang : function(Lang) {
            this.language = Lang ;
            //dont fuck it up
            this.validate();
            
            return this;
        }
        

    } ;
    
    //set up my object , build my object (my function constructor)
    greetr.init = function (firstName , lastName , language) {
        //set up this variable to a variable
        var self = this ;
        //set up the parameters as properties & defafult values
        self.firstName = firstName || '' ;
        self.lastName = lastName || '' ;
        self.language = language || 'en' ;

    }
 
    //the object thats being created needs to point to greet.init prototype
    greetr.init.prototype = greetr.prototype ;

    //to expose our greetr to the outside world, attach it to our global object
    global.$G = global.greetr = greetr ;

}(window , jQuery));
