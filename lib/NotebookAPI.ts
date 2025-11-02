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

export async function getNotebookInfo(zone:string, name:string) {
    return await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/notebooks/dashboard/gcp/'+zone+'/'+name, {
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

export async function createInstance(name:string) {
    return await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/notebooks/create', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "accelerator_core_count": 2,
            "accelerator_type": "NVIDIA_TESLA_V100",
            "data_disk_size_gb": 100,
            "disk_size_gb": 150,
            "enable_gpu_driver": true,
            "machine_type": "n1-highmem-4",
            "name": name,
            "zone": "us-west1-b"
        })
    })
        .then((res) => {
            //console.log("createInstance() res : ", res);
            return res;
        })
        .catch((error) => {
            console.error("createInstance fetch error", error);
            return error;
        })
}

export async function startInstance(zone:string, name:string) {
    return await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/notebooks/start/'+zone+'/'+name, {
        method: 'POST',
        credentials: 'include',
    })
        .then((res) => {
            return res;
        })
        .catch((error) => {
            console.error("getNotebookList fetch error", error);
            return null;
        })
}

export async function stopInstance(zone:string, name:string) {
    return await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/notebooks/stop/'+zone+'/'+name, {
        method: 'POST',
        credentials: 'include',
    })
        .then((res) => {
            return res;
        })
        .catch((error) => {
            console.error("getNotebookList fetch error", error);
            return null;
        })
}

export async function deleteInstance(zone:string, name:string) {
    return await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/notebooks/'+zone+'/'+name, {
        method: 'DELETE',
        credentials: 'include',
    })
        .then((res) => {
            return res;
        })
        .catch((error) => {
            console.error("getNotebookList fetch error", error);
            return null;
        })
}
