import React from "react";
import ThumbButton from '../components/ThumbButton/thumbButton';
import './work.less';
import $ from 'jquery';
import {connect} from 'react-redux';


class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        //
    };
  }
  componentDidMount() {
   //
   


  }
  render() {

    const itemsToRender = this.props.work.map((brand) => {
      return (
        <ThumbButton brandName={brand.title} imgURL={brand.imageURL} />
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
