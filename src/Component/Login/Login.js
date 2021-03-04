import * as firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from './firebase.config';
import './Login.css';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email} 
            setLoggedInUser(signedInUser);
            storeAuthToken();
            history.replace(from);
            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    const storeAuthToken =() =>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
          sessionStorage.setItem('token',idToken);
          }).catch(function(error) {
            // Handle error
          });
    }



    return (
        <>


<div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <form class="form-signin">
              <button class="btn btn-lg btn-google btn-block text-uppercase googleSignIn " type="submit"   onClick={handleGoogleSignIn}><i class="fab fa-google mr-2 "></i> Sign in with Google</button>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>



            
           
        </>
    );
};

export default Login;





















// import React, { useContext } from 'react';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';
// import {UserContext} from '../../App';
// import { useHistory, useLocation } from 'react-router-dom';

// const Login = () => {
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//     const history = useHistory();
//     const location = useLocation();
//     const { from } = location.state || { from: { pathname: "/" } };
    
//     if(firebase.apps.length === 0){
//         firebase.initializeApp(firebaseConfig);
//     }
    
//     const handleGoogleSignIn = () => {
//         var provider = new firebase.auth.GoogleAuthProvider();
//         firebase.auth().signInWithPopup(provider).then(function(result) {
//             const {displayName, email} = result.user;
//             const signedInUser = {name: displayName, email} 
//             setLoggedInUser(signedInUser);
//             history.replace(from);
//             // ...
//           }).catch(function(error) {
//             const errorMessage = error.message;
//             console.log(errorMessage);
//           });
//     }
//     return (
//         <div>
//             <h1>This is Login</h1>
//             <button onClick={handleGoogleSignIn}>Google Sign in</button>
//         </div>
//     );
// };

// export default Login;