'use strict';
var complimenting = function(){
var language;
language = prompt("Do you like French ? 0-10");
var name;
name = prompt('what is your name');
var compliment;

if (language == "french") {
compliment = "You Are welcome";
} else {
compliment = "go out!!";
}

}
function WriteLevl(){
   var frenchLevel;
   frenchLevel = prompt('what is your level in French? 0-10');
    var name;
    name = prompt('What`s your name?')
    var compliment;
  
    if (frenchLevel > 5 && frenchLevel<=10  ) {
      compliment = 'Hello smart!';
    } else if (frenchLevel > 5 && frenchLevel<=5) {
      compliment = 'Good afternoon!';
    } else if (frenchLevel =0) {
      compliment = 'comme on!';
    } else {
      compliment = 'Please eneter a valid number';
    }
  
    document.write('<h3>' + compliment + ' ' + name + '</h3>');
  } 

WriteLevl();
