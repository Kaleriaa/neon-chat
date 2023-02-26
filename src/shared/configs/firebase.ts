import { FirebaseOptions, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig: FirebaseOptions = {
    apiKey: 'AIzaSyAi42cvD04yAn_6dT80qgmpSLsGngpcpx0',
    authDomain: 'neon-chat-34f5c.firebaseapp.com',
    projectId: 'neon-chat-34f5c',
    storageBucket: 'neon-chat-34f5c.appspot.com',
    messagingSenderId: '572790753318',
    appId: '1:572790753318:web:64eb630057e8e2c692bee7',
}

const app = initializeApp(firebaseConfig)
export const fireStore = getFirestore(app)
export const auth = getAuth(app)
