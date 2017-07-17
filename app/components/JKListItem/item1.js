

import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,

} from 'react-native';


const CellItem = ({ cell_height,img_size,img_source,img_defaultSource,cell_title,cell_stri,onPress}) => {

  return (
      <TouchableOpacity
        style={[styles.container,{height:cell_height}]}
        onPress={onPress}>

        <Image
          style={[styles.img,{width:img_size,height:img_size}]}
          source={img_source}
          defaultSource={img_defaultSource}

        />

        <View style={styles.context}>

          <Text>{cell_title}</Text>
          <Text>{cell_title}</Text>
          {/* <Text>{cell_stri}</Text> */}
        </View>


        <View style={styles.context}>
          <Image
            style={[styles.img,{width:img_size,height:img_size}]}
            source={img_source}
            defaultSource={img_defaultSource}

          />
          {/* <Text>{cell_title}</Text> */}
          {/* <Text>{cell_title}</Text> */}
          {/* <Text>{cell_stri}</Text> */}
        </View>



      </TouchableOpacity>

  );

};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:200,
  },

  context: {
    // justifyContent:'center',
    backgroundColor: 'red',
    position: 'relative',


    top: 0,
    left: 10,
    right: 0,
    bottom:0,



  },
  img:{

    backgroundColor:'green',
  },

});


CellItem.defaultProps = {
  cell_height:100,
  img_size:80,

};

CellItem.propTypes = {
  img_source: React.PropTypes.number,
  img_defaultSource: React.PropTypes.number,
  cell_title: React.PropTypes.string,
  cell_stri: React.PropTypes.string,
  onPress: React.PropTypes.func,
};


export default CellItem;
