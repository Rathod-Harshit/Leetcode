
function add(n)
{
 return function addb(b){
   return function addc(a) {
     return a+b+n;
   }
 }
}

add(2)(11)(7);
