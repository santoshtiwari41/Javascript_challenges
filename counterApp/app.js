count=0;
document.getElementById("increase").addEventListener('click',function()
{
    count++;
   document.getElementById("countt").innerHTML=count;
})
document.getElementById("decrease").addEventListener('click',function()
{
    count--;
   document.getElementById("countt").innerHTML=count;
})

if(count>0){
    document.getElementById("countt").style.color='red';

}
