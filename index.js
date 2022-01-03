var users=[
    {  id:1 ,name:"ali" , family:"zahrai", age:12, email:"z.@gmail.com"},
    {  id:2 ,name:"hasan" , family:"zahrai", age:12, email:"h.@gmail.com"},
    {  id:3 ,name:"khalil" , family:"zahrai", age:12, email:"k.@gmail.com"}

]

var username=prompt("eneter name") ;
var userage=prompt("eneter age");
 var userfamily=prompt("eneter family");
  var useremail=prompt("eneter email");

   if(username.length<3 || username.length>10){
       alert("نام شما حداقل 3 و حداکثر 10 کاراکتر میتواند داشته باشد")
   }
   else if(userfamily.length<3 || userfamily.length>15){
    alert("نام خانوادگی  شما حداقل 3 و حداکثر 15 کاراکتر میتواند داشته باشد")}

   else if(isNaN(userage)|| userage.length>3){
        alert("لطفا به درستی سن را وارد کنید")
   }
   else{
       var newuser={
           id:4,
        name:username,
        age:userage,
        family:userfamily,
         email:userfamily
       }
        users.push(newuser);
         console.log(users)
   }