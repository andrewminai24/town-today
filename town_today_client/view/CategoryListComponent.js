// Generate a horizontal, scrollable list of events

import React from 'react';
import { StyleSheet, FlatList, Image, View, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-elements';

function CategoryList(props) {

    const _renderEventItem = ({ item, index }) => {

        return (
            <View>
                <TouchableHighlight
                    onPress={() => console.log("Item Selected")}
                    underlayColor="#ff0000"
                >
                    <View style={{ backgroundColor: "#0000ff" }}>
                        <Image
                            style={{ width: 200, height: 150 }}
                            source={{ uri: item.image }}
                        />
                        {/* <ListItem
                            key={index}
                            title={item.name}
                            hideChevron={true}
                        /> */}
                    </View>
                </TouchableHighlight>
            </View>
        );
    };

    return (
        <Card title={props.categoryTitle}
            containerStyle={styles.cardStyle}
            titleStyle={{ textAlign: 'left' }}>
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
    cardStyle: {
        backgroundColor: '#000',
        borderWidth: 0
    }
});

export default CategoryList;
