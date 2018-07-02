import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDraw: false
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDraw: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => ({ showSideDraw: !prevState.showSideDraw }));
  };
  render() {
    return (
      <Aux>
        <Toolbar drawerToggledClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDraw}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
