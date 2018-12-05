import React from "react";
import './brands.less';
import $ from 'jquery';
import Parser from 'html-react-parser';
import {connect} from 'react-redux';
import {TweenLite,  Power3} from "gsap/all";
import { Router, Redirect } from "@reach/router"; 


class Brands extends React.Component {
  constructor(props) {
    super(props);
    //Extra the project from the ID
    var workLength = this.props.work.length;
    var i = 0;
    var workObj;
    //
    for (i; i<workLength; i++){
      if(this.props.work[i].brandName === this.props.id){
        workObj = this.props.work[i];
        break;
      }
    }
    //
    this.state = {
        brand:workObj
    };
  }
  componentDidMount() {
    var bdy = $('body');
    if(this.state.brand!= undefined){
      var bgColor = this.state.brand.bgColor;
      TweenLite.to( bdy, 1.5, { backgroundColor:bgColor, ease:Power3.easeOut});
    }
    //Scroll Back to top
    TweenLite.to(window, .5, {delay:0, ease: Power2.easeOut, scrollTo:0});
    //
    this.initValues();
  }

  initValues(){
    $(".mainImage").css('top','25px');
    $(".mainImage").css('opacity','0');
    //
    $(".vidHolder").css('top','25px');
    $(".vidHolder").css('opacity','0');
    //
    $(".bodyCopy").css('top','25px');
    $(".bodyCopy").css('opacity','0');
    //
    $(".highlights").css('opacity','0');

    this.buildAnimation();
  }

  buildAnimation = (d = 0) => {
    //
    TweenLite.to( $(".mainImage"), 1, {delay:d, css:{top:"0", opacity:1 }, ease:Power3.easeOut});
    TweenLite.to( $(".bodyCopy"), 1, {delay:d+.25, css:{top:"0", opacity:1 }, ease:Power3.easeOut});
    TweenLite.to( $(".highlights"), 1, {delay:d+.5, css:{ opacity:1 }, ease:Power3.easeOut});
    if(this.state.brand.hasVideo){
      TweenLite.to( $(".vidHolder"), 1, {delay:d+.75, css:{top:"0", opacity:1 }, ease:Power3.easeOut});
    }
  
  }
  render() {
    
      const itemsToRender = () => {
      if(this.state.brand!= undefined){
        const mainImg =
        <div className="mainImage">
          <div className="skewPanel">
            <div className="unskewPanel">
              <img src={this.state.brand.imageURL} alt={this.state.brand.title} />
            </div>
          </div>
        </div>;
        //
        const video =
        <div className="vidHolder">
          {Parser(this.state.brand.vidURL)}
        </div>;
        //
        const bodyCopy =
        <div className="bodyCopy skew">
        <h2>OVERVIEW - {this.state.brand.title}</h2>
          <div className="unskew">
            <div className="body-midFloat">
              {Parser(this.state.brand.description)}
            </div>
          </div>
        </div>;
        //
        const highlights =
        <div className="highlights unskew">
        <h2>HIGHLIGHTS</h2>
          <div className="skew">
            <div className="body-midFloat">
              {Parser(this.state.brand.highlights)}
            </div>
          </div>
        </div>;
        //
        if(this.state.brand.hasVideo){
          return (
          <div className='brandWrapper'>
            {mainImg}
            {bodyCopy}
            {highlights}
            {video}
          </div>
          );
        } else {
          return(
          <div className='brandWrapper'>
            {mainImg}
            {bodyCopy}
            {highlights}
          </div>
          );
        }
      } else {
        return(<Redirect to="/work" />);
      }
    }
    //
    return (
      <div>
        {itemsToRender()}
      </div>
    );
  }
}
 
const mapStateToProps = (state) => {
  return{
    work: state.work.brand
  }
}

export default connect(mapStateToProps)(Brands);
