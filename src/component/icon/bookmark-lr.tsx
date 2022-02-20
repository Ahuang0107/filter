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
                d="M9.42273 23.4222H11.6907V31.3742H16.6047V33.2222H9.42273V23.4222ZM19.804 26.6842C20.0653 26.3202 20.4153 26.0449 20.854 25.8582C21.302 25.6716 21.8153 25.5782 22.394 25.5782V27.5942C22.1513 27.5756 21.988 27.5662 21.904 27.5662C21.2786 27.5662 20.7886 27.7436 20.434 28.0982C20.0793 28.4436 19.902 28.9662 19.902 29.6662V33.2222H17.718V25.6902H19.804V26.6842Z"
                fill="#31A8FF" style={{boxShadow: "0px 4px 4px 0px rgba(0,0,0,.25)"}}/>
        </svg>
    )
}
