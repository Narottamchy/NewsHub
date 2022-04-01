import React from 'react';
import newshub from "./newshublogo.png"
import insta from "./instagramlogo.png"
import facebook from "./facebooklogo.png"
import linkedin from "./linkedinlogo.png"
import twitter from "./twitterlogo.png"
import youtube from "./youtubelogo.png"
import spotify from "./spotifylogo.png"


export default function Footer() {
  return( <div>
      
<div className="postion-fixed-bottom" style={{backgroundColor:"#101010"}}>
        <div className="container my-3"><img src={newshub} alt="hello" height="70"/>        
        <div className="mx-1 my-1" style={{color:"white",fontSize:"0.14in"}}>CONNECT WITH US</div>
            <a className='mx-1' href="https://www.instagram.com/level_narc/" target="_blank" rel="noreferrer" ><img src={insta} alt="hello" height="30"/></a>
            <a className='mx-1' href="https://www.facebook.com/levelnarc/" target="_blank" rel="noreferrer"><img src={facebook} alt="hello" height="30"/></a>
            <a className='mx-1' href="https://twitter.com/LevelNarc" target="_blank" rel="noreferrer"><img src={twitter} alt="hello" height="30"/></a>
            <a className='mx-1' href="https://www.linkedin.com/in/narottamchy/" target="_blank" rel="noreferrer"><img src={linkedin} alt="hello" height="30"/></a>
            <a className='mx-1' href="https://www.youtube.com/channel/UCH_sklNKOOi2BoeETdp5WiQ" target="_blank" rel="noreferrer"><img src={youtube} alt="hello" height="30"/></a>
            <a className='mx-1' href="https://open.spotify.com/artist/3yVdv9VEwCtfH6X7gzwSgY?si=jlR18mlxSwSYv11VGtUNgg&nd=1" target="_blank" rel="noreferrer"><img src={spotify} alt="hello" height="30"/></a>
            <div className="mx-1 my-3" style={{color:"white",fontSize:"0.10in"}}>© 2022 NARC MUSIC PVT. LTD.</div>
        </div>
      </div>
    </div>);
}
