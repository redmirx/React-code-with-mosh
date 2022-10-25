import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as Solid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as Regular } from "@fortawesome/free-regular-svg-icons";

class Like extends Component {
  render() {
    let Like = !this.props.liked ? Regular : Solid;
    return (
      <React.Fragment>
        <FontAwesomeIcon
          onClick={this.props.onClick}
          style={{ cursor: "pointer" }}
          icon={Like}
        />
        {/* <FontAwesomeIcon icon={Heart} /> */}
        {/* <i class="fa fa-heart" aria-hidden="true"></i> */}
      </React.Fragment>
    );
  }
}

export default Like;
