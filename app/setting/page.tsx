'use client';

import Image from "next/image";
import {useEffect, useState} from "react";
import SideBar2 from "@/components/SideBar2";
import {getNotebookInfo, getNotebookList, getPermission} from "@/lib/NotebookAPI";
import {useRouter} from "next/navigation";

function SettingPage() {
    const [status, setStatus] = useState<string>('loading');
    const [jnList, setJnList] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const checkPermission = () => {
            getPermission()
                .then((data) => {
                    console.log("Home page getPermission data : ", data.has_permission);
                    if(data.has_permission) {
                        getData();
                    }
                    else{
                        setStatus('no_permission');
                    }
                })
                .catch((error) => {
                    setStatus('error');
                    console.error("getPermission error", error)
                });
        };

        const getData = () => {
            getNotebookList()
                .then((data) =>{
                    if(data.length > 0){
                        setStatus('finish');
                        //console.log("getNotebookList data : ", data);
                        for(let i=0; i<data.length; i++){
                            const zone:string = data[i].zone;
                            const name:string = data[i].name;
                            console.log("getNotebookList data zone: ", zone);
                            console.log("getNotebookList data name: ", name);
                            getNotebookInfo(zone, name)
                                .then((data2) =>{
                                    console.log("getNotebookInfo : ", data2);
                                    console.log("getNotebookInfo instance : ", data2.instance);
                                    console.log("getNotebookInfo name : ", data2.name);
                                    console.log("getNotebookInfo state : ", data2.state);
                                    console.log("getNotebookInfo proxy_uri : ", data2.proxy_uri);
                                    console.log("getNotebookInfo create_time : ", data2.create_time);
                                    console.log("getNotebookInfo update_time : ", data2.update_time);
                                    console.log("getNotebookInfo labels : ", data2.labels);
                                    console.log("getNotebookInfo metadata : ", data2.metadata);
                                    console.log("getNotebookInfo tags : ", data2.tags);
                                    data[i].id = i;

                                    setJnList([...jnList, data[i]]);
                                })
                                .catch((error) => {
                                    console.error("getNotebookInfo error", error)
                                });
                        }

                        setStatus('finish');
                    }
                    else{
                        setStatus('nodata');
                    }
                })
                .catch((error) => {
                    console.error("getNotebookList error", error)
                });
        }

        checkPermission();

    }, []);
    console.log("jnList : ", jnList);


    return(
        <>
            <SideBar2 menu="setting"/>
            {status === 'loading' ? (
                <div className="modal modal--type-01" data-name="AIOps_02_Dashboards_02(권한확인)" data-node-id="450:25083">
                    <div className="modal__overlay" data-name="popup" data-node-id="450:25115">
                        <div className="modal__backdrop" data-name="dim" data-node-id="450:25116"></div>

                        <div className="modal__container modal__container--size-sm" data-name="Modal" data-node-id="450:25117">

                            <div className="modal__loading-image">
                                <img src="../../images/image_loading.png" alt="Loading" />
                            </div>

                            <div className="modal__loading-image modal__loading-image--original">
                                <img src="../../images/loading_2.gif" alt="Loading animation" className="loading-img-original" />
                            </div>

                            <div className="modal__content" data-name="con" data-node-id="450:25120">
                                <div className="modal__title-section" data-name="text" data-node-id="450:25121">
                                    <h2 className="modal__title">인스턴스 조회 중 입니다.</h2>
                                    <div className="modal__description" data-node-id="450:25123">
                                        <p>잠시만 기다려주세요.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            ) : status === 'no_permission' ? (
                    <div className="modal modal--type-01" data-name="AIOps_02_Dashboards_02(권한확인)" data-node-id="450:25083">

                        <div className="modal__overlay" data-name="popup" data-node-id="450:25115">
                            <div className="modal__backdrop" data-name="dim" data-node-id="450:25116"></div>

                            <div className="modal__container modal__container--size-sm" data-name="Modal" data-node-id="450:25117">

                                <div className="modal__close-wrapper" data-name="close" data-node-id="450:25118">
                                    <button className="modal__close-btn" data-name="icon_close" data-node-id="450:25119" type="button" aria-label="닫기"
                                            onClick={() => router.push('/')}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>

                                <div className="modal__content" data-name="con" data-node-id="450:25120">

                                    <div className="modal__title-section" data-name="text" data-node-id="450:25121">
                                        <h2 className="modal__title">권한 확인이 필요해요.</h2>
                                        <div className="modal__description" data-node-id="450:25123">
                                            <p>이 기능을 사용하려면</p>
                                            <p>'Vertex AI Workbench 사용 권한'이 필요합니다.</p>
                                            <p>담당 팀에 권한을 신청해주세요!</p>
                                        </div>
                                    </div>

                                    <div className="modal__actions" data-name="btn" data-node-id="450:25125">
                                        <button className="btn btn-primary btn-md" data-name="BTN" data-node-id="reflect:450:25127" type="button"
                                                onClick={() => router.push('/')}>
                                            <span className="btn-text">확인</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            ) : status === 'finish' ? (
                <div className="container">
                    <section className="container-body">
                        <div className="title-area">
                            <div className="contents-breadcrumb">
                                <span className="contents-breadcrumb-item">HOME</span>
                                <span className="contents-breadcrumb-separator">
                                    <Image src="/images/icon/icon_arrow_right.svg" alt="구분자" width={20} height={20}/>
                                </span>
                                <span className="contents-breadcrumb-item">Juputer 설정</span>
                            </div>

                            <div className="contents-title">
                                <p className="contents-title-text">Juputer 설정</p>
                                <button className="btn btn-primary btn-md">
                                    <span className="btn-text">인스턴스 생성</span>
                                </button>
                            </div>
                        </div>

                        <div className="contents-area">
                            <div className="table">
                                <div className="table__header">
                                    <div className="table__header-cell table__header-cell--name">
                                        <span>인스턴스 이름</span>
                                        <svg className="table__sort-icon" viewBox="0 0 15 15" width="15" height="15">
                                            <use href="#icon-sort"></use>
                                        </svg>
                                    </div>
                                    <div className="table__header-cell table__header-cell--actions">
                                        <div className="table__header-action">기동
                                            <svg className="table__sort-icon" viewBox="0 0 15 15" width="15"
                                                 height="15">
                                                <use href="#icon-sort"></use>
                                            </svg>
                                        </div>
                                        <div className="table__header-action">중지
                                            <svg className="table__sort-icon" viewBox="0 0 15 15" width="15"
                                                 height="15">
                                                <use href="#icon-sort"></use>
                                            </svg>
                                        </div>
                                        <div className="table__header-action">실행
                                            <svg className="table__sort-icon" viewBox="0 0 15 15" width="15"
                                                 height="15">
                                                <use href="#icon-sort"></use>
                                            </svg>
                                        </div>
                                        <div className="table__header-action">삭제
                                            <svg className="table__sort-icon" viewBox="0 0 15 15" width="15"
                                                 height="15">
                                                <use href="#icon-sort"></use>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="table__body">
                                    <div className="table__row">
                                        <div className="table__cell table__cell--name">
                                            <span className="table__cell-text">Test JupyterLab</span>
                                            <span className="badge-status badge-status-active">ACTIVE</span>
                                        </div>
                                        <div className="table__cell table__cell--actions">
                                            <div className="table__action-item">
                                                <button className="table__action-btn table__action-btn--start">기동
                                                </button>
                                            </div>
                                            <div className="table__action-item">
                                                <button className="table__action-btn table__action-btn--stop">중지
                                                </button>
                                            </div>
                                            <div className="table__action-item">
                                                <button className="table__action-btn table__action-btn--execute">실행
                                                </button>
                                            </div>
                                            <div className="table__action-item">
                                                <button className="table__action-btn table__action-btn--delete">삭제
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="table__row">
                                        <div className="table__cell table__cell--name">
                                            <span className="table__cell-text">Test JupyterLab</span>
                                            <span className="badge-status badge-status-provisioning">PROVISIONING</span>
                                        </div>
                                        <div className="table__cell table__cell--actions">
                                            <div className="table__action-item">
                                                <button className="table__action-btn table__action-btn--start">기동
                                                </button>
                                            </div>
                                            <div className="table__action-item">
                                                <button className="table__action-btn table__action-btn--stop">중지
                                                </button>
                                            </div>
                                            <div className="table__action-item">
                                                <button className="table__action-btn table__action-btn--execute">실행
                                                </button>
                                            </div>
                                            <div className="table__action-item">
                                                <button className="table__action-btn table__action-btn--delete">삭제
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="table__row">
                                        <div className="table__cell table__cell--name">
                                            <span className="table__cell-text">AIOps1</span>
                                            <span className="badge-status badge-status-stopped">STOPPED</span>
                                        </div>
                                        <div className="table__cell table__cell--actions">
                                            <div className="table__action-item">
                                                <button className="table__action-btn table__action-btn--start">기동
                                                </button>
                                            </div>
                                            <div className="table__action-item">
                                                <button className="table__action-btn table__action-btn--stop">중지
                                                </button>
                                            </div>
                                            <div className="table__action-item">
                                                <button className="table__action-btn table__action-btn--execute">실행
                                                </button>
                                            </div>
                                            <div className="table__action-item">
                                                <button className="table__action-btn table__action-btn--delete">삭제
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            ) : (
                <div className="container">
                    <section className="container-body">
                        <div className="title-area">
                            <div className="contents-breadcrumb">
                                <span className="contents-breadcrumb-item">HOME</span>
                                <span className="contents-breadcrumb-separator">
                                    <Image src="/images/icon/icon_arrow_right.svg" alt="구분자" width={20} height={20}/>
                                </span>
                                <span className="contents-breadcrumb-item">Juputer 설정</span>
                            </div>

                            <div className="contents-title">
                                <p className="contents-title-text">Juputer 설정</p>
                                <button className="btn btn-primary btn-md">
                                    <span className="btn-text">인스턴스 생성</span>
                                </button>
                            </div>
                        </div>

                        <div className="contents-area">
                            <div className="table">
                                <div className="table__header">
                                    <div className="table__header-cell table__header-cell--name">
                                        <span>인스턴스를 생성하세요.</span>
                                        <svg className="table__sort-icon" viewBox="0 0 15 15" width="15" height="15">
                                            <use href="#icon-sort"></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            )}
        </>
    )
}


export default SettingPage;