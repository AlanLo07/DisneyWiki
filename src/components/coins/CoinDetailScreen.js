import React from 'react';
import {View, Text, Pressable, StyleSheet, Image, SectionList} from 'react-native';
import Colors from './../../res/colors';

class CoinDetailScreen extends React.Component {

    state = {
        character:{}
    }

    componentDidMount() {
        console.log("character ",this.props.route.params)
        const {character} = this.props.route.params;
        this.props.navigation.setOptions({title: character.name})
        this.setState({character});
    }

    getSections = () => {
        const sections=[
            {
                title: "Films",
                data: [this.state.character.films]
            },
            {
                title: "Short Films",
                data: [this.state.character.shortFilms]
            },
            {
                title: "Shows of TV",
                data: [this.state.character.tvShows]
            },
            {
                title: "Video Games",
                data: [this.state.character.videoGames]
            },
            {
                title: "Allies",
                data: [this.state.character.allies]
            },
            {
                title: "Enemies",
                data: [this.state.character.enemies]
            }
        ]

        return sections;
    }

    render() {
        return(
            <View 
                style ={styles.container}
            >
                <View  style={styles.subHeader}>
                    <Image 
                    style={styles.images} 
                    source={{uri: this.state.character.imageUrl}}
                    />
                    <Text style={styles.titleTxt}>{this.state.character.name}</Text>
                </View>
                <SectionList
                    sections={this.getSections()}
                    keyExtractor={(item,index) => index}
                    renderItem={({item}) => 
                    <View style={styles.secctionItem}>
                        <Text style={styles.itemText}>{`${item}`} </Text>
                    </View>}
                    renderSectionHeader={({section}) => 
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTxt}>{section.title}</Text>
                    </View>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    images: {
        width: 80,
        height: 80,
        borderRadius:40
    },
    container: {
        flex: 1,
        backgroundColor: Colors.purple
    },
    titleTxt: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: "bold",
        margin: 20
    },
    subHeader: {
        backgroundColor: "rgba(0,0,0,0.2)",
        padding: 16,
        flexDirection: "row" 
    },
    sectionHeader: {
        backgroundColor: "rgba(0,0,0,0.2)",
        padding: 8
    },
    sectionItem: {
        padding: 8
    },
    itemText: {
        color: Colors.white,
        fontSize:14
    },
    sectionTxt: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: "bold"
    }
})

export default CoinDetailScreen;