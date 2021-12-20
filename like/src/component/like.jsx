import React, { Component } from "react";

class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i onClick={this.props.onLike} className={classes} aria-hidden="true" />
    );
  }
}

export default Like;
// import React from 'react'

// const like = (props) => {
//   return (
//     <div>
//       { props.liked ?       <i className="fa fa-heart" aria-hidden="true"></i> : <i className="fa fa-heart-o" aria-hidden="true"></i>}

//       </div>
//     //   if (this.props.liked) {
//     //   <i className="fa fa-heart" aria-hidden="true"></i>;
//     // } else {<i className="fa fa-heart-o" aria-hidden="true"></i>;
//     //   return }}
//   )
// }

// export default like
