document.getElementById("element").addEventListener("click", function(){
    let element = document.getElementById("element");
    let number = Math.random()*3 +1;
    number = Math.floor(number);
    element.classList.remove("translate");
    element.classList.remove("rotate");
    element.classList.remove("scale");
    if(number==1){
      element.className += " translate";
    }
    else if(number==2){
      element.className += " rotate";
    }
    else {
      element.className += " scale";
    }
 
  });