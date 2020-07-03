
// import firebase from 'firebase'

// class Fire {


//     addMeal = meal =>{
//         const theMeal = {
//             content : meal.content,
//             user: meal.user ,
//             createdAt : firebase.database.ServerValue.TIMESTAMP,
//             type : meal.type,
//             day : meal.day,
 
//         }
//         this.db.push(theMeal)
//     }

//     get db(){
//         return firebase.database().ref('meals')
//     }

//     parse= meal =>{
//         const {content, user ,createdAt ,type ,day} = meal.val()
//         return {
//             content, user ,createdAt ,type ,day
//         }
//     }

//     get = callback =>{
//         this.db.on('child_added',snapshot => callback(this.parse(snapshot)))
//     }

//     get uid() {
//         return (firebase.auth().currentUser).uid
//     }
// }

// export default new Fire()