import React,{Component} from 'react'
import {View,style,Image} from 'react-native'
import Header from './Header';
import AlbumArt from './AlbumArt';
import TrackDetails from './TrackDetails';
import SeekBar from './SeekBar';
import Controls from './Controls';

export default class App extends Component {
  render() {
    debugger
    return (
      <View style={{ flex: 5,backgroundColor: 'grey'}}>
        <Header style={{ flex: 2,color:"black"}} message="Playing from local database" />
        <Image style={{flex: .9,height:350,width:250,marginLeft:65,marginRight:20}} source={require('./img/backgroudimage.jpeg')} />
        <TrackDetails title="Stressed Out"
          artist="Twenty One Pilots" />
        <SeekBar  />
        <Controls />
      </View>
    );
  }
}
