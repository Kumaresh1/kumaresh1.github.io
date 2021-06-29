import React from 'react'
import '../css/footer.css'

export default function footer() {
    return (
        <footer>

<h1>Got what you need? If not write me 
</h1>

<div >
    <form>
    <input type="text" className="inp" />
<span></span>
<input type="submit" className="sbtn"/>
    </form>
</div>


<div className="qlinks">

<p>HOME</p>
<p>CONTACT</p>
<p>ABOUT</p>
<p>PROJECTS</p>

</div>

<div></div>


<div className="social">
<a href="https://www.instagram.com/ascent_web_solutions/">
<p>
    <i className="fa fa-instagram"></i>
</p>
</a>

<a href="www.facebook.com">
<p>
    <i className="fa fa-facebook"></i>
</p>
</a>

<a href="https://twitter.com/kumaresh_12?ref_src=twsrc%5Etfw">
<p>
    <i className="fa fa-twitter"></i>
</p>
</a>

<a href="https://www.linkedin.com/in/kumaresh12/">
<p>
    <i className="fa fa-linkedin"></i>
</p>
</a>

<a href="https://github.com/Kumaresh1">
<p>
    <i className="fa fa-github"></i>
</p></a>
</div>







<div className="cp">
<p>© 2021 Kumaresh. All rights reserved.</p>

</div>
        </footer>
    )
}
