import { Audio } from "expo-av"

class NoteService {
    static myInstance: NoteService | null = null;

    static getInstance() : NoteService {
        if (NoteService.myInstance == null) {
            NoteService.myInstance = new NoteService();
        }
        return this.myInstance!;
    }

    private noteFileNames: string[] = [
        "c1vh", "cs1vh", "d1vh", "ds1vh", "e1vh", "f1vh", "fs1vh", "g1vh", "gs1vh", "a1vh", "as1vh", "b1vh",
        "c2vh", "cs2vh", "d2vh", "ds2vh", "e2vh", "f2vh", "fs2vh", "g2vh", "gs2vh", "a2vh", "as2vh", "b2vh",
        "c3vh", "cs3vh", "d3vh", "ds3vh", "e3vh", "f3vh", "fs3vh", "g3vh", "gs3vh", "a3vh", "as3vh", "b3vh",
        "c4vh", "cs4vh", "d4vh", "ds4vh", "e4vh", "f4vh", "fs4vh", "g4vh", "gs4vh", "a4vh", "as4vh", "b4vh",
        "c5vh", "cs5vh", "d5vh", "ds5vh", "e5vh", "f5vh", "fs5vh", "g5vh", "gs5vh", "a5vh", "as5vh", "b5vh",
        "c6vh", "cs6vh", "d6vh", "ds6vh", "e6vh", "f6vh", "fs6vh", "g6vh", "gs6vh", "a6vh", "as6vh", "b6vh",
        "c7vh", "cs7vh", "d7vh", "ds7vh", "e7vh", "f7vh", "fs7vh", "g7vh", "gs7vh", "a7vh", "as7vh", "b7vh",
    ]
    private notesArray: Note[] = this.noteFileNames.map((noteFileName) => new Note(noteFileName))

    private constructor() {
        console.log('notesArray', this.notesArray.length)
        console.log('Notes', Object.keys(Notes))
    }

    playSound = async (note: Notes) => {
        console.log('Hello world!')
        // const { sound } = await Audio.Sound.createAsync(
        //     require('../assets/sounds/fs4vh.ogg')
        // )
        // await sound.playAsync();
        // this.notes[Notes.A4].play()
        this.notesArray[note].play()
    }
}

class Note {
    private sound!: Audio.Sound
    constructor(fileName: string){
        this.initSound(fileName)
    }

    async initSound(fileName : string)
    {
        const {sound} = await Audio.Sound.createAsync(
            require('./../assets/sounds/' + fileName + '.ogg')
        )
        this.sound = sound
    }

    play = async () => {
        await this.sound.playAsync();
    }
}

export enum Notes {
    C1, Cs1, D1, Ds1, E1, F1, Fs1, G1, Gs1, A1, As1, B1,
    C2, Cs2, D2, Ds2, E2, F2, Fs2, G2, Gs2, A2, As2, B2,
    C3, Cs3, D3, Ds3, E3, F3, Fs3, G3, Gs3, A3, As3, B3,
    C4, Cs4, D4, Ds4, E4, F4, Fs4, G4, Gs4, A4, As4, B4,
    C5, Cs5, D5, Ds5, E5, F5, Fs5, G5, Gs5, A5, As5, B5,
    C6, Cs6, D6, Ds6, E6, F6, Fs6, G6, Gs6, A6, As6, B6,
    C7, Cs7, D7, Ds7, E7, F7, Fs7, G7, Gs7, A7, As7, B7
}

export default NoteService