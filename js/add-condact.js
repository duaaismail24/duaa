'use strict';
alert("write your name");
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
      compliment = 'Hello Friend!';
    } else if (frenchLevel =0) {
      compliment = 'comme on!';
    } else {
      compliment = 'come on!!';
    }
  
    document.write('<h3>' + compliment + ' ' + name + '</h3>');
  } 

WriteLevl();

// function compliment(){
// Ask the user for the language level
var level = prompt("beginner or fluent?");
while(level != "beginner" && level != "fluent"){
  level = prompt("wrong answer! beginner or fluent?");
}

// Get the picture source
var imageSource;
if (level === "beginner"){
  imageSource = 'https://www.thoughtco.com/learn-french-french-for-beginners-1369365';
}else if (level==="fluent"){
  imageSource = 'images/hotel.png';
}
// ask the user for number of courses
var numOfICourses = prompt("How much courses you want to get?");
// Validate the number of courses
while(numOfICourses=='' || isNaN(numOfICourses)){
  numOfICourses = prompt("Wrong answer! How mauch course you want to get?");
}
// Build the <img> element to add it to the page
var imgElement = '<img src="'+imageSource+'"/>';
// make a loop to repeat the courses
for (var i=0; i<numOfICourses; i+=1){
  document.write(imgElement)
}