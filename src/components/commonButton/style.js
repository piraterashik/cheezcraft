import { StyleSheet, } from 'react-native'
import { colors } from '../../res/colors'
import { wp } from '../../res/constants'
import { fonts } from '../../res/fonts'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkYellow,
        borderRadius: wp(4),
        paddingHorizontal: wp(4),
        paddingVertical: wp(2),
        alignItems: 'center'
    },
    btnText: {
        color: colors.white,
        fontFamily: fonts.EXTRA_BOLD
    }
})