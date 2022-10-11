import { StatusBar, StyleSheet, } from 'react-native'
import { colors } from '../../res/colors'
import { wp } from '../../res/constants'
import { fonts } from '../../res/fonts'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray
    },
    headerWrapper: {
        padding: wp(4),
        marginTop: StatusBar.currentHeight,
    },
    boldText: {
        fontFamily: fonts.EXTRA_BOLD,
        color: colors.black,
        textTransform: 'uppercase',
        fontSize: wp(8),
        textAlign: 'center',
    },
    mediumText: {
        fontFamily: fonts.BOLD,
        color: colors.darkYellow,
        fontSize: wp(4),
        textAlign: 'center',
        height: wp(15)
    },
    tagLine: {
        fontFamily: fonts.REGULAR,
        color: colors.black,
        fontSize: wp(4),
        textAlign: 'center',
    },
    img: {
        width: wp(30),
        height: wp(30),
        borderRadius: wp(30) / 2,
        position: 'absolute',
        alignSelf: 'center'
    },
    listWrapper: {
        backgroundColor: colors.white,
        width: wp(44),
        padding: wp(4),
        borderRadius: wp(8),
        marginVertical: wp(6),
    }
})