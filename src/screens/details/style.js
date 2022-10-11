import { StatusBar, StyleSheet, } from 'react-native'
import { colors } from '../../res/colors'
import { hp, wp } from '../../res/constants'
import { fonts } from '../../res/fonts'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray
    },
    boldText: {
        fontFamily: fonts.EXTRA_BOLD,
        color: colors.darkYellow,
        fontSize: wp(6),
        width: wp(65),
        alignSelf: 'center',
        textAlign: 'center',
    },
    mediumText: {
        fontFamily: fonts.BOLD,
        color: colors.black,
        fontSize: wp(4),
    },
    tagLine: {
        fontFamily: fonts.REGULAR,
        color: colors.black,
        opacity: 0.5,
        fontSize: wp(4),
        width: wp(85),
        alignSelf: 'center',
        textAlign: 'center',
    },
    subText: {
        fontFamily: fonts.REGULAR,
        color: colors.black,
        opacity: 0.5,
        fontSize: wp(4),
        marginVertical: wp(1)
    },
    headerWrapper: {
        padding: wp(6),
        marginTop: StatusBar.currentHeight,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    backIcon: {
        width: wp(5),
        height: wp(5)
    },
    heartIcon: {
        width: wp(6),
        height: wp(6)
    },
    img: {
        width: wp(60),
        height: wp(60),
        borderRadius: wp(60) / 2,
        alignSelf: 'center'
    },
    imgWrapper: {
        elevation: 4,
        backgroundColor: colors.white,
        alignSelf: 'center',
        borderRadius: wp(60) / 2,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})