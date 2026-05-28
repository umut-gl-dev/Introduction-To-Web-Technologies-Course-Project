window.onscroll = function(){
    let btn = document.getElementById('scrollTopBtn');
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        btn.style.opacity = "1";
        btn.style.pointerEvents = "auto";
    } else {
        btn.style.opacity = "0";
        btn.style.pointerEvents = "none";
    }
};

document.getElementById('scrollTopBtn').addEventListener("click", function(event){
    window.scrollTo({top:0});
});
