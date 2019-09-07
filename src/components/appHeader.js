import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Body, Title } from 'native-base';

export default class AppHeader extends Component {
  render() {
    return (
      <Header style={styles.header}>
        <Body>
          <Title>Mandiri InHealth</Title>
        </Body>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00396B',
  },
});

module.export = AppHeader;
