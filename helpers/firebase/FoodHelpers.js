import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'



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

export const addingextraMeal = () => {
    const user =  auth().currentUser.uid;
    database()
    .ref('/users/' + user)
    .update({
        profession: 'programmer',
    })
    .then(() => console.log('Data updated.'));
 
} 