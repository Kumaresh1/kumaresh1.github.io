import React from 'react'
import '../css/index.css'



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.backgroundColor = "white";
   
  } else {
   // document.getElementById("navbar").style.background = " linear-gradient(to right, #6a3093, #a044ff)";
  
   document.getElementById("navbar").style.backgroundColor = "white";
   

  
  }
}

function togglefunc(){
  // console.log(document.getElementById("p-im-g"));
  
  
    let temp=document.getElementsByClassName("ins")[0];
    var set,set1;
    //console.log(temp.style.display,"te")
    if(temp.style.display!=="none"){

      set="none";
      set1="none"
      document.getElementById("baricon").classList.remove("fa-close");
      document.getElementById("baricon").classList.add("fa-bars");


    }else{

      set="block";
      set1="unset";
      document.getElementById("baricon").classList.remove("fa-bars");
      document.getElementById("baricon").classList.add("fa-close");

    }

    
    for(let i=0;i<4;i++){
      document.getElementsByClassName("m-l")[i].style.display=set;
    
    }
    document.getElementsByClassName("ins")[0].style.display=set1;

    document.getElementsByClassName("s-ln")[0].style.display=set1;
    document.getElementsByClassName("s-ln")[1].style.display=set1;
  
  //console.log(document.getElementsByClassName("m-l")[0])
  
   
}

export default function Topnav() {
    return (
        <div className="f-x">


<div className="topnav" id="navbar">

<div  className="logo">
<a  href="#home">
<i className="fa fa-code">

</i>
KUMARESH 

</a>

</div>
<p className="quote">I'm not clever, I'm just curious.
</p>
<p  className="icon" onClick={togglefunc} >
    <i className="fa fa-bars" id="baricon"></i>

  </p>
  <a href="#home" className="m-l" id="d-f" >HOME</a>
  <a href="#projects" className="m-l">PROJECTS</a>
  <a href="#contact" className="m-l">CONTACT</a>
  <a href="#about" className="m-l">ABOUT</a>
  

<a className="ins" href="https://www.instagram.com/ascent_web_solutions/">
<i className="fa fa-instagram"></i>
</a>
<a className="s-ln"  href="https://twitter.com/kumaresh_12?ref_src=twsrc%5Etfw">
<i className="fa fa-twitter"></i>
</a>
<a className="s-ln"  href="https://www.linkedin.com/in/kumaresh12/">
<i className="fa fa-linkedin"></i>
</a>
</div>

<hr/>
            
        </div>
    )
}
