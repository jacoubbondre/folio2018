import React from "react";
import './thumbButton.less';
import $ from 'jquery';
import {TweenLite, CSSPlugin, Power3} from "gsap/all";


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
    //
  }

  rollOverAnimation(d){
    //
  }

  rollOutAnimation(d){
    //
  }

  render() {
    //skewPanel is the outer container that is skewed
    //unskew sets everything straight again.
    //Panel Back is the background color, I want that to scale independantly
    return (
      <div className="thumbNail">
        <div className="thumbLabel skew"><h2>{this.props.brandName}</h2></div>
        <button id={ this.props.buttonID } className="skewPanel">
          <div className="unskewPanel">
            <img src={this.props.imgURL} />
          </div>
        </button>
      </div>
    );
  }
}

export default thumbButton;
