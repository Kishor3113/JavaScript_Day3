console.log("Grades");

let mark= prompt("Enter Marks",0);

if(mark >=40 && mark<60)
{
    console.log("B");
}
else if(mark >=60 && mark<75)
{
    console.log("A");
}
else if(mark >= 75)
{
    console.log("A++");
}
else{
    console.log("Fail");
}