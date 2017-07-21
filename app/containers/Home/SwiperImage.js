

import {
  View,
  Image,
  Dimensions

} from 'react-native';
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

export const SwiperImage = ({renderList}) => (
  <Swiper style={styles.wrapper} height={160} autoplay>
    {
      renderList.map((item,idx)=>{
        return(
          <View key={idx} style={styles.slide}>
            <Image resizeMode='stretch' style={styles.image} source={item} />
          </View>

        )
      })
    }
  </Swiper>
);

const styles = {
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  image: {
    width,
    flex: 1
  }
}
