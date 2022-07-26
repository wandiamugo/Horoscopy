import React from "react";
import './Card.css'

const signs = require('../../texts/signs.json');

class Card extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title : signs[props.currentSign].title,
        sign: signs[props.currentSign].sign,
        text: signs[props.currentSign].text,
        currentSign: signs[props.currentSign].currentSign,
        yesterday: false,
        today: false,
        tomorrow: false,
        change:false,
        yesterday_horo: '',
        today_horo: '',
        tomorrow_horo: ''
        }
    }
  
    dict = {
      "yesterday":"yesterday_horo",
      "today":"today_horo",
      "tomorrow" : "tomorrow_horo",
    }
  
    loadHoroscopes(){
      fetch(`https://aztro.sameerkumar.website?sign=${this.state.sign.toLowerCase()}&day=yesterday`,{
        method:"POST"
    })
    .then(res => res.json()).then(yes => this.setState({yesterday_horo:yes}))

    fetch(`https://aztro.sameerkumar.website?sign=${this.state.sign.toLowerCase()}&day=today`,{
      method:"POST"
    })
    .then(res => res.json()).then(to => this.setState({today_horo:to}))

    fetch(`https://aztro.sameerkumar.website?sign=${this.state.sign.toLowerCase()}&day=tomorrow`,{
      method:"POST"
    })
    .then(res => res.json()).then(tom => this.setState({tomorrow_horo:tom}))
  }

  componentWillMount(){
    this.loadHoroscopes();
  }

  toggle() {
    document.getElementById('yesterday').classList.remove('clicked');
    document.getElementById('today').classList.remove('clicked');
    document.getElementById('tomorrow').classList.remove('clicked');
    document.getElementById('change').classList.remove('clicked');
  }
  clicked(e){
    let clicked = e.currentTarget;
    if(eval(`this.state.${clicked.id}`) === true) {
      document.getElementById("text").textContent = this.state.text;
      document.getElementById("date").textContent = '';
      eval(`this.setState({${clicked.id}:!this.state.${clicked.id}}, () => clicked.classList.toggle("clicked"))`);
    } else {
      this.setState({yesterday:false, today:false, tomorrow:false, change:false}, ()=> {
        this.toggle();
        document.getElementById("date").textContent = this.state[this.dict[clicked.id]].current_date;
        document.getElementById("text").textContent = this.state[this.dict[clicked.id]].description;
        eval(`this.setState({${clicked.id}:true}, () => clicked.classList.toggle("clicked"))`);
      });
    } 
  } 
}