console.log("hello homework3");

function stringToInt(input){
   return parseInt(input);
}

function maskNumber(input){
   var mask_number = "";
   for(var i=0; i<input.length; i++){
      if (i<7)
      {
         mask_number += input[i];
      }
      else 
      {
         mask_number += "*";
      }
      
   }
   return mask_number;
}

function getAverage(input_array){
   var sum = 0;
   var len = input_array.length;
   for(var i=0; i < len; i++)
   {
      sum += input_array[i];
   }
   var avg = sum/(len);

   return avg;
}


function isMultipleSeven(input){
   if(input%7 == 0)
   {
      return true;
   }
   else
   {
      return false;
   }
}

function operation(type, num1, num2){
   if (type=="add")
   {
      return num1+num2;
   }
   else if (type=="substract")
   {
      return num1-num2;
   }
   else if (type=="multiply")
   {
      return num1*num2;
   }
   else if (type=="divide")
   {
      return num1/num2;
   }
   else{
      console.log("Not Supported");
   }
}

function triangleMtn(input)
{
   var star="";
   for(var i=0; i<input;i++)
   {
      for (var j=0; j<i+1; j++)
      { star+="*";}
      console.log(star);
      star = "";
   }
   return;
}
