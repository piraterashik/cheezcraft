import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import { APP_NAME, DEVICE, wp } from '../../res/constants'
import { Spacer } from '../../components/spacer'
import { images } from '../../res/images'
import { colors } from '../../res/colors'
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../../redux/actions/appActions'

const Details = (props) => {
    const { item } = props.route.params;
    //#region redux
    const dispatch = useDispatch();
    const appReducers = useSelector(state => state.appReducers);
    //#endregion redux

    const toggleLikes = () => {
        dispatch(toggleLike(appReducers.recipe, item.id));
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image source={images.back} style={styles.backIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleLikes()}>
                    <Image source={item.liked ? images.heartFill : images.heart} style={styles.heartIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.imgWrapper}>
                <Image source={item.img} style={styles.img} />
            </View>
            <Spacer space={wp(2)} />
            <Text style={styles.boldText}>{item.title}</Text>
            <Spacer space={wp(1)} />
            <Text style={styles.tagLine}>{item.tagline}</Text>
            <View style={{ padding: wp(6) }}>
                <Text style={styles.mediumText}>Ingredients</Text>
                {item.ingredients.map((item) => (
                    <View style={styles.flexRow}>
                        <View style={{ backgroundColor: colors.black, width: wp(1), height: wp(1), borderRadius: wp(1) / 2, }} />
                        <Spacer row={wp(1)} />
                        <Text style={styles.subText}>{item}</Text>
                    </View>

                ))}
                <Spacer space={wp(2)} />
                <Text style={styles.mediumText}>Recipe Preparation</Text>
                {item.preparation.map((item) => (
                    <View style={styles.flexRow}>
                        <Text style={styles.subText}>{item}</Text>
                    </View>

                ))}
            </View>
        </ScrollView>
    )
}

export default Details