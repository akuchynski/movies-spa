import React from "react";

function HeaderSection() {
  return (
    <div>
      <h2>Hello World</h2>
    </div>
  );
}

class ComponentMenu extends React.Component {
  render() {
    return (
      <div>
        <h3>Class component via React.Component!</h3>
      </div>
    );
  }
}

class PureComponentMenu extends React.PureComponent {
  render() {
    return (
      <div>
        <h3>Class component via React.PureComponent!</h3>
      </div>
    );
  }
}

class FooterSection extends React.Component {
  render() {
    return React.createElement("h3", {}, "React.createElement");
  }
}

export { HeaderSection, ComponentMenu, PureComponentMenu, FooterSection };
