import firebase from 'firebase'
import firestore from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyADXVRYfoeew_F-nMGUWRjps1BfpgQk-Og',
  authDomain: 'vue-smoothies-cfdec.firebaseapp.com',
  databaseURL: 'https://vue-smoothies-cfdec.firebaseio.com',
  projectId: 'vue-smoothies-cfdec',
  storageBucket: 'vue-smoothies-cfdec.appspot.com',
  messagingSenderId: '729035118148',
  appId: '1:729035118148:web:bb898b47ef107263d70e11',
  measurementId: 'G-RL1DYD72M2'
}

const FirebaseApp = firebase.initializeApp(firebaseConfig)
// FirebaseApp.firestore().settings({ timestampInSnapshots: true }) // without putting that line of code in after the that previous line of code , your app my get in troubles on running it
export default FirebaseApp.firestore()
