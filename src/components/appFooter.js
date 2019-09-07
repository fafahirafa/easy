import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Footer, Button, Text, FooterTab, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class AppFooter extends Component {
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button active onPress={Actions.feed}>
                        <Icon name="egg" />
                        <Text style={styles.buttontext}>Feed</Text>
                    </Button>
                    <Button active onPress={Actions.news}>
                        <Icon name="paper" />
                        <Text style={styles.buttontext}>News</Text>
                    </Button>
                    <Button active onPress={Actions.about}>
                        <Icon activate name="person" />
                        <Text style={styles.buttontext}>Profile</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00396B'
    },
    buttontext: {
        color: '#fff'
    }
})

module.export = AppFooter;