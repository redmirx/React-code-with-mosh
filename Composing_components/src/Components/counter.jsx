import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }
  render() {
    return (
      <React.Fragment>
        {/* {this.props.children} */}
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col">
            <button
              className="btn btn-secondary btn-sm m-2"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              +
            </button>
            <button
              className={this.disableCount()}
              onClick={() => this.props.onDecrement(this.props.counter)}
            >
              -
            </button>
            <button
              className="btn btn-danger btn-sm m-2"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              x
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  disableCount() {
    let classes = "btn btn-secondary btn-sm ";
    classes += this.props.counter.value === 0 && "disabled";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
