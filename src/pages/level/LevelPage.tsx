import { Audio } from "expo-av"
import React, { useState } from "react"
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { Button, View, Text } from "react-native"
import { NavigationScreenProp } from "react-navigation"
import NoteService from "../../services/NoteService"
import Icon from 'react-native-vector-icons/MaterialIcons'

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

    const playGroundingSequence = async () => {
        console.log('Play grounding sequence stub')
    }

    const playChord = async () => {
        console.log('Play chord stub')
    }

    return (
        <View style={styles.container}>
            <Button title="Play Sound" onPress={playSound} />

            <View>
                <TouchableOpacity style={styles.upperHalf}></TouchableOpacity>
                <View style={styles.lowerHalf}>
                    <TouchableOpacity
                        style={styles.lowerLeftHalf}
                        onPress={playChord}
                    >
                        <Icon size={answerDialSize / 3} style={styles.lowerLeftButton} name='replay' />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.lowerRightHalf}
                        onPress={playGroundingSequence}
                    >
                        <Icon size={answerDialSize / 3} style={styles.lowerRightButton} name='anchor' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const answerDialSize = .8 * Math.min(Dimensions.get('window').width, Dimensions.get('window').height)
const defaultColor = 'rgb(242, 242, 242)'
const borderWidth = 10

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    upperHalf: {
        backgroundColor: '#222',
        height: answerDialSize / 2,
        borderTopLeftRadius: answerDialSize / 2,
        borderTopRightRadius: answerDialSize / 2,
        borderWidth: borderWidth,
        borderColor: defaultColor,
    },
    lowerHalf: {
        flexDirection: 'row',
        borderWidth: borderWidth,
        borderColor: defaultColor,
    },
    lowerLeftHalf: {
        backgroundColor: '#222',
        height: answerDialSize / 2,
        width: answerDialSize / 2,
        borderBottomLeftRadius: answerDialSize / 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: borderWidth,
        borderColor: defaultColor,
    },
    lowerRightHalf: {
        backgroundColor: '#222',
        height: answerDialSize / 2,
        width: answerDialSize / 2,
        borderBottomRightRadius: answerDialSize / 2,
        borderLeftWidth: borderWidth,
        borderColor: defaultColor,
    },
    lowerLeftButton: {
        paddingLeft: '20%',
        paddingBottom: '20%',
        color: defaultColor,
    },
    lowerRightButton: {
        paddingRight: '20%',
        paddingBottom: '20%',
        color: defaultColor,
    },
})

export default LevelPage