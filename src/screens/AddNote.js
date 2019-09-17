import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, Image, TextInput} from 'react-native';
import { Header, Left, Body, Right, Title, Button, Center, Content, Item, Input, Form, Picker, InputGroup, Textarea, Container } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { addnote } from '../redux/actions/notes';
import { getCategory } from '../redux/actions/categories';

class AddNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 'key',
            title: '',
            id_category: 0,
            content: '',
            selectedcategory: []
        }
    }

    onValueChange(value) {
        this.setState({
            id_category: value
        })
    }

   handlesubmit = () => {
       console.warn(this.state)
       this.props.dispatch(addnote({
           title: this.state.title,
           id_category: this.state.id_category,
           content: this.state.content
       }))
       .then(() => {
           this.props.navigation.navigate('Home')
       })
   }

   componentDidMount = () => {
       this.props.dispatch(getCategory())
        .then(() => {
            this.setState({
                selectedcategory: this.props.category
            })
        })
   }

    render() {
        return(
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent >
                            <Text onPress={() => this.props.navigation.navigate('Home')}>
                                <Icon name='arrow-left' size={25} />
                            </Text>
                            <Image source={require('../images/spongebob.png')} style={styles.image} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.title}> Add To Do List</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.handlesubmit()}>
                            <Icon name='check-circle-o' size={25} />
                        </Button>
                    </Right>
                </Header>
                <ScrollView style={{ flex: 1, flexDirection: "column", paddingHorizontal: 20 }}>
                    <View style={{ flex: 1 }}>
                    <TextInput
                        style={styles.inputTitle}
                        underlineColorAndroid="transparent"
                        placeholder={"ADD TITLE"}
                        placeholderTextColor={"#9E9E9E"}
                        onChangeText={(title) => this.setState({ title })}
                        value={this.state.title}
                    />
                    </View>
                    <View style={{ flex: 4, }}>
                    <TextInput
                        style={styles.inputStyles}
                        underlineColorAndroid="transparent"
                        placeholder={"ADD DECRIPTION."}
                        placeholderTextColor={"#9E9E9E"}
                        // Kode ajaib kita
                        numberOfLines={10}
                        multiline={true}
                        onChangeText={(content) => this.setState({ content })}
                        value={this.state.content}
                    />
                    </View>
                <View style={{ backgroundColor: "white", flex: 1, marginTop: 120 }}>
                    <Text style={{ fontSize: 20 }}>CATEGORI</Text>
                <Picker
                    mode="dropdown"
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: 200 }}
                    selectedValue={this.state.id_category}
                    onValueChange={this.onValueChange.bind(this)}
                >
                <Picker.Item label="ADD CATEGORY" value={0} />
                {this.state.selectedcategory.map((item) =>
                <Picker.Item label={item.name_category} value={item.id_category} />
                 )}
                </Picker>
                </View>
                </ScrollView>
            </Container>
        )
    }
}


const mapStateToProps = state => {
    return {
        note: state.notes.note,
        category: state.categories.category
    }
}

export default connect(mapStateToProps)(AddNote)

const styles = StyleSheet.create({
    title:{
        marginBottom: 55, 
        fontSize: 30, 
        marginLeft: 30        
    },
    description: {
        fontSize: 30, 
        marginBottom: 19, 
        width: 300, 
        marginLeft: 30
    },
    header: {
        marginBottom: 55, 
        backgroundColor: '#FFE4E1'
    },
    title: {
        textAlign: 'center', 
        marginLeft: 20, 
        color: '#000', 
        width: 200
    },
    image: {
        width: 50, 
        height: 50, 
        marginLeft: 10
    },
    inputStyles: {
        fontSize: 20,
        height: 40,
        backgroundColor: "#FFFFFF",
        height: 150
    }
});