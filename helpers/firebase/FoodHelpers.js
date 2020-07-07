import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import firestore from '@react-native-firebase/firestore';

 


export const addingUserMeal = () => {
    const user =  auth().currentUser.uid;
    database()
    .ref('/users/' + user)
    .set({
        name: 'Emad Menkar',
        age: 27,
    })
    .then(() => console.log('Data set.')
    ).catch(err => {
        console.log('err',err)
    })
} 

    export const addingextraMeal = (content, type, date) => {
        
    }

    export const NewaddingextraMeal = (content, type, date) => {
        const user =  auth().currentUser.uid;
        firestore().collection("user_meals").where('type' , "==",type).where('date' , "==",date).where('uid' , "==",user).get().then(function(querySnapshot){
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
        

    export const getUserMeals = () => {
        var userMeals = []
        const user =  auth().currentUser.uid;
        firestore().collection("user_meals").where('uid' , "==",user).get().then(function(querySnapshot){
            if (querySnapshot.size > 0) {
                querySnapshot.forEach(doc => { 
                    userMeals.push(doc.data()) 
                });
            }
            else { 
                  console.log('No Records'); 
            }    
        })
        return userMeals ;
    }

