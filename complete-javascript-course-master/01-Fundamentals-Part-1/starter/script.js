
var arr = ["amir",
    true,
    function (name, lastname, nationality) {
        console.log(`hi i'm ${arr[0]}`);
        console.log(arguments);
    }]
console.log(arr[2]);
arr[2];
console.log("-------------");
arr[2]();

