import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

export const addingSugarRecord = (content, type, date) => {
    const user =  auth().currentUser.uid;
    firestore().collection("user_sugars").where('type' , "==",type).where('date' , "==",date).where('uid' , "==",user).get().then(function(querySnapshot){
        if (querySnapshot.size === 1) {
            querySnapshot.forEach(doc => {
                firestore()
                .collection('user_meals')
                .doc(doc.id)
                .update({ 
                    content: content,
                })
                .then(() => {
                console.log('User updated!');
                });
            });
        }
        else {
            firestore()
            .collection('user_meals')
            .add({
                type:type ,
                date : date, 
                uid : user,
                content: content,
            })
            .then(() => {
              console.log('User added!');
            });
        } 
    })
}