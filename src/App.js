import React, { Component } from "react";

import Pet from "./Pet";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Adopt me!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Pepper" animal="bird" breed="Cockatiel" />
        <Pet name="Mongo" animal="cat" breed="Mixed" />
      </div>
    );
  }
}
