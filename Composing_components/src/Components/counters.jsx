import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 3 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    let filteredData = this.state.counters.filter(
      (value) => value.id !== counterId
    );
    this.setState({ counters: filteredData });
    // console.log("event handler clicked", counterId);
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 10;
      return counter;
    });
    this.setState({ ...counters, counters });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            onDelete={this.handleDelete}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
