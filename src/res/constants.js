//#region import
import { Dimensions, Platform, StatusBar } from 'react-native'
import { widthPercentageToDP as WP, heightPercentageToDP as HP } from 'react-native-responsive-screen';
//#endregion

var { height, width } = Dimensions.get('window');
export const hp = HP;
export const wp = WP;
export const DEVICE = {
    DEVICE_HEIGHT: height,
    DEVICE_WIDTH: width,
    ANDROID_DEVICE_HEIGHT:
        Platform.OS === 'android' && Platform.Version > 26
            ? Dimensions.get('screen').height - StatusBar.currentHeight
            : Dimensions.get('window').height,
};
export const DEVICE_OS = Platform.OS;
export const APP_NAME = "Cheez Craft";
export const TAGLINE1 = "Sweet Dreams Are Made of Cheese. \n One New Cheesy Dish Revealed Everyday.";
