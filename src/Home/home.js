import React from "react";
import PanelButton from '../components/PanelButton/panelButton';
import './home.less';
import $ from 'jquery';


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
   _work.buildAnimation(.1);
   _about.buildAnimation(.3);
   _contact.buildAnimation(.5);
   
   //Define Over and Out Handlers
    $('#Work').mouseover(function(){
      _work.rollOverAnimation(0);
    });
    $('#Work').mouseout(function(){
      _work.rollOutAnimation(0);
    });
    //
    $('#About').mouseover(function(){
      _about.rollOverAnimation(0);
    });
    $('#About').mouseout(function(){
      _about.rollOutAnimation(0);
    });
    //
    $('#Contact').mouseover(function(){
      _contact.rollOverAnimation(0);
    });
    $('#Contact').mouseout(function(){
      _contact.rollOutAnimation(0);
    });


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
