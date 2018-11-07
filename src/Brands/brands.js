import React from "react";
import './brands.less';
import $ from 'jquery';
import Parser from 'html-react-parser';
import {connect} from 'react-redux';
import {TweenLite, CSSPlugin, Power3} from "gsap/all";
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
  }
  render() {
    
      const itemsToRender = () => {
      if(this.state.brand!= undefined){
        const mainImg =
        <div className="mainImage">
          <div className="skewPanel">
            <div className="unskewPanel">
              <img src={this.state.brand.imageURL} />
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
          <div className="unskew">
            {Parser(this.state.brand.description)}
          </div>
        </div>;
        //
        const highlights =
        <div className="highlights unskew">
          <div className="skew">
            {Parser(this.state.brand.highlights)}
          </div>
        </div>;
        //
        if(this.state.brand.hasVideo){
          return (
            <React.Fragment>
            {mainImg}
            {bodyCopy}
            {highlights}
            {video}
          </React.Fragment>
          );
        } else {
          return(
          <React.Fragment>
            {mainImg}
            {bodyCopy}
            {highlights}
          </React.Fragment>
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
