import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Content, Card, CardItem, Body, Left, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class AppBodyData extends Component {

    goToDetails = () => {
        console.log("Hey");
        Actions.details({ title: this.props.data });
    }

    render() {
        let articles = this.props.data.map(function (articleData, index) {
            return (
                <TouchableOpacity key={index} onPress={() => Actions.details({ id: articleData.id, journal: articleData.journal, title_display: articleData.title_display, abstract: articleData.abstract, score: articleData.score })}>
                    <Card>
                        <CardItem>
                            <Left>
                                <Icon name='person' />
                                <Body>
                                    <Text>
                                        {articleData.title_display}
                                    </Text>
                                </Body>
                            </Left>
                        </CardItem>
                    </Card>
                </TouchableOpacity >
            )
        });

        return (
            <Content>
                {articles}
            </Content >
        );
    }
}

module.export = AppBodyData;