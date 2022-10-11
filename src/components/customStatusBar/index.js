import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import { styles } from "./style";

export default (props) => {
    const { backgroundColor = colors.pink } = props;
    return (
        <View style={[styles.statusBar, { backgroundColor }]}>
            <SafeAreaView>
                <StatusBar
                    translucent
                    backgroundColor={backgroundColor}
                    barStyle="dark-content"
                    {...props}
                />
            </SafeAreaView>
        </View>
    );
};


