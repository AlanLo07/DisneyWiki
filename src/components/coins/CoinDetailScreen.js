import React from 'react';
import {View, Text, Pressable, StyleSheet, Image, SectionList, FlatList, Alert} from 'react-native';
import Colors from './../../res/colors';
import CharacterListProps from './CharacterListProps';

class CoinDetailScreen extends React.Component {

    state = {
        character:{},
        isFavorite: false
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

    toogleButton = () => {
        if(!this.state.isFavorite){
            this.alerta();
        }
        this.setState({isFavorite: !this.state.isFavorite})
    }

    alerta = async () => {
        Alert.alert("Remover de favoritos", "Estas seguro",[
            {
                text: "Cancel",
                onPress: () => {},
                style: "cancel"
            },
            {
                text:"Remove",
                onPress: async () => {
                    this.setState({isFavorite: !this.state.isFavorite})
                },
                style: "destructive"
            }
        ])
    }

    render() {
        return(
            <View 
                style ={styles.container}
            >
                <View  style={styles.subHeader}>
                    <View style={styles.row}>
                        <Image 
                        style={styles.images} 
                        source={{uri: this.state.character.imageUrl}}
                        />
                        <Text style={styles.titleTxt}>{this.state.character.name}</Text>
                    </View>
                    <Pressable 
                        onPress={this.toogleButton}
                        style={[styles.btnFavorites,
                            this.state.isFavorite ? styles.btnFavoritesRemove : styles.btnFavoritesAdd 
                        ]}
                    >
                        <Text style={[styles.btnFavoritesText]}>{this.state.isFavorite ? "Remove Favorite" : "Add favorites"}</Text>
                    </Pressable>
                </View>
                <SectionList
                    sections={this.getSections()}
                    keyExtractor={(item,index) => index}
                    renderItem={({section}) => 
                    <View style={styles.secctionItem}>
                        <CharacterListProps data={section.data}/>
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
    row: {
        flexDirection: 'row'
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
        flexDirection: "row",
        justifyContent: "space-between" 

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
    },
    btnFavorites: {
        padding: 8,
        borderRadius: 8,
        justifyContent: "center"
    },
    btnFavoritesText: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: "bold"
    },  
    btnFavoritesAdd: {
        backgroundColor: Colors.pitcon,
    },
    btnFavoritesRemove: {
        backgroundColor: Colors.carmine,
    }
})

export default CoinDetailScreen;