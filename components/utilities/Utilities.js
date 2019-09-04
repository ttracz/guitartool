import * as SoundPlayer from 'react-native-sound-player';

export default {
  getTempo(bpm) {
    if (bpm < 60) {
      return 'Largo';
    }
    if (bpm < 66) {
      return 'Larghetto';
    }
    if (bpm < 76) {
      return 'Adagio';
    }
    if (bpm < 108) {
      return 'Andante';
    }
    if (bpm < 120) {
      return 'Moderato';
    }
    if (bpm < 156) {
      return 'Allegro';
    }
    if (bpm < 176) {
      return 'Vivace';
    }
    if (bpm < 200) {
      return 'Presto';
    }
    if (bpm <= 208) {
      return 'Prestissimo';
    }
  },

  playSound(sound) {
    try {
      SoundPlayer.playSoundFile(sound, 'mp3');
    } catch (e) {
      alert('Sound playback error', e);
    }
  },
};
