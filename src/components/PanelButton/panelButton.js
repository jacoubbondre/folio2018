import React from "react";
import './panelButton.less';
import Parser from 'html-react-parser';
import $ from 'jquery';
import {TweenLite, CSSPlugin, Power3} from "gsap/all";


class panelButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        //
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
    $(".navBtnHeader").css('top','10px');
    $(".navBtnHeader").css('opacity','0');
    $(".skewBackground").css('height','0vh');
    //

  }

  buildAnimation  (d) {
    var skewBack = $( "#"+ this.props.panelID ).find( ".skewBackground" );
    var navBtnHeader = $( "#"+ this.props.panelID ).find( ".navBtnHeader" );
    TweenLite.to( skewBack, 1.5, {delay:d, css:{height:"150%"}, ease:Power3.easeOut});
    TweenLite.to( navBtnHeader, 1.5, {delay:d+.75, css:{top:"0", opacity:1 }, ease:Power3.easeOut});
  }

  rollOverAnimation(d){
    var tagLineCopy = $( "#"+ this.props.panelID ).find( ".tagLine" );
    var underRule = $( "#"+ this.props.panelID ).find( ".navRule" );
    TweenLite.to( tagLineCopy, 1, {delay:d, css:{top:"0", opacity:1 }, ease:Power3.easeOut});
    TweenLite.to( underRule, .5, {delay:d, css:{width:"3vw", opacity:1 }, ease:Power3.easeOut});
  }

  rollOutAnimation(d){
    var tagLineCopy = $( "#"+ this.props.panelID ).find( ".tagLine" );
    var underRule = $( "#"+ this.props.panelID ).find( ".navRule" );
    TweenLite.to( tagLineCopy, 1, {delay:d, css:{top:"10px", opacity:0 }, ease:Power3.easeOut});
    TweenLite.to( underRule, .5, {delay:d, css:{width:"0vw", opacity:0 }, ease:Power3.easeOut});
  }

  render() {
    //skewPanel is the outer container that is skewed
    //unskew sets everything straight again.
    //Panel Back is the background color, I want that to scale independantly
    return (
      <div id={ this.props.panelID } className="panelBtn skewPanel">
        <div className="unskewPanel">
          <div className="skewBackground"></div>
          <button className="navBtn">
            <h2 className="navBtnHeader">{ Parser(this.props.title) }</h2>
            <hr className="navRule" />
            <p className='tagLine'>{ this.props.tagLine }</p>
          </button>
        </div>
      </div>
    );
  }
}

export default panelButton;
