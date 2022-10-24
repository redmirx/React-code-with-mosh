import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {} from "@fortawesome/free-solid-svg-icons";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";

class Like extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <FontAwesomeIcon icon={faHeart} /> */}
        {/* <FontAwesomeIcon icon={faHeart} /> */}
        <i class="fa fa-heart" aria-hidden="true"></i>
      </React.Fragment>
    );
  }
}

export default Like;
