import { initializeApp } from "firebase/app"
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth"
import { firebaseConfig } from "./firebase"

class AppConfig {
	constructor() {
		console.log(`${this.constructor.name} constructor created `)
	}

	async init(): Promise<boolean> {
		console.log("#app.init:  started")
		// const app = initializeApp(firebaseConfig)
		// const auth = getAuth(app)
		// await setPersistence(auth, browserLocalPersistence)
		// if (auth.currentUser) {
		// 	await auth.currentUser.getIdToken(false)
		// }
		console.log("#app.init:  Completed")
		return true
	}
	getBaseUrl() {
		// const baseUrl = process.env.REACT_APP_BASE_URL || "https://xfone-seller.herokuapp.com"
		// console.log(`ENV BaseUrl = ${baseUrl}`)
		// if (window.location.hostname === "localhost") {
		// 	return "http://localhost:8080"
		// }
		return "https://xfone-seller-dev.herokuapp.com"
		// return ""
	}
}

export default new AppConfig()
