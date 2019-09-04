import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import KeepAwake from 'react-native-keep-awake';
import {NoteButton} from './components/tunning/NoteButton';
import {Metronome} from './components/metronome/Metronome';
import guitar from './components/images/guitar.png';


const App = () => {
  const [bpm, setBpm] = React.useState(90);
  const notes = ['E2', 'A', 'D', 'G', 'B', 'E4'];

  React.useEffect(() => {
    KeepAwake.activate();
  }, []);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{flex: 1}}
        colors={[
          'hsl(' + 100 + bpm + ', 60%, 50%)',
          'hsl(' + 50 + bpm + ', 60%, 40%))',
        ]}>
        <View style={styles.menu}>
          <Image source={guitar} style={styles.guitar} />
          <Text style={styles.featureText}>Metronome</Text>
          <Metronome setBpm={bpm => setBpm(bpm)} />
          <Text style={styles.featureText}>Guitar Tunning</Text>
          <View style={styles.guitarTunning}>
            {notes.map((item, index) => {
              return <NoteButton note={item} key={index} />;
            })}
          </View>
        </View>
      </LinearGradient>
      <KeepAwake />
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  guitar: {
    resizeMode: 'stretch',
    width: 200,
    height: 200,
  },
  featureText: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 4,
    textTransform: 'uppercase',
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
  guitarTunning: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
  },
});

export default App;
