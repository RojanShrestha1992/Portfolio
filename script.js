 window.onscroll = function() {scrollFunction()};
        
        var navbar = document.getElementById("head");
        
        var stick = navbar.offsetTop;
        
        function scrollFunction(){
if(window.pageYOffset >= stick){
navbar.classList.add("stick");
}
            else{
navbar.classList.remove("stick");
            }
        }
        
        
        
        
        
        
        
        
////Menu-btn
//        var navbar = document.getElementById("nav-bar");
//        var menubtn =document.getElementById("menu-btn-id");
//        var closebtn = document.getElementById("close-btn-id");
//        
//        
//        function openBar(){
//                navbar.style.left= "0";
//            menubtn.style.display = "none";
//            closebtn.style.display = "block";
//}
//        function closeBar(){
//             navbar.style.left= "-100%";
//            menubtn.style.display = "block";
////            closebtn.style.display = "block";
//        }
    

var nav = document.getElementById("nav-bar");
var menubtn = document.getElementById("menu-btn-id");
var closebtn = document.getElementById("close-btn-id");


function openBar(){
    nav.style.left = "0";
    menubtn.style.display= "none";
    closebtn.style.display = "block";
}
function closeBar(){
    nav.style.left = "-100%";
    menubtn.style.display = "block";
    closebtn.style.display = "none";
    
    
}






        
        