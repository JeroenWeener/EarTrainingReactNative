import { Audio } from "expo-av"
import React, { useState } from "react"
import { StyleSheet } from 'react-native'
import { Button, View } from "react-native"
import { NavigationScreenProp } from "react-navigation"
import NoteService, { Notes } from "../../services/NoteService"

interface LevelProps {
    navigation: NavigationScreenProp<any, any>
}

const Level = ({ navigation }: LevelProps) => {
    const [noteService] = useState<NoteService>(NoteService.getInstance())

    return (
        <View style={styles.container}>
            <Button title="Play Sound" onPress={() => noteService.playSound(Notes.C4)} />
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