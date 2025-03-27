function DarkPage() {
    // document.writeln('Hej')
    // document.writeln('....')
    document.body.style  = "background: #000; color: #FFF;";  
    document.querySelector("h1").style = "font-size: 100px"  
}
function WhitePage() {

    document.body.style  = "background: #FFF; color: #000;";   
    document.querySelector("h1").style = "font-size: 50px"   
}


function KonstigRubrik() {

    document.querySelector("h1").style = "font-size:100px;text-transofrm:lowercase;text-shadow: 5px 5px 5px yellowgreen;background: khaki;";   
}
function Gömlåt() {
    document.querySelector("p").style = "visibility: hidden";
}
function Visalåt() {
    document.querySelector("p").style = "visibility: visible";
}