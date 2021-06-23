import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Colors from './../../res/colors';

const CharacterItem = ({item, onPress}) => {


    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.row}>
                <Image
                    source={{uri: `${item.imageUrl}`}}
                    style={{width: 40, height: 40, marginRight: 10, borderRadius: 20}}
                />
                <Text style={styles.nameText}>{item.name}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.aparicionText}>{`apariciones: ${item.films.length + item.shortFilms.length + item.tvShows.length}`}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create( {
    container: {
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'space-between',
        borderBottomColor: Colors.zircon,
        borderBottomWidth: 1
    },
    row: {
        flexDirection: 'row'
    },
    nameText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    aparicionText: {
        color: '#fff',
        fontSize: 12
    }
});

export default CharacterItem;