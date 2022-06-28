import { Audio } from 'expo-av';
import * as React from 'react';

class NoteManager {
    sound: Audio.Sound | undefined;
    constructor() {
    }

    public async playSound() {
        console.log('Loading Sound')
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/sounds/fs4vh.wav')
        )
        this.sound = sound

        console.log('Playing Sound');
        await sound.playAsync();
    }

}

export default NoteManager