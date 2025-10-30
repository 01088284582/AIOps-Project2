'use client';

import Image from "next/image";
import {useEffect, useState} from "react";
import SideBar2 from "@/components/SideBar2";
import {getNotebookInfo, getNotebookList, getPermission} from "@/lib/NotebookAPI";
import {useRouter} from "next/navigation";
import Header2 from "@/components/Header2";

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

                                    // @ts-ignore
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
            <div className="modal modal--type-02 hide" data-name="AIOps_04_인스턴스 생성" data-node-id="450:21049">
                <div className="modal__overlay" data-name="popup" data-node-id="450:21255">
                    <div className="modal__backdrop" data-name="dim" data-node-id="450:21256"></div>

                    <div className="modal__container modal__container--size-lg" data-name="Modal_02"
                         data-node-id="450:21257">
                        <div className="modal__popup-top" data-name="PopupTop" data-node-id="450:21258">
                            <h2 className="modal__title modal__title--lg"
                                data-node-id="reflect:I450:21258;395:12205">타이틀 영역</h2>
                            <button className="modal__close-btn modal__close-btn--absolute" data-name="icon_X"
                                    data-node-id="reflect:I450:21258;395:12154" type="button" aria-label="닫기">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="1.5"
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
                                            <input type="text" className="input-field" placeholder="인스턴스명을 입력해 주세요."/>
                                        </div>
                                        <div className="modal__input-hint" data-name="txt" data-node-id="450:21324">
                                            <p className="modal__input-hint-text" data-node-id="450:21325">영문 최대 00자,
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
                                    <button className="btn btn-secondary btn-lg" type="button">취소</button>
                                    <button className="btn btn-primary btn-lg" type="button">확인</button>
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

                        <div className="modal__container modal__container--size-sm" data-name="Modal"
                             data-node-id="450:25117">

                            <div className="modal__close-wrapper" data-name="close" data-node-id="450:25118">
                                <button className="modal__close-btn" data-name="icon_close" data-node-id="450:25119"
                                        type="button" aria-label="닫기"
                                        onClick={() => router.push('/')}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="1.5"
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