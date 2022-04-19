import React from "react";
import InputLogin from "./InputLogin/InputLogin";
import "./Body.scss";

export default class Boddy extends React.Component {
  render() {
    return (
      <div className="body">
        <InputLogin></InputLogin>
        <h1>Login {/*this.props.name*/}</h1>
      </div>
    );
  }
}
