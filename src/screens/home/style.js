import { StatusBar, StyleSheet, } from 'react-native'
import { colors } from '../../res/colors'
import { DEVICE, hp, wp } from '../../res/constants'
import { fonts } from '../../res/fonts'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray,
    },
    boldText: {
        fontFamily: fonts.EXTRA_BOLD,
        color: colors.black,
        textTransform: 'uppercase',
        fontSize: wp(8),
        // textAlign: 'center',
    },
    tagLine: {
        fontFamily: fonts.REGULAR,
        color: colors.black,
        fontSize: wp(4),
        textAlign: 'center',
    },
    headerWrapper: {
        paddingHorizontal: wp(4),
        marginTop: StatusBar.currentHeight,
        alignItems: 'center'
    },
    listWrapper: {
        borderRadius: wp(10),
        backgroundColor: colors.white,
        marginVertical: wp(2)
    },
    proBlack: {
        fontFamily: fonts.BOLD,
        height: wp(25),
        color: colors.darkYellow,
        fontSize: wp(6.5),
    },
    regular: {
        fontFamily: fonts.REGULAR,
        color: colors.black,
        fontSize: wp(3.5),
    },
    proRegular: {
        fontFamily: fonts.REGULAR,
        color: colors.black,
        fontSize: wp(4),
    },
    proMedium: {
        fontFamily: fonts.MEDIUM,
        color: colors.black,
        fontSize: wp(3.5),
    },
    mainImage: {
        width: wp(70),
        height: hp(40),
        borderTopLeftRadius: wp(10),
        borderTopRightRadius: wp(10)
    },
    carousel: {
        flex: 1,
        overflow: 'visible',
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightArrow: {
        width: wp(6),
        height: wp(6)
    },
    dotStyle: {
        width: wp(2),
        height: wp(2),
        borderRadius: wp(2) / 2,
        marginHorizontal: -wp(1),
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    heartIcon: {
        width: wp(6),
        height: wp(6)
    }
})