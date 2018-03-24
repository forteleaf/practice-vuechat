import firebase from 'firebase'

export const config = {
    apiKey: "AIzaSyClNl1kBMjZ1UeNlL1XwAcMnBcmT_k9hG0",
    authDomain: "vuechat-77de4.firebaseapp.com",
    databaseURL: "https://vuechat-77de4.firebaseio.com",
    projectId: "vuechat-77de4",
    storageBucket: "vuechat-77de4.appspot.com",
    messagingSenderId: "475817591562"
}

firebase.initializeApp(config)

var firebaseRef = firebase.database().ref()
export default firebase
export var chatRef = firebaseRef.child('chat')
