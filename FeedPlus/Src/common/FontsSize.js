import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StyleSheet,Dimensions, PixelRatio} from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT,} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
    const newSize = size * scale 
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
  }
  
const FontsSize = {
    size10:hp(1.01),
    size12:hp(1.55),
    size14:hp(1.81),
    size16:hp(2.05),
    size18:hp(2.33),
    size20:hp(2.57),
    size22:hp(2.85),
    size24:hp(3.10),
    size26:hp(3.33),
    size28:hp(3.60),
    size30:hp(3.85),
    size34:hp(4.38),
    size42:hp(5.38),

    ImageH12:hp(1.55),
    ImageH14:hp(1.81),
    ImageH16:hp(2.05),
    ImageH18:hp(2.33),
    ImageH20:hp(2.57),
    ImageH22:hp(2.85),
    ImageH24:hp(3.10),
    ImageH28:hp(3.60),
    ImageH30:hp(3.88),
    ImageH35:hp(4.53),
    ImageH38:hp(4.95),
    ImageH40:hp(5.14),
    ImageH45:hp(5.75), 
    ImageH50:hp(6.42),
    ImageH55:hp(7.06),
    ImageH60:hp(7.70),
    ImageH65:hp(8.35),
    ImageH70:hp(9.0),
    ImageH80:hp(10.25),
    ImageH85:hp(10.90),
    ImageH90:hp(11.55),
    ImageH95:hp(12.17),
    ImageH100:hp(12.80),

    ImageW12:wp(3.10),
    ImageW14:wp(3.57),
    ImageW16:wp(4.10),
    ImageW18:wp(4.60),
    ImageW20:wp(5.10),
    ImageW22:wp(5.65),
    ImageW24:wp(6.10),
    ImageW28:wp(7.10),
    ImageW30:wp(7.70),
    ImageW35:wp(8.94),
    ImageW38:wp(9.70),
    ImageW40:wp(10.20),
    ImageW45:wp(11.48), 
    ImageW50:wp(12.75),
    ImageW55:wp(14.03),
    ImageW60:wp(15.25),
    ImageW65:wp(10.20),
    ImageW70:wp(17.84),
    ImageW80:wp(20.65),
    ImageW85:wp(21.65),
    ImageW90:wp(22.95),
    ImageW95:wp(23.0),
    ImageW100:wp(25.45),

    normalize12:normalize(11.50),
    normalize14:normalize(13),
    normalize16:normalize(14.50),
    normalize18:normalize(16.50),
    normalize20:normalize(17.50),
    normalize22:normalize(19.50),
    normalize24:normalize(21),

   
};
export default FontsSize;