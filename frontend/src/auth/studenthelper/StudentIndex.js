/** -----------------------
 * Import API 
 --------------------------*/
import { API } from '../../backend'

/** **************************
 * Student SignUp API 
*******************************/
export const studentSignUp = student => {
    return fetch(`${API}Student/StudentSignUp`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
        .then((res) => {
            return res.json();
        })
        .catch(err => {
            console.log(err);
        });
}
/** **************************
 * Student Login or SignIn API 
*******************************/
export const studentSignIn = student => {
    return fetch(`${API}Student/StudentLogin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
        .then((res) => {
            return res.json();
        })
        .catch(err => {
            console.log(err);
        });

}
/** **************************
 * Student Login or SignIn API 
*******************************/
export const sendOTPOnmail = email => {
    return fetch(`${API}Student/emailauthentication/verifyEmail`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(email)
    })
        .then((res) => {
            return res.json();
        })
        .catch(err =>{
            console.log(err);
        });
}