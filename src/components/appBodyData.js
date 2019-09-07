import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Content, Card, CardItem, Body, Left, Thumbnail } from 'native-base';

export default class AppBodyData extends Component {

    render() {

        let articles = this.props.data.map(function (articleData, index) {
            return (
                <Card>
                    <CardItem onPress={console.log(articleData.id)} >
                        {/* <Left> */}
                        {/* <Icon name='person' /> */}
                        <Body>
                            <Text>
                                {articleData.title_display}
                            </Text>
                        </Body>
                        {/* </Left> */}
                    </CardItem>
                </Card>
            )
        })

        return (
            <Content>
                {articles}
            </Content>
        );
    }
}

module.export = AppBodyData;