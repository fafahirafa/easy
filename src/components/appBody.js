import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Content, Card, CardItem, Body } from 'native-base';
import AppBodyData from './appBodyData';
export default class AppBody extends Component {

  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  getData() {
    return fetch('http://api.plos.org/search?q=title:DNA')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ data: responseJson.response.docs });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <AppBodyData data={this.state.data} />
    );
  }
};

const styles = StyleSheet.create({
  bodyText: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
    fontSize: 40
  }

});

module.export = AppBody;