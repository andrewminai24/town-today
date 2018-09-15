// Generate a horizontal, scrollable list of events

import React, { Component } from 'react';
import { StyleSheet, FlatList, ImageBackground, Image, View } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

function CategoryList(props) {

    const _renderEventItem = ({ item, index }) => {
        console.log("IMAGE: ", item.image);
        
        return (
            <View>
                <Image
                    style={{ width: 200, height: 150 }}
                    source={{ uri: item.image }}
                />
                <ListItem
                    key={index}
                    title={item.name}
                    hideChevron={true}
                />
            </View>
        );
    };

    return (
        <Card title="CATEGORY TITLE">
            <FlatList
                horizontal={true}
                data={props.items}
                renderItem={_renderEventItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );

}

const styles = StyleSheet.create({

});

export default CategoryList;
