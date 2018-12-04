import React from "react";
import './contact.less';
import $ from 'jquery';
import {TweenLite, Power3} from "gsap/all";

import linkedIcon from '../images/linkedin_icon.png';
import twitterIcon from '../images/twitter_icon.png';
import instaIcon from '../images/insta_icon.png';
import mailIcon from '../images/mail_icon.png';


class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        //
    };
  }
  componentDidMount() {
    var bdy = $('body');
    var bgColor = "#013e5f";
    TweenLite.to( bdy, 1.5, { backgroundColor:bgColor, ease:Power3.easeOut});
    //Scroll Back to top
    TweenLite.to(window, .5, {delay:0, ease: Power3.easeOut, scrollTo:0});
    //
    this.initValues();
  }

  initValues(){
    $('.contactSection').css('opacity',0);
    $('.contactSection').css('top','25px');
    $('.iconDiv').css('opacity',0);
    
    TweenLite.to($('.contactSection'), 1, {delay:.3, ease: Power3.easeOut, top:0,opacity:1});
    TweenLite.to($('#linkedin'), 1.5, {delay:.5, ease: Power3.easeOut, opacity:1});
    TweenLite.to($('#twitter'), 1.5, {delay:.7, ease: Power3.easeOut, opacity:1});
    TweenLite.to($('#instagram'), 1.5, {delay:.9, ease: Power3.easeOut, opacity:1});
    TweenLite.to($('#gmail'), 1.5, {delay:1.1, ease: Power3.easeOut, opacity:1});
  }

  render() {

    return (
      <div className="contactSection">
        <div id="contact-icons-holder">
          <h1>A few ways to reach out ...</h1>
          <div className="icon-spacer">
          <a href="https://www.linkedin.com/in/jacobbondre" target="_blank"><div id="linkedin" className='iconDiv'><img src={linkedIcon} alt="linked in is the best way to reach me for business" /></div></a>
          <a href="https://twitter.com/jbondre" target="_blank"><div id="twitter" className='iconDiv'><img src={twitterIcon} alt="I will occationally rant on twitter" /></div></a>
          <a href="https://www.instagram.com/jacoubbondre/" target="_blank"><div id="instagram" className='iconDiv'><img src={instaIcon} alt="Anything from proferssional work to shots of the kids" /></div></a>
          <a href="mailto:jacob.bondre@gmail.com"><div id="gmail" className='iconDiv'><img src={mailIcon} alt="Try to get through that spam filter!" /></div></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;