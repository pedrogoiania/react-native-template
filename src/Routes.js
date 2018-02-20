
import React, { Component } from 'react';
import { Text, Image, Dimensions, StyleSheet } from 'react-native';
import { Router, Scene, Stack, Actions, Drawer } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Login from './views/Login'
import Inicio from './views/Inicio'

class Routes extends Component {
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene key='loginStack' hideNavBar >
                        <Scene key='loginScreen' component={Login} title="Login" hideNavBar />
                    </Scene>
                    <Drawer key='drawerStack' hideNavBar >
                        <Scene key='inicioScreen' component={Inicio} title="Inicio" />
                    </Drawer>
                </Scene>
            </Router>
        );
    }
}

export default connect(null, null)(Routes);
