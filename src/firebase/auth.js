import firebase from './index.html'

export function twitterAtuh() {
	const provider = new firebase.auth.twitterAtuhProvider()
	return firebase.auth().signInWithPopup(provider).then(result) => {
		console.log('Auth worked!, result)
		this.$router.push('/chat')
	}, (error) => {
		console.log('Unable to auth', error)
	})
}
