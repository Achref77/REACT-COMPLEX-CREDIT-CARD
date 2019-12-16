import React from "react";
import Log from "../components/logo.png";
class Card extends React.Component {
  state = {
    Name: "",
    date: "",
    ErrorName: false,
    ErrorCode: false,
    password: ""
  };
  //////////////////////////////verifZoneText/////////////////////////
  verifzoneText = e => {
   
    let regex = /[a-z]/g;
    if (regex.test(e.target.value)) {
      // if (e.target.value.length > 0 && e.target.value.length < 20) {
      console.log(e.target.value.length);
      this.setState({ Name: e.target.value.toUpperCase() });
      // this.state.Name = e.target.value;
      // console.log(this.state.Name);
      // console.log(e.target.value);
    } else {
      {
        this.setState({ ErrorName: true });
        // console.log(this.setstate.Errors);
      }
    }
  };
  //////////////////////////////verifPasword/////////////////////////
  verifpasword = e => {
    let regex = /[0-9]/;
    if (regex.test(e.target.value)) {
      this.setState({
        password:
          e.target.value.slice(0, 4) +
          " " +
          e.target.value.slice(5, 9) +
          " " +
          e.target.value.slice(9, 13) +
          " " +
          e.target.value.slice(13, 17)
      });
      console.log(e.target.value.length);
    } else {
      {
        this.setState({ ErrorCode: true });
      }
    }
  };
  //////////////////////////////verifDate//////////////////////////////
  verifdate = e => {
    this.setState({ date: e.target.value });
  };
  //////////////////////////////render//////////////////////////////
  render() {
    return (
      <div>
        <div>
          <input
            class="ground"id="name"type="text"onChange={this.verifzoneText}name="Name"value={this.state.Name}></input>
          <div>
            {this.state.ErrorName && (
              <span style={{ color: "red" }}>please enter a valid Name</span>
            )}
          </div>
          <input
            class="ground"type="text"id="code"onChange={this.verifpasword}name="password"maxlength="17"required></input>
          <div>
            {this.state.ErrorCode && (
              <span style={{ color: "red" }}>please enter a valid code</span>
            )}
          </div>
          <input type="date" onChange={this.verifdate} name="date"></input>
        </div>
        <div className="ListCard">
        <h1 className="titreVisa">Company name</h1>
          <div>
            <img className="puceCart" src={Puce} />
          </div>
          <div className="pcode">
            <il className="code">{this.state.password}</il>
          </div>
          <il className="name">{this.state.Name}</il>
          <il className="date">{this.state.date}</il>

          <div>
            <img className="logoCart" src={Log} />
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
