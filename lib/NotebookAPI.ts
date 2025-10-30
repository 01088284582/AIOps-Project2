'use client';

export function getPermission() {
    return fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/permissions/notebooks', {
        method: 'GET',
        credentials: 'include',
    })
        .then((response) => response.json())
        .then((data) => {
            //console.log("permissions data : ", data);
            //console.log("permissions data email : ", data.email);
            //console.log("permissions data project_id : ", data.project_id);
            //console.log("permissions data has_permission : ", data.has_permission);

            return data;
        })
        .catch((error) => {
            console.error("getPermission fetch error : ", error);
        })
}

export async function getNotebookList() {
    return await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/notebooks/instance/list', {
        method: 'GET',
        credentials: 'include',
    })
        .then((res) => res.json())
        .catch((error) => {
            console.error("getNotebookList fetch error", error);
            return null;
        })
        .then((data) => {
            //console.log("getNotebookList() data : ", data);
            return data;
        });
}

export function getNotebookInfo(zone:string, name:string) {
    return fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/notebooks/dashboard/gcp/'+zone+'/'+name, {
        method: 'GET',
        credentials: 'include',
    })
        .then((res) => res.json())
        .catch((error) => {
            console.error("getNotebookList fetch error", error);
            return null;
        })
        .then((data) => {
            //console.log("getNotebookList() data : ", data);
            return data;
        });
}

