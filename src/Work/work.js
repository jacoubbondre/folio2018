import React from "react";
import ThumbButton from '../components/ThumbButton/thumbButton';
import './work.less';
import $ from 'jquery';
import {connect} from 'react-redux';
import {TweenLite, Power3} from "gsap/all";


class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        //
    };
  }
  componentDidMount() {
    var bdy = $('body');
    var bgColor = "#02466a";
    TweenLite.to( bdy, 1.5, { backgroundColor:bgColor, ease:Power3.easeOut});
    //Scroll Back to top
    TweenLite.to(window, .5, {delay:0, ease: Power2.easeOut, scrollTo:0});
    //
  }
  render() {

    const itemsToRender = this.props.work.map((brand) => {
      return (
        <ThumbButton key={brand.id} buttonID={brand.id} brandTitle={brand.title} brandName={brand.brandName} imgURL={brand.imageURL} />
      )

  })

    return (
      <div className="thumbHolder">
        {itemsToRender}
      </div>
    );
  }
}
 
const mapStateToProps = (state) =>{
  return{
    work: state.work.brand
  }
}

export default connect(mapStateToProps)(Work);