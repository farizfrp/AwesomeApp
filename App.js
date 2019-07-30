import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'git onlen bos   httpgggggs://lh3.googleusercontent.com/oh2cY65O0SFRrQ_5whAsyb-SX1KtoeSBp1hPGZj8hlUsySBIVjmSIVapJlCwrjTAN6c45Q6PcXSEw1JP7O-ILi9MfSde-C9sAjmwklYBpn57C2pxKMqdj6nhYSAxtLKRQW-8zNXhhJXqLzVt9EcBfPMOufbZ7kVsdxIJTYpRpUTcBtFqaFT9zNOxHgVq4LMpymLJRWTdZs1jDMGvgHMjK65R-8-GhhE15NGJQbFdw1ZE-uh0INb9ogwn8FNr00fXVLgxiq-_-Pl6a8xBpKW_tUMjhhrpfXwqREIDgQ-ADt9TqYQTkc9UQBFY0F0b3zMYRuXmPdeI9GeTXdlyf845t90F1PTX6RQf43lzSdaZ5TCK1S2iR14GUf-5hzMQKluyJXpZUFk29MdKYHkvBwlAWFH2TtwFZMGtomKD34lbpHOqu8WWgk4cIdaJuiBxKCh0yJh3aabDNGCFugqz_O9ApCfMvjVo0aKEf-UzUeBbW84fvR-2TI3yaxjQcwqV8pa8Fc6c7sIV8lCGXFKG7_ULcw8zkIKvbD3IYTCf5_i_IsvAA4XkBFmOpzVSaUK9Q8M0lxmpYfVo3O9rWgPB4K0Xsy4xTk4afN-p6cbUUbFivYvRmgSeH3Vy2qnrHJdTgWJ-M0bBEt3GYqHgk_sn5v8OWeBNvq6PLblbkV7YZaLiqu0DJy73JHGM1xAdTrwCXT1oLyURWvzinzQrP30o_gZsaGIYdQ=w346-h750-no'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Bananas);