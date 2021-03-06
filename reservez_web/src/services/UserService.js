import {methods, requestInit, urlBackend} from "./RequestHelper";
import {swalErr, Toast} from "./AlertHelper";
import {SaveUser} from "./StorageHelper";

export async function Logon(credentials) {
    return await fetch(`${urlBackend}/api/Users/Login`, requestInit(methods.POST, credentials))
        .then(response => {
            return response.json().then(
                body => {
                    if (response.ok) {
                        Toast.fire({text: 'Connexion Réussie'})
                        SaveUser(body);
                    } else {
                        swalErr.fire({text: 'Connexion Impossible!'})
                    }
                    return response.ok;
                }
            )
        });
}