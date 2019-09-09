import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Text } from 'native-base';

export default class Details extends Component {
    render() {
        return (
            <Content>
                <Text>ID : {this.props.id}</Text>
                <Text>Journal : {this.props.journal}</Text>
                <Text>Title : {this.props.title}</Text>
                <Text>Abstract : {this.props.abstract}</Text>
                <Text>Score : {this.props.score}</Text>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#00396B',
    },
});

module.export = Details;
