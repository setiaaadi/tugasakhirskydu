import React, { Component } from "react";


class Logout extends Component {
  render() {
    return (
<>
        <div className="link-wrapper">
          <button onClick={this.props.logOut} className="logout-link">LogOut</button>
        </div>
     
      </>
    );
  }
}

export default Logout;
