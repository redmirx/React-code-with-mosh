import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  state = {
    value: this.props.value,
    imgUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    const handleIncrement = (product) => {
      this.setState({ value: this.state.value + 1 });
    };

    // console.log("props", this.props);

    return (
      <React.Fragment>
        {this.props.children}
        {/* <img src={this.state.imgUrl} alt="" /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => handleIncrement()}
        >
          Increment
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
