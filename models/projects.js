import firebase from 'firebase';
import base from '../firebase';

let Models = class {
  constructor() {
    this.db = base.firestore();
    this.db.settings({
      timestampsInSnapshots: true
    });
  }
}

export default class Projects extends Models {

  all() {
    this.db.collection("projects")
    .get()
    .then((querySnapshot) => {
        let allData = [];
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            // Push data in the state
            allData.push({name:data.name});
        });
        return allData;
    });
  }

}
