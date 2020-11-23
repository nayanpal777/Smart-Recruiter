/** -----------------------
 * Import API 
 --------------------------*/
import { API } from '../../backend'

/** **************************
 * Admin Login API 
*******************************/
export const admin_login = admin => {
    return fetch(`${API}Admin/login`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(admin)
    })
        .then(res => {
            return res.json();
        })
        .catch(err => {
            console.log(err);
        });
}

/** **************************
 * Admin Logout API 
*******************************/
export const admin_logout = () => {
    return fetch(`${API}Admin/logout`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            return res.json();
        })
        .catch(err => {
            console.log(err);
        })
}

/** ************************************
 * Add Company Details API
****************************************/
export const add_company_details = details => {
    return fetch(`${API}Admin/company/add_company`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(details)
    })
        .then((res) => {
            return res.json();
        })
        .catch(e => {
            console.log(e);
        })
}


/** ***************************************
 * Get Company Details API 
******************************************/
export const get_company_details = () => {
    return fetch(`${API}Admin/company/getDetails`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
        .then((res) => {
            return res.json();
        })
        .catch(e => {
            console.log(e);
        })
}
/*******************************************
 * Delete Company Details API
********************************************/
export const delete_company_detail = (id, next) => (event) => {
    return fetch(`${API}Admin/company/` + id, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
        .then((res) => {
            next();
        })
        .catch(e => {
            alert(e);
        })
}
/** ---------------------------------------
 * Store Data in localstorage
 ------------------------------------------*/
export const localStore = (val, data, next) => {
    if (typeof window !== undefined) {
        localStorage.setItem(val, JSON.stringify(data));
        next();
    }
}
/**
 * Get Data from Local Storage
 */
export const getlocalstore = (val) => {
    let companyData = []
    if (typeof window !== undefined) {
        if (localStorage.getItem(val)) {
            companyData = JSON.parse(localStorage.getItem(val));
        } 
    }
    return companyData;
}

/**
 * Dashboard count
 */
export const dataStoreLocal = (val) => {
    if (typeof window !== undefined) {
        if (localStorage.getItem(val)) {
            return JSON.parse(localStorage.getItem(val)).length;
        }
    }
}

/** ***************************************
 * Get Student Details API 
******************************************/
export const getStudentDetails = () => {
    return fetch(`${API}Admin/StudentDetails`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
        .then((res) => {
            return res.json();
        })
        .catch(e => {
            console.log(e);
        })
}
