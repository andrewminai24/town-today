// Generate a horizontal, scrollable list of events

// TODO: Cleanup unused imports
import React, { Component } from 'react';
import { StyleSheet, FlatList, ImageBackground, Image, View } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

function CategoryList(props) {

    const _renderEventItem = ({ item, index }) => {
        // console.log("IMAGE: ", item.image);

        // TODO: ListItem is probably overkill; consider switching to Text element
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

    // NOTE: Notice how props are accessed in a functional, stateless component
    return (
        <Card title={props.categoryTitle}>
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
