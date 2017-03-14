window.onload=function (){
    var slides=document.getElementById('slides');
    var style=getComputedStyle(slides);
    var direction='left';
    function slider(){
        marginLeft=parseInt(style.marginLeft);
        if(direction==='left'){ 
            if(slides.style.marginLeft!=='-672px'){
                slides.style.marginLeft=marginLeft-336+'px';
            }else{
                slides.style.marginLeft=marginLeft-336+'px';
                direction='right';
            }
        }else if(slides.style.marginLeft!=='-336px'){
            slides.style.marginLeft=marginLeft+336+'px';
        }else{
            slides.style.marginLeft=marginLeft+336+'px';
            direction='left';
        }
    }
    setInterval(slider,2000);
};
