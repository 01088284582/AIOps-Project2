'use client';

import Image from "next/image";
import {useEffect, useState} from "react";
import SideBar2 from "@/components/SideBar2";
import {
    createInstance,
    deleteInstance,
    getNotebookList,
    getPermission,
    startInstance,
    stopInstance
} from "@/lib/NotebookAPI";
import {useRouter} from "next/navigation";
import Header2 from "@/components/Header2";
import Link from "next/link";

interface JnInfo {
    instance: string,
    name: string,
    state: string,
    zone: string,
    proxy_uri: string
}

function SettingPage() {
    const [status, setStatus] = useState<string>('loading');
    const [jnList, setJnList] = useState<JnInfo[]>([]);
    const [regYn, setRegYn] = useState<boolean>(false);
    const [instanceName, setInstanceName] = useState<string>("");
    const router = useRouter();

    function openRegModal() {
        setRegYn(true);
    }

    function registInstance() {
        console.log("instanceName : ", instanceName);
        setStatus('loading');
        if(instanceName !== ""){
            createInstance(instanceName)
                .then((res) => {
                    setStatus('finish');
                    console.log("createInstance res : ", res);
                    console.log("res.status ", res.status);
                    console.log("res.status ", res.message);
                    if(res.ok){
                        initJnList();
                    }
                    else {
                        if (res.status == 400){
                            alert("영문 최대 63자, 소문자, 숫자, 하이픈(-)만 입력가능합니다.");
                        }
                        else if (res.status == 409){
                            alert("한개의 인스턴스만 생성가능합니다.");
                        }
                        else{
                            alert("오류가 발생했습니다.("+res.status+")");
                        }
                    }
                })
                .catch((error) => {
                    setStatus('error');
                    console.error("createInstance error", error)
                });
        }
        setRegYn(false);
    }

    function runInstance(zone: string, name: string) {
        setStatus('loading');
        startInstance(zone, name)
            .then((res) => {
                setStatus('finish');
                console.log("createInstance res : ", res);
                if(res.ok){
                    initJnList();
                }
            })
    }

    function downInstance(zone: string, name: string) {
        setStatus('loading');
        stopInstance(zone, name)
            .then((res) => {
                setStatus('finish');
                console.log("downInstance res : ", res);
                if(res.ok){
                    initJnList();
                }
            })
    }

    function removeInstance(zone: string, name: string) {
        setStatus('loading');
        deleteInstance(zone, name)
            .then((res) => {
                setStatus('finish');
                console.log("downInstance res : ", res);
                if(res.ok){
                    initJnList();
                }
            })
    }

    async function initJnList() {
        setStatus('loading');
        getNotebookList()
            .then((data) =>{
                if(data.length > 0){
                    setJnList(data);
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

    useEffect(() => {
        const checkPermission = () => {
            getPermission()
                .then((data) => {
                    //console.log("Home page getPermission data : ", data.has_permission);
                    if(data.has_permission) {
                        initJnList();
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

        checkPermission();

    }, []);

    console.log("jnList : ", jnList);

    return(
        <>
            <div className={`modal modal--type-02 ${regYn ? "" : "hide"}`} data-name="AIOps_04_인스턴스 생성" data-node-id="450:21049">
                <div className="modal__overlay" data-name="popup" data-node-id="450:21255">
                    <div className="modal__backdrop" data-name="dim" data-node-id="450:21256"></div>

                    <div className="modal__container modal__container--size-lg" data-name="Modal_02"
                         data-node-id="450:21257">
                        <div className="modal__popup-top" data-name="PopupTop" data-node-id="450:21258">
                            <h2 className="modal__title modal__title--lg"
                                data-node-id="reflect:I450:21258;395:12205">인스턴스 등록</h2>
                            <button className="modal__close-btn modal__close-btn--absolute" data-name="icon_X"
                                    data-node-id="reflect:I450:21258;395:12154" type="button" aria-label="닫기"
                                    onClick={() => setRegYn(false)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>

                        <div className="modal__popup-body" data-name="PopupBody" data-node-id="450:21259">
                            <div className="modal__popup-body-content" data-name="content" data-node-id="450:21260">
                                <div className="modal__resource-card" data-name="con" data-node-id="450:21261">
                                    <div className="modal__info-box" data-name="info" data-node-id="450:21265">
                                        <div className="modal__info-header" data-name="이름" data-node-id="450:21266">
                                            <span className="modal__info-title">EG - Tesla - T4</span>
                                        </div>
                                        <div className="modal__info-content" data-node-id="450:21268">
                                            <div className="modal__info-column" data-name="td" data-node-id="450:21269">
                                                <div className="modal__info-label" data-name="1"
                                                     data-node-id="450:21270">
                                                    <span className="modal__info-label-text">CPU</span>
                                                </div>
                                                <div className="modal__info-value" data-name="2"
                                                     data-node-id="450:21272">
                                                    <div className="modal__info-value-content" data-node-id="450:21273">
                                                        <span className="modal__info-value-number">4</span>
                                                        <span className="modal__info-value-unit">CPU</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="modal__info-divider" data-name="Divider"
                                                 data-node-id="450:21278"></div>

                                            <div className="modal__info-column" data-name="td" data-node-id="450:21279">
                                                <div className="modal__info-label" data-name="1"
                                                     data-node-id="450:21280">
                                                    <span className="modal__info-label-text">Memory</span>
                                                </div>
                                                <div className="modal__info-value" data-name="2"
                                                     data-node-id="450:21282">
                                                    <div className="modal__info-value-content" data-node-id="450:21283">
                                                        <span className="modal__info-value-number">6.5</span>
                                                        <span className="modal__info-value-unit">GB</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="modal__info-divider" data-name="Divider"
                                                 data-node-id="450:21288"></div>

                                            <div className="modal__info-column" data-name="td" data-node-id="450:21289">
                                                <div className="modal__info-label" data-name="1"
                                                     data-node-id="450:21290">
                                                    <span className="modal__info-label-text">Data Disk</span>
                                                </div>
                                                <div className="modal__info-value" data-name="2"
                                                     data-node-id="450:21292">
                                                    <div className="modal__info-value-content" data-node-id="450:21293">
                                                        <span className="modal__info-value-number">150</span>
                                                        <span className="modal__info-value-unit">GB</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal__input-section" data-name="con" data-node-id="450:21314">
                                    <div className="modal__input-wrapper" data-node-id="450:21317">
                                        <div className="input-wrapper" data-name="input" data-node-id="450:21323">
                                            <input type="text" className="input-field" placeholder="인스턴스명을 입력해 주세요."
                                            value={instanceName} onChange={(e) => setInstanceName(e.target.value)}/>
                                        </div>
                                        <div className="modal__input-hint" data-name="txt" data-node-id="450:21324">
                                            <p className="modal__input-hint-text" data-node-id="450:21325">영문 최대 63자,
                                                소문자, 숫자, 하이픈(-)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal__popup-bottom" data-name="PopupBottom" data-node-id="reflect:391:12411">
                            <div className="modal__popup-bottom-content" data-name="content"
                                 data-node-id="reflect:391:12192">
                                <div className="modal__divider" data-name="Divider"
                                     data-node-id="reflect:391:12037"></div>
                                <div className="modal__actions modal__actions--split" data-name="CTA_Area"
                                     data-node-id="reflect:391:12218">
                                    <button className="btn btn-secondary btn-lg" type="button" onClick={() => setRegYn(false)}>취소</button>
                                    <button className="btn btn-primary btn-lg" type="button" onClick={() => registInstance()}>확인</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SideBar2 menu="setting"/>
            {status === 'loading' ? (
                <div className="modal modal--type-01" data-name="AIOps_02_Dashboards_02(권한확인)" data-node-id="450:25083">
                    <div className="modal__overlay" data-name="popup" data-node-id="450:25115">
                        <div className="modal__backdrop" data-name="dim" data-node-id="450:25116"></div>

                        <div className="modal__container modal__container--size-sm" data-name="Modal"
                             data-node-id="450:25117">

                            <div className="modal__loading-image">
                                <img src="../../images/image_loading.png" alt="Loading"/>
                            </div>

                            <div className="modal__loading-image modal__loading-image--original">
                                <img src="../../images/loading_2.gif" alt="Loading animation"
                                     className="loading-img-original"/>
                            </div>

                            <div className="modal__content" data-name="con" data-node-id="450:25120">
                                <div className="modal__title-section" data-name="text" data-node-id="450:25121">
                                    <h2 className="modal__title">실행 중 입니다.</h2>
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

                        <div className="modal__container modal__container--size-sm" data-name="Modal"
                             data-node-id="450:25117">

                            <div className="modal__close-wrapper" data-name="close" data-node-id="450:25118">
                                <button className="modal__close-btn" data-name="icon_close" data-node-id="450:25119"
                                        type="button" aria-label="닫기"
                                        onClick={() => router.push('/')}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>

                            <div className="modal__content" data-name="con" data-node-id="450:25120">

                                <div className="modal__title-section" data-name="text" data-node-id="450:25121">
                                    <h2 className="modal__title">권한 확인이 필요해요.</h2>
                                    <div className="modal__description" data-node-id="450:25123">
                                        <p>이 기능을 사용하려면</p>
                                        <p>Vertex AI Workbench 사용 권한이 필요합니다.</p>
                                        <p>담당 팀에 권한을 신청해주세요!</p>
                                    </div>
                                </div>

                                <div className="modal__actions" data-name="btn" data-node-id="450:25125">
                                    <button className="btn btn-primary btn-md" data-name="BTN"
                                            data-node-id="reflect:450:25127" type="button"
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
                    <Header2/>
                    <section className="container-body">
                        <div className="title-area">
                            <div className="contents-breadcrumb">
                                <span className="contents-breadcrumb-item">HOME</span>
                                <span className="contents-breadcrumb-separator">
                                    <Image src="/images/icon/icon_arrow_right.svg" alt="구분자" width={20} height={20}/>
                                </span>
                                <span className="contents-breadcrumb-item">Jupyter 설정</span>
                            </div>

                            <div className="contents-title">
                                <p className="contents-title-text">Jupyter 설정</p>
                                <button className="btn btn-primary btn-md" onClick={() => openRegModal()}>
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
                                {jnList.map((item) => (
                                    <div className="table__row" key={item.instance}>
                                        <div className="table__cell table__cell--name">
                                            <span className="table__cell-text">{item.name}</span>
                                            <span className={`badge-status badge-status-${item.state == "ACTIVE" ? "active"
                                                : item.state == "STOPPED" ? "stopped" : "provisioning"}`}>{item.state}</span>
                                        </div>
                                        <div className="table__cell table__cell--actions">
                                            <div className="table__action-item">
                                                <button className={`table__action-btn table__action-btn--start ${item.state == "STOPPED" ? "" : "hide"}`}
                                                        onClick={() => runInstance(item.zone, item.name)}>기동
                                                </button>
                                            </div>
                                            <div className="table__action-item">
                                                <button className={`table__action-btn table__action-btn--stop ${item.state == "ACTIVE" ? "" : "hide"}`}
                                                        onClick={() => downInstance(item.zone, item.name)}>중지
                                                </button>
                                            </div>
                                            <div className="table__action-item">
                                                <Link href={"http://"+item.proxy_uri} target="_blank" rel="noopener noreferrer">
                                                    <button className={`table__action-btn table__action-btn--execute ${item.state == "ACTIVE" ? "" : "hide"}`}>실행
                                                    </button>
                                                </Link>
                                            </div>
                                            <div className="table__action-item">
                                                <button className={`table__action-btn table__action-btn--delete ${item.state == "STOPPED" ? "" : "hide"}`}
                                                        onClick={() => removeInstance(item.zone, item.name)}>삭제
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            ) : (
                <div className="container">
                    <Header2/>
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
                                <button className="btn btn-primary btn-md" onClick={() => openRegModal()}>
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