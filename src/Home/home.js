import React from "react";
import PanelButton from '../components/PanelButton/panelButton';
import './home.less';
import $ from 'jquery';
import {TweenLite,  Power3} from "gsap/all";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.work = React.createRef();
    this.about = React.createRef();
    this.contact = React.createRef();

    this.state = {
        //
    };
  }
  componentDidMount() {
   //
   var _work = this.work.current;
   var  _about = this.about.current;
   var _contact = this.contact.current;
   //
   
   var bdy = $('body');
   var bgColor = "#333";
   TweenLite.to( bdy, 1.5, { backgroundColor:bgColor, ease:Power3.easeOut});
   //
   _work.buildAnimation(0.6);
   _about.buildAnimation(.9);
   _contact.buildAnimation(1.2);

  }
  render() {
    return (
      <div className="navHolder">
        <PanelButton ref={this.work} panelID="Work" title="Work" tagLine="some of my favorite pieces" />
        <PanelButton ref={this.about} panelID="About" title="Modus<br />Operandi" tagLine="how I do what I do" />
        <PanelButton ref={this.contact} panelID="Contact" title="Engage" tagLine="how can I help?" />
      </div>
    );
  }
}

export default Home;
