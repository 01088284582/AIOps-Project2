'use client';

//로그인한 사용자의 GCP 필수 권한 체크
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

//로그인한 사용자의 JN인스턴스 목록 조회
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

//인스턴스 상세정보 조회
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

//인스턴스 생성 요청
export async function createInstance(name:string, type:string) {
    let param;
    //setting A
    if(type === "A") {
        param = {
            "accelerator_core_count": 2,
            "accelerator_type": "NVIDIA_TESLA_V100",
            "data_disk_size_gb": 100,
            "disk_size_gb": 150,
            "enable_gpu_driver": true,
            "machine_type": "n1-highmem-4",
            "name": name,
            "zone": "us-west1-b"
        }
    }
    //setting B
    else if(type === "B") {
        param = {
            "accelerator_core_count": 4,
            "accelerator_type": "NVIDIA_TESLA_V100",
            "data_disk_size_gb": 100,
            "disk_size_gb": 150,
            "enable_gpu_driver": true,
            "machine_type": "n1-highmem-4",
            "name": name,
            "zone": "us-west1-b"
        }
    }

    return await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/notebooks/create', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(param)
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

//인스턴스 기동 요청
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

//인스턴스 정지 요청
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

//인스턴스 삭제 요청
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
