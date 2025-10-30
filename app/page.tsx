'use client';

import {getPermission} from "@/lib/NotebookAPI";
import {useState, useEffect} from "react";
import Image from "next/image";
import SideBar2 from "@/components/SideBar2";
import {useRouter} from "next/navigation";
import Header2 from "@/components/Header2";

export default function Home() {
    //const [status, setStatus] = useState<{ authenticated: boolean; email: string | null; name: string | null } | null>(null);
    const [status, setStatus] = useState<string>('loading');
    const router = useRouter();

    useEffect(() => {
        const checkPermission = () => {
            getPermission()
                .then((data) => {
                    //console.log("Home page getPermission data : ", data.has_permission);
                    if(data.has_permission) {
                        router.push('/dashboard');
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

    return (
        <>
            <SideBar2 menu="dashboard"/>
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
                                    <h2 className="modal__title">권한 확인 중입니다.</h2>
                                    <div className="modal__description" data-node-id="450:25123">
                                        <p>잠시만 기다려주세요.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            ) : status === 'no_permission' ? (
                <main className="demo-content">
                    <div className="modal modal--type-01" data-name="AIOps_02_Dashboards_02(권한확인)" data-node-id="450:25083">

                        <div className="modal__overlay" data-name="popup" data-node-id="450:25115">
                            <div className="modal__backdrop" data-name="dim" data-node-id="450:25116"></div>

                            <div className="modal__container modal__container--size-sm" data-name="Modal" data-node-id="450:25117">

                                <div className="modal__close-wrapper" data-name="close" data-node-id="450:25118">
                                    <button className="modal__close-btn" data-name="icon_close" data-node-id="450:25119" type="button" aria-label="닫기"
                                            onClick={() => setStatus('error')}>
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
                                            <p>Vertex AI Workbench 사용 권한이 필요합니다.</p>
                                            <p>담당 팀에 권한을 신청해주세요!</p>
                                        </div>
                                    </div>

                                    <div className="modal__actions" data-name="btn" data-node-id="450:25125">
                                        <button className="btn btn-primary btn-md" data-name="BTN" data-node-id="reflect:450:25127" type="button"
                                                onClick={() => setStatus('error')}>
                                            <span className="btn-text">확인</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            ) : (
                <>
                    <div className="container">
                        <Header2 />
                        <section className="container-body">
                            <div className="title-area">
                                <div className="contents-breadcrumb">
                                    <span className="contents-breadcrumb-item">HOME</span>
                                    <span className="contents-breadcrumb-separator">
                                        <Image src="/images/icon/icon_arrow_right.svg" alt="구분자" width={20} height={20}/>
                                    </span>
                                    <span className="contents-breadcrumb-item">Dashboards</span>
                                </div>

                                <div className="contents-title">
                                    <p className="contents-title-text">Dashboards</p>
                                </div>
                            </div>

                            <div className="contents-area">
                                <div className="contents-area-wrapper">
                                    <div className="contents-area-inner">
                                        <div className="contents-area-title">
                                            <p className="contents-area-title-line">Vertex AI Workbench 인스턴스 생성은</p>
                                            <p className="contents-area-title-line">권한이 있어야 진행할 수 있습니다.</p>
                                            <p className="contents-area-subtitle">담당자에게 권한을 요청하세요.</p>
                                        </div>
                                        {/*
                                        <div className="contents-area-actions">
                                            <button className="btn btn-primary btn-lg">
                                                <span className="btn-text">인스턴스 생성하기</span>
                                            </button>
                                            <button className="btn btn-secondary btn-lg">
                                                <span className="btn-text">가이드 문서 보기</span>
                                            </button>
                                            <button className="btn btn-secondary btn-lg">
                                                <span className="btn-text">기술 지원팀에 문의하기</span>
                                            </button>
                                            <p className="contents-area-link">
                                                <span className="contents-area-link-text">Don't have an account? </span>
                                                Sign up
                                            </p>
                                        </div>
                                        */}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </>
            )}
        </>
    );
}
