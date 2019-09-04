import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Utilities from '../utilities/Utilities';

export const NoteButton = props => {
  return (
    <View style={styles.noteButtonView}>
      <Text
        onPress={() => Utilities.playSound(props.note.toLowerCase())}
        style={
          props.note.length === 2
            ? styles.noteButtonStyle
            : styles.noteButtonSingleStyle
        }>
        {props.note}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noteButtonView: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  noteButtonStyle: {
    backgroundColor: 'white',
    color: '#383838',
    fontWeight: 'bold',
    fontSize: 26,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 25,
  },
  noteButtonSingleStyle: {
    backgroundColor: 'white',
    color: '#383838',
    fontWeight: 'bold',
    fontSize: 26,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
  },
});
