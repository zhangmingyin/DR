(function(){
    var leftbtn=document.getElementsByClassName('left')[0];
    var rightbtn=document.getElementsByClassName('right')[0];
    var ul=document.getElementsByClassName('slideUL')[0];
    var i=4;
    leftbtn.onclick=function(){
        if(i>=0){
            console.log("asd")
            ul.style.marginLeft=-461*i+'px'
            if(i>0)
                i--;
        }
    }
    rightbtn.onclick=function(){
        if(i<=5){
            if(i<5)
                ++i;
            ul.style.marginLeft=-461*i+'px'
        }
    }
})()