import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  state = {
    count: 0,
    imgUrl: "https://picsum.photos/200",
  };

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imgUrl} alt="" /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
