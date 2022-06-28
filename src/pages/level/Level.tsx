import { Audio } from "expo-av"
import React from "react"
import { StyleSheet } from 'react-native'
import { Button, View } from "react-native"
import { NavigationScreenProp } from "react-navigation"

interface LevelProps {
    navigation: NavigationScreenProp<any, any>
}

const Level = ({ navigation }: LevelProps) => {
    const [sound, setSound] = React.useState<Audio.Sound>()

    const playSound = async () => {
        console.log('Loading sound')
        const { sound } = await Audio.Sound.createAsync(require('../../assets/sounds/fs4vh.wav'))
        setSound(sound)
        console.log('Playing sound')
        await sound.playAsync()
    }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading sound')
                sound.unloadAsync()
            }
            : undefined
    }, [sound])

    return (
        <View style={styles.container}>
            <Button title="Play Sound" onPress={playSound} />
            <Button title="Go to another screen" onPress={() => navigation.navigate('AnotherScreen')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})

export default Level