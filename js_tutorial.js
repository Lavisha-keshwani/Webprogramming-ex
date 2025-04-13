//Primitive types

let x="lavisha";
console.log(x);
console.log(typeof(x));
let y=1;
console.log(y);
console.log(y);

//Objects

let course={
    title:"DDLJ",
    description:"projects",
    rating:5
};

console.log(course);
console.log(typeof(course));
console.log(course.title);
console.log(course['rating']);

//Arrays
//Arrays are objects

let cou=['lavi','anokhu',2,true,null,'golu'];
console.log(cou[0]);
console.log(cou[1]);
console.log(cou[2]);
console.log(cou[3]);
console.log(cou[4]);
console.log(cou[5]);
console.log(cou);
console.log(typeof(cou));

//Functions

function createcourse(coursename)
{
    console.log('creating '+coursename);
}
createcourse('dsa');
createcourse('java');

//this and window are the same

console.log(a);
console.log(this.a);
console.log(windpow.a);

var a=10;

console.log(a);
console.log(this.a);
console.log(windpow.a);
console.log(window);
console.log(this===window);







