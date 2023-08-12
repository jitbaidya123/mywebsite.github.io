import React from 'react'

const footer = () => {

const footerLinks = (element)=>{


}


  return (
    <>
  < footer>
  <h1> Let's
    <br />
    #ConnectOnCutting


  </h1>
  
  <aside>
 <a href="/" className='footerLinks' onMouseOver={()=>footerLinks(0)}>
Home
 </a>
 <a href="/story" className='footerLinks' onMouseOver={()=>footerLinks(1)}>
Story
 </a>
 <a href="/media" className='footerLinks' onMouseOver={()=>footerLinks(2)}>
Media
 </a>
 <a href="/franchise" className='footerLinks' onMouseOver={()=>footerLinks(3)}>
Franchise
 </a>
 <a href="/events" className='footerLinks' onMouseOver={()=>footerLinks(4)}>
Events
 </a>
 <a href="/chaiwalacares" className='footerLinks' onMouseOver={()=>footerLinks(5)}>
Chai Wala Cares
 </a>
  </aside>

  <div>
<h5>Email</h5>
<a href="mail: jit.baidya@yahoo.com">jit.baidya@yahoo.com</a>

</div>

<div>
<h5>Phone</h5>
<a href="tel:8777389936">+918777389936</a>

</div>
<p>© COPYRIGHT 2023</p>
  </footer>
<div className='footer'></div>
  </>
  );
};

export default footer