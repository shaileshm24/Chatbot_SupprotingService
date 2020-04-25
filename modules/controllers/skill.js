export const getSkill = (data) => {

  try{
 
    const userData = [{"email":"shailesh@gmail.com","skill":"Python"},{"email":"abc@gmail.com","skill":"NodeJs"},{"email":"pqr@gmail.com","skill":"DotNet"}];
 
    var result = userData.filter(function(item){
    console.log(data);
    return item.email == data;
  });
  var temp = JSON.stringify(result);
  var skill = temp.substring(1,temp.length-1);
  var JSONobject = JSON.parse(skill);
   return JSONobject;
  } 
  catch (error) {
    console.log(error);
    return "user not found";
  }
}

