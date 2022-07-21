import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'

interface HomePageProps {
    navigation: NavigationScreenProp<any, any>
}

const HomePage = ({
    navigation,
}: HomePageProps) => {
    return <>
        <View style={styles.container}>
            <Button title="Open level screen" onPress={() => navigation.navigate('LevelPage')} />
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})

export default HomePage