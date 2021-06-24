import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import Colors from './../../res/colors';

const CharacterListProps = ({data}) => {
    console.log(data)
    return(
        <View style={styles.container}>
            <FlatList
                horizontal={true}
                data={data[0]}
                keyExtractor={(item,index) => index}
                renderItem= {({item}) => 
                    <Text style={styles.itemTxt}>{item}</Text>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0,0,0,0.1)",
        borderColor: Colors.zircon,
        borderWidth: 1,
        padding: 16,
        margin: 8,
        alignItems: "center"
    },
    itemTxt: {
        color: Colors.white,
        fontWeight: "bold",
        borderWidth: 1,
        borderColor: Colors.zirco,
        backgroundColor: "rgba(0,0,0,0.3)",
        borderWidth: 1,
        padding: 8,
        marginRight: 8,
        alignItems: "center",
        fontSize: 16 
    }
})

export default CharacterListProps;