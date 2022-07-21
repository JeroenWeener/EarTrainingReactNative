import { Audio } from "expo-av"
import React, { useState } from "react"
import { StyleSheet } from 'react-native'
import { Button, View } from "react-native"
import { NavigationScreenProp } from "react-navigation"
import NoteService from "../../services/NoteService"

interface LevelProps {
    navigation: NavigationScreenProp<any, any>
}

const LevelPage = ({

}: LevelProps) => {
    const [noteService] = useState<NoteService>(new NoteService())

    const playSound = async () => {
        noteService.playSound()
        const { sound } = await Audio.Sound.createAsync(require('../../assets/sounds/fs4vh.wav'))
        await sound.playAsync()
    }

    return (
        <View style={styles.container}>
            <Button title="Play Sound" onPress={playSound} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})

export default LevelPage