window.onload=function (){
    var slides=document.getElementById('slides');
    var style=getComputedStyle(slides);
    var direction='left';
    function slider(){
        marginLeft=parseInt(style.marginLeft);
        if(direction==='left'){ 
            if(slides.style.marginLeft!=='-1600px'){
                slides.style.marginLeft=marginLeft-800+'px';
            }else{
                slides.style.marginLeft=marginLeft-800+'px';
                direction='right';
            }
        }else if(slides.style.marginLeft!=='-800px'){
            slides.style.marginLeft=marginLeft+800+'px';
        }else{
            slides.style.marginLeft=marginLeft+800+'px';
            direction='left';
        }
    }
    setInterval(slider,2000);
};