import * as React from "react";

interface PropsType {
    style?: React.CSSProperties
}

export function BookmarkLr(props: PropsType) {
    return (
        <svg style={props.style} width="31" height="50" viewBox="0 0 31 50" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H31V50L15.5 41.1111L0 50V0Z" fill="#001E36"/>
            <path
                d="M11.1591 25.2222H12.7791V30.9022H16.2891V32.2222H11.1591V25.2222ZM18.5743 27.5522C18.7609 27.2922 19.0109 27.0956 19.3243 26.9622C19.6443 26.8289 20.0109 26.7622 20.4243 26.7622V28.2022C20.2509 28.1889 20.1343 28.1822 20.0743 28.1822C19.6276 28.1822 19.2776 28.3089 19.0243 28.5622C18.7709 28.8089 18.6443 29.1822 18.6443 29.6822V32.2222H17.0843V26.8422H18.5743V27.5522Z"
                fill="#31A8FF"/>
        </svg>
    )
}
