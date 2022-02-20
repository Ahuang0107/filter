import * as React from "react";

interface PropsType {
    style?: React.CSSProperties
}

export function BookmarkPs(props: PropsType) {
    return (
        <svg style={props.style} width="31" height="50" viewBox="0 0 31 50" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H31V50L15.5 41.1111L0 50V0Z" fill="#001E36"/>
            <path
                d="M12.0583 23.4222C12.9263 23.4222 13.6776 23.5669 14.3123 23.8562C14.9563 24.1456 15.451 24.5562 15.7963 25.0882C16.1416 25.6202 16.3143 26.2502 16.3143 26.9782C16.3143 27.6969 16.1416 28.3269 15.7963 28.8682C15.451 29.4002 14.9563 29.8109 14.3123 30.1002C13.6776 30.3802 12.9263 30.5202 12.0583 30.5202H10.0843V33.2222H7.81629V23.4222H12.0583ZM11.9323 28.6722C12.6136 28.6722 13.1316 28.5276 13.4863 28.2382C13.841 27.9396 14.0183 27.5196 14.0183 26.9782C14.0183 26.4276 13.841 26.0076 13.4863 25.7182C13.1316 25.4196 12.6136 25.2702 11.9323 25.2702H10.0843V28.6722H11.9323ZM20.4502 33.3342C19.8249 33.3342 19.2135 33.2596 18.6162 33.1102C18.0189 32.9516 17.5429 32.7556 17.1882 32.5222L17.9162 30.9542C18.2522 31.1689 18.6582 31.3462 19.1342 31.4862C19.6102 31.6169 20.0769 31.6822 20.5342 31.6822C21.4582 31.6822 21.9202 31.4536 21.9202 30.9962C21.9202 30.7816 21.7942 30.6276 21.5422 30.5342C21.2902 30.4409 20.9029 30.3616 20.3802 30.2962C19.7642 30.2029 19.2555 30.0956 18.8542 29.9742C18.4529 29.8529 18.1029 29.6382 17.8042 29.3302C17.5149 29.0222 17.3702 28.5836 17.3702 28.0142C17.3702 27.5382 17.5055 27.1182 17.7762 26.7542C18.0562 26.3809 18.4575 26.0916 18.9802 25.8862C19.5122 25.6809 20.1375 25.5782 20.8562 25.5782C21.3882 25.5782 21.9155 25.6389 22.4382 25.7602C22.9702 25.8722 23.4089 26.0309 23.7542 26.2362L23.0262 27.7902C22.3635 27.4169 21.6402 27.2302 20.8562 27.2302C20.3895 27.2302 20.0395 27.2956 19.8062 27.4262C19.5729 27.5569 19.4562 27.7249 19.4562 27.9302C19.4562 28.1636 19.5822 28.3269 19.8342 28.4202C20.0862 28.5136 20.4875 28.6022 21.0382 28.6862C21.6542 28.7889 22.1582 28.9009 22.5502 29.0222C22.9422 29.1342 23.2829 29.3442 23.5722 29.6522C23.8615 29.9602 24.0062 30.3896 24.0062 30.9402C24.0062 31.4069 23.8662 31.8222 23.5862 32.1862C23.3062 32.5502 22.8955 32.8349 22.3542 33.0402C21.8222 33.2362 21.1875 33.3342 20.4502 33.3342Z"
                fill="#31A8FF" style={{boxShadow: "0px 4px 4px 0px rgba(0,0,0,.25)"}}/>
        </svg>
    )
}