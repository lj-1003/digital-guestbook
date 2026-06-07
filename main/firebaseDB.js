// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { collection, query, orderBy, addDoc, getDocs, deleteDoc, updateDoc,
    doc} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js"
import { getFirestore }  from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore (app);

  //Add a rsvp
export async function addMessage(messageData) {
    try {
        const docRef = await addDoc (collection(db, "messages"), messageData);
        return {id: docRef.id, ...messageData}
    }   catch (error) {
        console.error("error adding message:", error);
    }
}

//Get RSVPS
export async function getMessage() {
    const messages = [];
    try {

        const q = query(
            collection(db, "messages"),
            orderBy("createdAt", "desc")
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc)=>{
            messages.push({id: doc.id, ...doc.data()})
        })
    } catch(error) {
        console.error("error retrieving messages: ", error);
    }
    return messages; 
}