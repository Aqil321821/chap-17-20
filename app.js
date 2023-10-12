//Q1. Declaration
    
/*

var students=[];   //using array literral notation
var students=new Array(); //using array object notation

*/

//Q2.Print on window array elements
/*
var qualifi=["SSC","HSC","BSC","BCOM","BSSE","BSCS"];
for(var i=0; i<qualifi.length; i++){
    document.write(`<h3>${qualifi[i]}</h3>`);
}
*/


//Q3.students and score and percentage
/*
var students=["Ghous","Zain","Aqil"];
var scores=[490,450,400];
for(var i=0;i<students.length;i++){
     var name=students[i];
     var num=scores[i];
     var per=(num/500)*100;

     document.write(`<h3>${name}'s score is ${num} and his percentage is ${per}</h3>\n`);

}
*/

//Q4.sort array

/*
var arr=[10,5,9,4,7,3];
var sorted=arr.sort();
document.write(sorted);
*/

//Q5.copy array elements into new one
/*
var cities=["Lahore","Karachi","Sukkur","Multan","Quetta"];
var copied=cities.slice(1,4);
document.write(copied);
*/



//Q6.joins all elements into a new string
/*
var arr1=["This","is","my","cat"];
var joined=arr1.join();//comma separeted
document.write(joined ,"</br>");
var joined2=arr1.join(" ");//space separted
document.write(joined2);
*/



























