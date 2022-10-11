import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from './style'
import { APP_NAME, DEVICE, hp, TAGLINE1, TAGLINE2, wp } from '../../res/constants'
import { images } from '../../res/images'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { recipe } from '../../res/data'
import { Spacer } from '../../components/spacer'
import DropShadow from "react-native-drop-shadow";
import { colors } from '../../res/colors'
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../../redux/actions/appActions'

const Home = (props) => {
    const flatListRef = useRef();
    const [activeSlide, setActiveSlide] = useState(0)
    const [random, setRandom] = useState(0)

    //#region redux
    const dispatch = useDispatch();
    const appReducers = useSelector(state => state.appReducers);
    //#endregion redux

    function PaginationView() {
        return (
            <Pagination
                dotsLength={recipe.length}
                activeDotIndex={activeSlide}
                dotStyle={styles.dotStyle}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }

    const toggleLikes = (item) => {
        dispatch(toggleLike(appReducers.recipe, item.id));
        setRandom(Math.random());
    }

    const renderItem = ({ item }) => {
        return (
            <DropShadow
                style={{
                    shadowColor: "#c5c5c5",
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                }}
            >
                <View style={styles.listWrapper}>
                    <Image source={item.img} style={styles.mainImage} />
                    <TouchableOpacity onPress={() => { props.navigation.navigate("Details", { item: item }) }} style={{ padding: wp(6) }}>
                        <View style={styles.flexRow}>
                            <Text style={styles.proMedium}>{item.day}</Text>
                            <Spacer row={wp(1.5)} />
                            <Image source={images.rightArrow} style={styles.rightArrow} />
                        </View>
                        <Spacer space={wp(1)} />
                        <Text style={styles.proBlack}>{item.title}</Text>
                        <Spacer space={wp(1)} />
                        <Text style={styles.proRegular}>{item.duration}</Text>
                        <Spacer space={wp(1)} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { toggleLikes(item) }}
                        style={{ bottom: wp(6), right: wp(6), position: 'absolute', }}>
                        <Image source={item.liked ? images.heartFill : images.heart} style={styles.heartIcon} />
                    </TouchableOpacity>
                </View>
            </DropShadow>
        )
    }

    return (
        <ImageBackground source={images.homeBg} style={styles.container}>
            <LinearGradient colors={['rgba(255,255,255,0.53)', 'transparent',]} style={{ flex: 1, }}>
                <StatusBar translucent backgroundColor={colors.transparent} barStyle='dark-content' />
                <View style={styles.headerWrapper}>
                    <Text style={styles.boldText}>{APP_NAME}</Text>
                    <Spacer space={wp(0.5)} />
                    <Text style={styles.tagLine}>{TAGLINE1}</Text>
                </View>
                <Spacer space={hp(1)} />
                <View>
                    <Carousel
                        style={styles.carousel}
                        ref={flatListRef}
                        extraData={random}
                        data={appReducers.recipe}
                        inactiveSlideOpacity={0.4}
                        renderItem={renderItem}
                        itemWidth={wp(70)}
                        containerWidth={DEVICE.DEVICE_WIDTH}
                        sliderWidth={DEVICE.DEVICE_WIDTH}
                        onSnapToItem={(index) => setActiveSlide(index)}
                    />
                </View>
                <PaginationView />
            </LinearGradient>
        </ImageBackground>
    )
}

export default Home