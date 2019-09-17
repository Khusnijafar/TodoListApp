
import React, { Component } from 'react';
import { Image, StyleSheet, Text, FlatList} from 'react-native';
import { Container, View, Content, List, ListItem, Body, Left, Header } from 'native-base';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import CategoryBtn from './CategoryBtn'
import { getCategory } from '../redux/actions/categories'
import { sortbyCategory } from '../redux/actions/notes'
import { connect } from 'react-redux'

class CustomDrawer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectCategory: []
        }
    }

    componentDidMount = () => {
        this.props.dispatch(getCategory())
            .then(() => {
                this.setState({
                    selectCategory: this.props.category
                })
            })
    }

    byCategory = (id_category) => {
        this.props.dispatch(sortbyCategory(id_category))
            .then(() => {

            })
    }

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
                            <Text style={styles.title}>Spongebob Squarepants</Text>
                        </View>
                    </Body>
                </Header>
                <ScrollView>
                    <TouchableOpacity>
                        <View style={styles.container}>
                        {this.state.selectCategory.map((item) =>
                            <ListItem onPress={() => this.byCategory(item.id_category)}>
                                <Left>
                                    {/* <Image source={require('../assets/images/mahkota2.png')} style={{ width: 30, height: 30, marginRight: 10, marginTop: -5 }} /> */}
                                    <Text>{item.name_category}</Text>
                                </Left>
                            </ListItem>
                        )}
                        </View>
                    </TouchableOpacity>                 
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        note: state.notes.note,
        category: state.categories.category
    }
}

export default connect(mapStateToProps)(CustomDrawer)

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
    },
    title: {
        textAlign: "center", 
        fontWeight: 'bold'
    }
});