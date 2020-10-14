var len=document.getElementsByClassName("month-price").length;
var annual_pri= document.getElementsByClassName("annual-price");
function slideChange(){
    if(annual_pri[0].style.display==="block")
    {
        for(i=0;i<len;i++)
        {
            document.getElementsByClassName("annual-price")[i].style.display="none";
            document.getElementsByClassName("month-price")[i].style.display="block";
        }
    }
    else{
        for(i=0;i<len;i++)
        {
            document.getElementsByClassName("month-price")[i].style.display="none";
            document.getElementsByClassName("annual-price")[i].style.display="block";

        }   
    }
}