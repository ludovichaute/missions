import firebase from 'firebase';
// import '@firebase/firestore';
import base from './firebase';

function fetchData() {

  return new Promise((resolve, reject) => {
    let db = base.firestore();
    // console.log(db);
    //Disable deprecated features
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection("projects")
    .get()
    .then((querySnapshot) => {
        let allData = [];
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            // Push data in the state
            allData.push({name:data.name});
        });
        resolve(allData);
    })
    .catch(err => {
      console.log('Error getting document', err);
      reject(err);
    });
  });


}

export default fetchData;
