import React from "react";
import './panelButton.less';
import Parser from 'html-react-parser';
import $ from 'jquery';
import {TweenLite,  Power3} from "gsap/all";
import {Link} from '@reach/router';


class panelButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        buildDone:false
    };
  }
  componentDidMount() {
   //
   
   //console.log(this);
   this.initValues()
  }

  initValues(){
    $(".navRule").css('width','0vw');
    $(".navRule").css('opacity','0');
    $(".tagLine").css('top','10px');
    $(".tagLine").css('opacity','0');
    $(".navBtnHeader").css('top','50px');
    $(".navBtnHeader").css('opacity','0');
    $(".skewBackground").css('height','0vh');
    //

  }

  buildAnimation  = (d) => {
    var _this = this;
    var skewBack = $( "#"+ this.props.panelID ).find( ".skewBackground" );
    var navBtnHeader = $( "#"+ this.props.panelID ).find( ".navBtnHeader" );
    TweenLite.to( skewBack, 1.5, {delay:d, css:{height:"150%"}, ease:Power3.easeOut});
    TweenLite.to( navBtnHeader, 1.5, {delay:d+.75, css:{top:"20px", opacity:1 }, ease:Power3.easeOut, onComplete:_this.buildDone});
  }

  buildDone = () =>{
    this.setState(
      {buildDone:true}
    );
  }

  rollOverAnimation = (d) =>{
    if(this.state.buildDone){
      var tagLength = 0;
      if($(window).innerWidth() >= 768 ){
        tagLength = 3;
      } else {
        tagLength = 7;
      }
      var tagLineCopy = $( "#"+ this.props.panelID ).find( ".tagLine" );
      var underRule = $( "#"+ this.props.panelID ).find( ".navRule" );
      var navBtnHeader = $( "#"+ this.props.panelID ).find( ".navBtnHeader" );
      //
      TweenLite.to( navBtnHeader, 1, {delay:d, css:{top:"0px" }, ease:Power3.easeOut});
      TweenLite.to( tagLineCopy, 1, {delay:d, css:{top:"0", opacity:1 }, ease:Power3.easeOut});
      TweenLite.to( underRule, 1, {delay:d, css:{top:"0px",width:(tagLength+"vw"), opacity:1 }, ease:Power3.easeOut});
    }
  }

  rollOutAnimation = (d) =>{
    var tagLineCopy = $( "#"+ this.props.panelID ).find( ".tagLine" );
    var underRule = $( "#"+ this.props.panelID ).find( ".navRule" );
    var navBtnHeader = $( "#"+ this.props.panelID ).find( ".navBtnHeader" );
    //
    TweenLite.to( navBtnHeader, 1, {delay:d, css:{top:"20px" }, ease:Power3.easeOut});
    TweenLite.to( tagLineCopy, 1, {delay:d, css:{top:"10px", opacity:0 }, ease:Power3.easeOut});
    TweenLite.to( underRule, 1, {delay:d, css:{top:"10px", width:"0vw", opacity:0 }, ease:Power3.easeOut});
  }

  render() {
    //skewPanel is the outer container that is skewed
    //unskew sets everything straight again.
    //Panel Back is the background color, I want that to scale independantly
    return (
      <Link to={ this.props.panelID.toLowerCase() }>
      <div id={ this.props.panelID } className="panelBtn skewPanel" onMouseOver={this.rollOverAnimation} onMouseOut={this.rollOutAnimation}>
        <div className="unskewPanel">
          <div className="skewBackground"></div>
          <div className="navBtn">
            <h2 className="navBtnHeader">{ Parser(this.props.title) }</h2>
            <hr align="left" className="navRule" />
            <p className='tagLine'>{ this.props.tagLine }</p>
          </div>
        </div>
      </div>
      </Link>
    );
  }
}

export default panelButton;
