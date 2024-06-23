import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Share from 'react-native-share';

import Tts from 'react-native-tts';

Tts.setDefaultLanguage('en-GB');
// function voiceErr() {
//   try {
//     Tts.setDefaultVoice('com.apple.ttsbundle.Samantha-compact');
//   } catch (err) {
//     console.log(err);
//   }
// }
// voiceErr();

// Tts.setDefaultVoice('com.apple.ttsbundle.Samantha-compact');
Tts.setDefaultRate(0.4);
Tts.setDefaultPitch(1.2);

const Quotes = () => {
  const {
    container,
    quoteContainer,
    textStyle,
    topStyle,
    bottomStyle,
    touchableStyle,
  } = styles;
  const [quotes, setQuote] = useState('loading...');
  const [text, setText] = useState('Random Quotes...');
  const [author, setAuthor] = useState('unknown author');

  const url = 'https://type.fit/api/quotes';

  useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then(res => res.json())
        .then(data => setQuote(data))
        .catch(err => console.log(err));
    };
    fetchData();
  }, []);

  const handlePress = () => {
    let id = Math.floor(Math.random() * quotes.length);

    const {...text} = quotes.map(item => item.text);
    // console.log(text);
    const {...author} = quotes.map(item => item.author);
    // console.log(author);

    // console.log(text[id]);
    // console.log(author[id]);
    setAuthor(author[id]);
    setText(text[id]);
  };

  const handleShare = () => {
    const options = {
      message: text,
      author: author,
    };
    Share.open(options)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <View style={container}>
      <Text style={textStyle}>Random Quote Generator</Text>
      <View style={quoteContainer}>
        <View style={topStyle}>
          <Text style={textStyle}>
            "{text}" {'--->'} {author}
          </Text>
        </View>
        <View style={bottomStyle}>
          <TouchableOpacity
            style={touchableStyle}
            onPress={() => {
              Tts.stop();
              Tts.speak(text + 'by' + author, {
                androidParams: {
                  KEY_PARAM_PAN: -1,
                  KEY_PARAM_VOLUME: 0.5,
                  KEY_PARAM_STREAM: 'STREAM_MUSIC',
                },
              });
            }}>
            <Text style={textStyle}>Speaker</Text>
          </TouchableOpacity>

          <TouchableOpacity style={touchableStyle} onPress={handlePress}>
            <Text style={textStyle}>Generate</Text>
          </TouchableOpacity>

          <TouchableOpacity style={touchableStyle} onPress={handleShare}>
            <Text style={textStyle}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Quotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  quoteContainer: {
    margin: 5,
    padding: 10,
    backgroundColor: '#79BCFF',
    borderRadius: 10,
    minHeight: 300,
    width: 350,
  },
  textStyle: {
    fontSize: 22,
    color: 'black',
  },
  topStyle: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  touchableStyle: {
    backgroundColor: '#1B84EC',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
});
