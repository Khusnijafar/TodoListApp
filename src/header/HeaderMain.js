import React, { Component } from 'react';
import {Header, Left, Body, Right, Title, Button, Thumbnail } from 'native-base';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/FontAwesome';


class Head extends Component {
    menu = null;

    setMenuRef = ref => {
        this.menu = ref;
    };

    hideMenu = () => {
        this.menu.hide();
    };

    showMenu = () => {
        this.menu.show();
    };

    render() {
        return(
            <Header style={{ backgroundColor: '#FFE4E1' }}>
                <Left>
                    <Button transparent onPress={this.props.fun} style={{ backgroundColor: '#FFFFFF', borderRadius: 50 }}>
                        <Thumbnail small source={require('../images/spongebob.png')} />
                    </Button>
                </Left>
                <Body>
                    <Title style={{ textAlign: 'center', marginLeft: 22, color: '#000', width: 200, fontWeight:"bold"}}>Todo List APP</Title>
                </Body>
                <Right>
                    <Menu
                        ref={this.setMenuRef}
                        button={<Icon onPress={this.showMenu} name='align-right' size={40} />}
                    >
                        <MenuItem onPress={this.hideMenu}>DESCENDING</MenuItem>
                        <MenuItem onPress={this.hideMenu}>ASCENDING</MenuItem>                        
                    </Menu>
                </Right>
            </Header>
        )
    }
}

export default Head;