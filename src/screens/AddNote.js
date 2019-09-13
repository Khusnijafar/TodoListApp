import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { Header, Left, Body, Right, Title, Button, Center, Content, Item, Input, Form, Picker, InputGroup, Textarea } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


// import Head from '../header/SecondHead';
import { TextInput } from 'react-native-gesture-handler';

export default class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            selected1: 'key1',
        }
    }

    prosesInput = (event) => {
        let data = {
            title: this.state.title,
            description: this.state.description
        }
    }
    onValueChange(value) {
        this.setState({
            selected1: value
        });
    }

    render() {
        return(
            <View>
                <Header style={{ marginBottom: 55, backgroundColor: '#FFE4E1' }}>
                    <Left>
                        <Button transparent >
                            <Text onPress={() => this.props.navigation.navigate('Home')}>
                                <Icon name='arrow-left' size={25} />
                            </Text>
                            <Image source={require('../images/spongebob.png')} style={{ width: 50, height: 50, marginLeft: 10 }} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ textAlign: 'center', marginLeft: 20, color: '#000', width: 200}}> Add To Do List</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='check-circle-o' size={25} />
                        </Button>
                    </Right>
                </Header>
                    <View>
                        <Form>
                        <Textarea placeholder="ADD TITLE..." style={{ marginBottom: 55, fontSize: 30, marginLeft: 30}}></Textarea>
                        <Textarea placeholder="ADD DESCRIPTION..." style={{ fontSize: 30, marginBottom: 19, width: 300, marginLeft: 30}}></Textarea>
                            <Text style={{marginLeft: 30, marginTop:100}}>CATEGORY</Text>
                            <View style={{marginLeft: 30}}>
                                <Picker
                                headerComponent={
                                    <Header>
                                        <Button transparent>
                                            Custom Back
                                    </Button>
                                        <Title>Custom Header</Title>
                                    </Header>
                                }
                                mode='dropdown'
                                selectedValue={this.state.selected1}
                                onValueChange={this.onValueChange.bind(this)}
                                style={{ width: 200 }}>
                                    <Item label='Personal' value='key0' />
                                    <Item label='Work' value='key1' />
                                    <Item label='Wishlist' value='key2' />
                                </Picker>
                            </View>
                        </Form>    
                    </View>
            </View>
        )
    }
}

// export default Notes;



const Style = StyleSheet.create(
{
    Teks:{
        color: 'blue',
        
    }
});