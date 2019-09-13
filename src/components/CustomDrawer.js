
import React, { Component } from 'react';
import { Image, StyleSheet, Text, FlatList} from 'react-native';
import { Container, View, Content, List, ListItem, Body, Left, Header } from 'native-base';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import CategoryBtn from './CategoryBtn'

class CustomDrawer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id: '1',
                    nameCategory: 'Wishlist',
                },
                {
                    id: '2',
                    nameCategory: 'Personal',
                },
                {
                    id: '3',
                    nameCategory: 'Work',
                }
            ]
        }
    }

    _KeyExtractor = (item, index) => item.id;

    render() {
        return(
            <View>
                <Header style={{ height: 300, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
                    <Body>
                        <View style={styles.photoDrawer}>
                            <Image source={require('../images/spongebob.png')}
                            style={{ width: 140, height: 140, resizeMode: "cover", borderRadius: 70 }}/>
                        </View>
                        <View style={[styles.textCenter, { width: "100%", justifyContent: "center", marginTop: 20 }]}>
                            <Text style={{ textAlign: "center", fontWeight: 'bold' }}>Spongebob Squarepants</Text>
                        </View>
                    </Body>
                </Header>
                <ScrollView>
                    <TouchableOpacity>
                        <View style={styles.container}>
                            <Icon name='folder-open' style={styles.icons} size={20} />
                            <Text style={styles.categoryName}>All</Text>
                        </View>
                    </TouchableOpacity>

                    <FlatList
                        data={this.state.data}
                        keyExtractor={this._KeyExtractor}
                        renderItem={({ item }) => <CategoryBtn categoryName={item.nameCategory} />}
                    />                    
                </ScrollView>
            </View>
        )
    }
}

export default CustomDrawer

const styles = StyleSheet.create({
    photoDrawer: {
        width: 140,
        height: 140,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#FFFFFF",
        borderRadius: 70
    },
    textCenter: {
        justifyContent: "center"
    },
    container:{
        
        padding: 15,
        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    pict:{
        marginTop: 45,
        marginBottom: 25,
        alignSelf: 'center',
        width: 100, 
        height: 100, 
        borderRadius: 150
    },
    names:{
        alignSelf: 'center',
        fontSize: 25,
        marginBottom: 55
    },
    icons:{
        marginRight: 13,
        marginLeft: 16
    },
    categoryName:{
        fontSize: 20
    }
});