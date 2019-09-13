import React, {Component} from 'react';
import { View, Text } from 'react-native';
import styles from '../public/styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class NoteListBox extends Component {
    render() {
        // console.warn(this.props.events());
        
        const {color} = this.props;
        let date_splitter = (time) => {
            let dates = time.split(' ');
            let datesA = dates[0].split('-');
            let newDate;

            if(datesA[1] == 1)
            {
                newDate = datesA[2]+' jan';
            }
            else if (datesA[1] == 2)
            {
                newDate = datesA[2] + ' feb';

            }
            else if (datesA[1] == 3) 
            {
                newDate = datesA[2] + ' mar';

            }
            else if (datesA[1] == 4) 
            {
                newDate = datesA[2] + ' apr';

            }
            else if (datesA[1] == 5) 
            {
                newDate = datesA[2] + ' may';

            }
            else if (datesA[1] == 6) 
            {
                newDate = datesA[2] + ' jun';

            }
            else if (datesA[1] == 7) 
            {
                newDate = datesA[2] + ' jul';

            }
            else if (datesA[1] == 8) 
            {
                newDate = datesA[2] + ' aug';

            }
            else if (datesA[1] == 9) 
            {
                newDate = datesA[2] + ' Sep';

            }
            else if (datesA[1] == 10) 
            {
                newDate = datesA[2] + ' oct';

            }
            else if (datesA[1] == 11) 
            {
                newDate = datesA[2] + ' nov';

            }
            else if (datesA[1] == 12) 
            {
                newDate = datesA[2] + ' dec';

            }
            else
            {
                newDate = datesA[2] + ' unknown';

            }
               return newDate;
        }

        return(
            <TouchableOpacity onPress={this.props.events}>
                <View style={{
                    backgroundColor: `${color}`,
                    height: 150,
                    margin: 15,
                    width: 150,
                    borderRadius: 5}}>
                    <Text style={styles.Headings}>{date_splitter(this.props.time)}</Text>
                    <Text numberOfLines={1} style={styles.Title}>{this.props.title}</Text>
                    <Text numberOfLines={1} style={styles.Category}>{this.props.category}</Text>
                    <Text numberOfLines={2} style={styles.Notes}>{this.props.notes}</Text> 
                </View>
            </TouchableOpacity>
        )
    }
}