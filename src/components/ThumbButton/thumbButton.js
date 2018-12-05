import React from "react";
import './thumbButton.less';
import $ from 'jquery';
import {TweenLite,  Power3} from "gsap/all";
import {Link} from '@reach/router';


class thumbButton extends React.Component {
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
    $("#thumb"+this.props.buttonID).css('top','25px');
    $("#thumb"+this.props.buttonID).css('opacity','0');
    $("#thumb"+this.props.buttonID).find('.thumbLabel').css('right','0');
    $("#thumb"+this.props.buttonID).find('.thumbLabel').css('opacity','0');
    //
    this.buildAnimation(this.props.buttonID/10);
  }

  buildAnimation = (d) => {
    var _this = $("#thumb"+this.props.buttonID);
    var label = _this.find('.thumbLabel');
    //
    TweenLite.to( _this, 1, {delay:d, css:{top:"0", opacity:1 }, ease:Power3.easeOut});
    //
    TweenLite.to( label, 1, {delay:d+.2, css:{right:"-9%", opacity:1 }, ease:Power3.easeOut});
  
  }

  rollOverAnimation = (d=0) =>{
    
    var thumbBorder = $( "#thumb"+this.props.buttonID ).find( ".skewPanel" );
    //
    TweenLite.to( thumbBorder, .5, {delay:d, css:{borderColor:"#fff" }, ease:Power3.easeOut});
    }

  rollOutAnimation = (d=0) =>{
    var thumbBorder = $( "#thumb"+this.props.buttonID ).find( ".skewPanel" );
    //
    TweenLite.to( thumbBorder, .5, {delay:d, css:{borderColor:"#000" }, ease:Power3.easeOut});
  }

  render() {
    //skewPanel is the outer container that is skewed
    //unskew sets everything straight again. - <div className="thumbLabel skew"><h2>{this.props.brandTitle}</h2></div>
    //Panel Back is the background color, I want that to scale independantly
    var brndStr = this.props.brandName;
    brndStr = brndStr.toLowerCase();
    return (
      <Link to={ brndStr }>
      <div id={"thumb"+this.props.buttonID} className="thumbNail" onMouseOver={this.rollOverAnimation} onMouseOut={this.rollOutAnimation}>
        <div id={ this.props.buttonID } className="skewPanel">
          <div className="unskewPanel">
            <img src={this.props.imgURL} alt={this.props.brandTitle} />
          </div>
        </div>
      </div>
      </Link>
    );
  }
}

export default thumbButton;
