import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import Utilities from '../utilities/Utilities';

export const Metronome = props => {
  const [values, setValues] = React.useState(90);
  const [isPlayed, setPlayed] = React.useState(false);
  const [timer, setTimer] = React.useState(0);

  const play = bpm => {
    Utilities.playSound('metronome');
    setPlayed(true);
    setTimer(
      setInterval(() => {
        Utilities.playSound('metronome');
      }, 60000 / bpm),
    );
  };

  const stop = () => {
    setPlayed(false);
    clearInterval(timer);
  };

  const tempoChange = bpm => {
    if (isPlayed) {
      stop();
      play(bpm);
    }
  };

  return (
    <View style={styles.metronomeView}>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={40}
        step={1}
        maximumValue={208}
        value={values}
        onValueChange={bpm => {
          props.setBpm(bpm);
          setValues(bpm);
          tempoChange(bpm);
        }}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#F5F5F5"
        thumbTintColor="#FFFFFF"
      />
      <View className={'Metronome-value'}>
        <Text style={styles.bpm}>{parseFloat(values.toFixed(2))} BPM</Text>
        <Text style={styles.tempo}>{Utilities.getTempo(values)}</Text>
      </View>
      <View>
        <Icon
          name={isPlayed ? 'pause' : 'play'}
          size={32}
          style={isPlayed ? styles.iconPause : styles.iconPlay}
          title={'test'}
          onPress={isPlayed ? () => stop() : () => play(values)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  metronomeView: {
    alignItems: 'center',
    marginBottom: 10,
  },
  bpm: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
  tempo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
  iconPlay: {
    backgroundColor: 'white',
    color: '#383838',
    paddingLeft: 14,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 10,
    borderRadius: 25,
  },
  iconPause: {
    backgroundColor: 'white',
    color: '#383838',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 10,
    borderRadius: 25,
  },
});
