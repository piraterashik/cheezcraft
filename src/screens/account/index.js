import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style'
import { Spacer } from '../../components/spacer'
import { recipe } from '../../res/data'
import { wp } from '../../res/constants'
import DropShadow from 'react-native-drop-shadow'
import CommonButton from '../../components/commonButton'
import { useDispatch, useSelector } from 'react-redux';

const Account = (props) => {

    //#region redux
    const dispatch = useDispatch();
    const appReducers = useSelector(state => state.appReducers);
    //#endregion redux

    const renderItem = ({ item }) => {
        return (
            <DropShadow
                style={{
                    shadowColor: "#c5c5c5",
                    shadowOffset: {
                        width: 0,
                        height: 0,
                    },
                    shadowOpacity: 0.4,
                    shadowRadius: 5,
                }}
            >
                <View>
                    <View style={styles.listWrapper}>
                        <Spacer space={wp(14)} />
                        <Text style={styles.mediumText}>{item.title}</Text>
                        <Spacer space={wp(2)} />
                        <CommonButton onPress={() => props.navigation.navigate("Details", { item: item })} label="View" />
                    </View>
                    <Image source={item.img} style={styles.img} />
                </View>
            </DropShadow>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <Text style={styles.boldText}>My Profile</Text>
                <Text style={styles.tagLine}>Your likes</Text>
            </View>
            <Spacer space={wp(2)} />
            <FlatList
                data={appReducers.recipe.filter(i => i.liked)}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{ justifyContent: 'space-between', marginHorizontal: wp(4) }}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
            <Spacer space={wp(6)} />
        </View>
    )
}

export default Account