'use client';

import Image from "next/image";
import {useEffect, useState} from "react";
import SideBar2 from "@/components/SideBar2";
import {getNotebookInfo, getNotebookList, getPermission} from "@/lib/NotebookAPI";
import {useRouter} from "next/navigation";
import Header2 from "@/components/Header2";

function DashboardPage() {
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
                        for(let i=0; i<data.length; i++){
                            console.log("getNotebookList data : ", data[i]);
                            const zone:string = data[i].zone;
                            const name:string = data[i].name;
                            console.log("getNotebookList data zone: ", zone);
                            console.log("getNotebookList data name: ", name);
                            getNotebookInfo(zone, name)
                                .then((data2) =>{
                                    //time info
                                    data[i].create_time = data2.create_time;
                                    data[i].update_time = data2.update_time;

                                    //labels
                                    data[i].consumer_project_id = data2.labels.consumer_project_id;
                                    data[i].notebook_product = data2.labels.notebooks_product;

                                    //metadata
                                    data[i].idle_timeout_seconds = data2.metadata.idle_timeout_seconds;
                                    data[i].proxy_url = data2.metadata.proxy_url;
                                    data[i].version = data2.metadata.version;

                                    //tags
                                    data[i].notebook_instance =  data2.tags.length > 0 ? data2.tags[0] : '-' ;

                                    //usages
                                    data[i].cpu_percent = data2.metrics.cpu.usage_percent;
                                    data[i].gpu_percent = data2.metrics.gpu.usage_percent;
                                    data[i].memory_percent = data2.metrics.memory.usage_percent;
                                    data[i].memory_usage = data2.metrics.memory.usage_total;
                                    data[i].memory_tatal = data2.metrics.memory.capacity_total;
                                    data[i].disk_percent = data2.metrics.disk.usage_percent;
                                    data[i].disk_usage = data2.metrics.disk.usage_total;
                                    data[i].disk_tatal = data2.metrics.disk.capacity_total;

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
                    setStatus('error');
                    console.error("getNotebookList error", error)
                });
        }

        checkPermission();

    }, []);
    //console.log("jnList : ", jnList);

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
                                        <p>Vertex AI Workbench 사용 권한이 필요합니다.</p>
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
                    <Header2/>
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
                                <button className="btn btn-primary btn-md hide">
                                    <span className="btn-text">새로고침</span>
                                </button>
                            </div>
                        </div>
                        <div className="contents-area">

                            {jnList.map((item) => (
                                <div className="instance-box" key={item.instance}>
                                    <div className="instance-header">
                                        <div className="instance-title">
                                            <h3 className="instance-name">{item.name}</h3>
                                            <span className={`badge-status badge-status-${item.state == "ACTIVE" ? "active" 
                                                : item.state == "STOPPED" ? "stopped" : "provisioning"}`}>{item.state}</span>
                                        </div>
                                        <div className="instance-timestamp">
                                            <div className="timestamp-item">
                                                <span className="timestamp-label">생성시간</span>
                                                <span className="timestamp-value">{item.create_time}</span>
                                            </div>
                                            <div className="timestamp-item active">
                                                <span className="timestamp-label">업데이트시간</span>
                                                <span className="timestamp-value">{item.update_time}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="instance-stats">
                                        <div className="stats-card">
                                            <div className="stats-title">CPU 사용율</div>
                                            <div className="stats-value">
                                                <span className="value">{item.cpu_percent}</span>
                                                <span className="unit">%</span>
                                            </div>
                                            <div className="stats-bar">
                                                <div className="stats-bar-progress" data-color="yellow"
                                                     style={{width: item.cpu_percent+"%"}}></div>
                                            </div>
                                        </div>

                                        <div className="stats-card">
                                            <div className="stats-title">GPU 사용율</div>
                                            <div className="stats-value">
                                                <span className="value">{item.gpu_percent}</span>
                                                <span className="unit">%</span>
                                            </div>
                                            <div className="stats-bar">
                                                <div className="stats-bar-progress" data-color="red"
                                                     style={{width: item.gpu_percent+"%"}}></div>
                                            </div>
                                        </div>

                                        <div className="stats-card">
                                            <div className="stats-title">메모리 사용량</div>
                                            <div className="stats-value">
                                                <span className="value">{item.memory_usage}</span>
                                                <span className="unit">G<span className="unit-total">/{item.memory_tatal}G</span></span>
                                            </div>
                                            <div className="stats-bar">
                                                <div className="stats-bar-progress" data-color="green"
                                                     style={{width: item.memory_percent+"%"}}></div>
                                            </div>
                                        </div>

                                        <div className="stats-card">
                                            <div className="stats-title">디스크 사용량</div>
                                            <div className="stats-value">
                                                <span className="value">{item.disk_usage}</span>
                                                <span className="unit">G<span className="unit-total">/{item.disk_total}G</span></span>
                                            </div>
                                            <div className="stats-bar">
                                                <div className="stats-bar-progress" data-color="blue"
                                                     style={{width: item.disk_percent+"%"}}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="instance-details">
                                        <div className="detail-section">
                                            <h4 className="detail-title">Labels</h4>
                                            <div className="detail-list">
                                                <div className="detail-item">
                                                    <span className="detail-label">인스턴스명</span>
                                                    <span className="detail-value">{item.name}</span>
                                                </div>
                                                <div className="detail-item">
                                                    <span className="detail-label">소유자</span>
                                                    <span className="detail-value">{item.owner}</span>
                                                </div>
                                                <div className="detail-item">
                                                    <span className="detail-label">GCP 프로젝트 ID</span>
                                                    <span className="detail-value">{item.consumer_project_id}</span>
                                                </div>
                                                <div className="detail-item">
                                                    <span className="detail-label">주피터노트북 식별자</span>
                                                    <span className="detail-value">{item.notebook_product}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="detail-divider"></div>

                                        <div className="detail-section">
                                            <h4 className="detail-title">Metadata</h4>
                                            <div className="detail-list">
                                                <div className="detail-item">
                                                    <span className="detail-label">유휴 상태 대기 시간</span>
                                                    <span className="detail-value">{item.idle_timeout_seconds}</span>
                                                </div>
                                                <div className="detail-item">
                                                    <span className="detail-label">Workbench 이미지</span>
                                                    <span className="detail-value">{item.proxy_url}</span>
                                                </div>
                                                <div className="detail-item">
                                                    <span className="detail-label">주피터노트북 버전</span>
                                                    <span className="detail-value">{item.version}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="detail-divider"></div>

                                        <div className="detail-section">
                                            <h4 className="detail-title">Tags</h4>
                                            <div className="detail-list">
                                                <div className="detail-item">
                                                    <span className="detail-value">{item.notebook_instance}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </section>
                </div>
            ) : (
                <>
                    <div className="container">
                        <Header2/>
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
                                            <p className="contents-area-title-line">생성된 인스턴스가 없습니다.</p>
                                            <p className="contents-area-subtitle"></p>
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

export default DashboardPage;