import { Audio } from "expo-av"
import React, { useState } from "react"
import { Dimensions, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Button, View, Text } from "react-native"
import { NavigationScreenProp } from "react-navigation"
import NoteService, { Notes } from "../../services/NoteService"
import Icon from 'react-native-vector-icons/MaterialIcons'

interface LevelProps {
    navigation: NavigationScreenProp<any, any>
    chords: string[]
}

const LevelPage = ({
    chords = ['C', 'F', 'G'],
}: LevelProps) => {
    const [noteService] = useState<NoteService>(NoteService.getInstance())

    const playSound = async () => {
        noteService.playSound(Notes.E4)
        const { sound } = await Audio.Sound.createAsync(require('../../assets/sounds/fs4vh.wav'))
        await sound.playAsync()
    }

    const playGroundingSequence = async () => {
        console.log('Play grounding sequence stub')
    }

    const playChord = (chord: string) => {
        console.log(`Play chord ${chord} stub`)
    }

    return (
        <View style={styles.container}>
            <Button title="Play Sound" onPress={playSound} />

            <View style={styles.outerRing}>
                <View style={styles.innerCircle}>
                    <TouchableOpacity style={styles.upperHalf}></TouchableOpacity>
                    <View style={styles.lowerHalf}>
                        <TouchableOpacity
                            style={styles.lowerLeftHalf}
                            onPress={() => playChord('[last played]')}
                        >
                            <Icon size={answerDialSize / 6} style={styles.lowerLeftButton} name='replay' />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.lowerRightHalf}
                            onPress={playGroundingSequence}
                        >
                            <Icon size={answerDialSize / 6} style={styles.lowerRightButton} name='anchor' />
                        </TouchableOpacity>
                    </View>
                </View>

                {chords.map((chord, chordIndex) => {
                    const phase = chordIndex * 2 * Math.PI / chords.length
                    const inwardPullFactor = .96 // magic number to align chord buttons with outer ring
                    const x = Math.sin(phase) * answerDialSize / 2 * inwardPullFactor
                    const y = -Math.cos(phase) * answerDialSize / 2 * inwardPullFactor

                    return <TouchableHighlight
                        key={chord}
                        style={[styles.chordButton, { transform: [{ translateX: x }, { translateY: y }] }]}
                        underlayColor={'#ddd'}
                        onPress={() => playChord(chord)}
                    >
                        <Text style={styles.chordButtonText}>{chord}</Text>
                    </TouchableHighlight>
                })}
            </View>
        </View>
    )
}

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const answerDialSize = windowWidth > windowHeight ? windowHeight * .5 : windowWidth * .8 // take up 80% width, or 50% height in landscape layouts
const defaultColor = 'rgb(242, 242, 242)'
const chordButtonSize = answerDialSize / 6

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outerRing: {
        height: answerDialSize,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: chordButtonSize / 2,
        borderRadius: answerDialSize / 2,
        borderWidth: answerDialSize / 30,
        borderColor: '#222',
    },
    innerCircle: {
        height: answerDialSize * 3 / 4,
        aspectRatio: 1,
    },
    upperHalf: {
        backgroundColor: '#222',
        height: '50%',
        borderTopLeftRadius: 10000,
        borderTopRightRadius: 10000,
        borderBottomWidth: answerDialSize / 100,
        borderColor: defaultColor,
    },
    lowerHalf: {
        flexDirection: 'row',
        height: '50%',
    },
    lowerLeftHalf: {
        backgroundColor: '#222',
        height: '100%',
        width: '50%',
        borderBottomLeftRadius: 10000,
        borderRightColor: defaultColor,
        borderRightWidth: answerDialSize / 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lowerRightHalf: {
        backgroundColor: '#222',
        height: '100%',
        width: '50%',
        borderBottomRightRadius: 10000,
        borderLeftColor: defaultColor,
        borderLeftWidth: answerDialSize / 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lowerLeftButton: {
        marginLeft: '20%',
        marginBottom: '20%',
        color: defaultColor,
    },
    lowerRightButton: {
        marginRight: '20%',
        marginBottom: '20%',
        color: defaultColor,
    },
    chordButton: {
        position: 'absolute',
        backgroundColor: defaultColor,
        borderRadius: chordButtonSize / 2,
        aspectRatio: 1,
        width: chordButtonSize,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chordButtonText: {
        color: '#222',
        fontSize: answerDialSize / 10,
    }
})

export default LevelPage