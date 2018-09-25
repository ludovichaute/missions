import React, { Component } from 'react';
import { Drawer } from 'native-base';
// import SideBar from './yourPathToSideBar';

export default class DrawerExample extends Component {
  render() {

    closeDrawer = () => {
      this.drawer._root.close()
    };

    openDrawer = () => {
      this.drawer._root.open()
    };

    return ( <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={"test"}
        onClose={() => this.closeDrawer()} >
      // Main View
      </Drawer>
    );
  }
}
