import React from "react";
import Parser from 'html-react-parser';
import './about.less';
import $ from 'jquery';
import {connect} from 'react-redux';
import {TweenLite, Power3} from "gsap/all";


class About extends React.Component {
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
    TweenLite.to(window, .5, {delay:0, ease: Power2.easeOut, scrollTo:0});
    //
    this.initValues();
  }

  initValues(){
    $('.aboutSection').css('opacity',0);
    $('.aboutSection').css('top','25px');
    
    TweenLite.to($('.aboutSection'), 1, {delay:.3, ease: Power2.easeOut, top:0,opacity:1});
  }

  render() {

    return (
      <div className="aboutSection">
      {Parser(this.props.body[0].copy)}
      </div>
    );
  }
}
 
const mapStateToProps = (state) =>{
  return{
    body: state.about.body
  }
}

export default connect(mapStateToProps)(About);