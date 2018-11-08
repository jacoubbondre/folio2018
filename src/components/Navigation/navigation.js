import React from "react";
import './navigation.less';
import $ from 'jquery';
import {TweenLite,  Power4} from "gsap/all";
import {Link} from '@reach/router';
//
import navImg from '../../images/navBtn.jpg';


class Navigation extends React.Component {
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
    $('header').css('opacity', 0);
    $('header').css('left', '-10vw');
    this.buildAnimation();
  }

  buildAnimation = (d=0) => {
    var _this = $('header');
    //
    TweenLite.to( _this, 1.5, {delay:d, css:{ left:0, opacity:1 }, ease:Power4.easeOut});
  
  }

  rollOverAnimation = (d=0) =>{
    
    //var thumbBorder = $( "#thumb"+this.props.buttonID ).find( ".skewPanel" );
    //TweenLite.to( thumbBorder, .5, {delay:d, css:{borderColor:"#fff" }, ease:Power3.easeOut});
    }

  rollOutAnimation = (d=0) =>{
    //var thumbBorder = $( "#thumb"+this.props.buttonID ).find( ".skewPanel" );
    //TweenLite.to( thumbBorder, .5, {delay:d, css:{borderColor:"#000" }, ease:Power3.easeOut});
  }

  render() {
    //skewPanel is the outer container that is skewed
    //unskew sets everything straight again.
    //Panel Back is the background color, I want that to scale independantly
    return (

      <header>
          <div id="SiteTitle" className="navBtn skewX">
            <div className="unskewX">
              <p className="title">Jacoub Alexander Bondre</p>
              <p className="subtitle">Creative . Technology . Strategy</p>
            </div>
          </div>
        <Link to='../'>
          <div id="Nav" className="navBtn skewX">
            <div className="unskewX"><img src={navImg} alt="navigation" /></div>
          </div>
        </Link>
      </header>
    );
  }
}

export default Navigation;
