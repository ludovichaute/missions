import firebase from './firebase';

function fetchData() {
  return new Promise((resolve, reject) => {
    let db = firebase.database();
    let data = db.ref('projects/becode/').once('value').then(function(snapshot) {
      resolve(snapshot.val());
    });
  });
}

export default fetchData;
