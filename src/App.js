import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Container, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import { Router, Scene, root, Stack } from 'react-native-router-flux';
import mimoTheme from './themes/variables/mimoTheme';

import AppHeader from './components/appHeader'
import AppBody from './components/appBody'
import AppFooter from './components/appFooter'

import News from './pages/news'
import About from './pages/about'
import Details from './pages/details'

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(mimoTheme)}>
        <Container >
          <Router>
            <Stack key='root'>
              <Scene key="feed" component={AppBody} title='Feed' />
              <Scene key="news" component={News} title='News' />
              <Scene key="about" component={About} title='About' />
              <Scene key="details" component={Details} title='Details' />
            </Stack>
          </Router>
          <AppFooter />
        </Container>
      </StyleProvider>
    );
  }
};

AppRegistry.registerComponent('easy', () => easy);