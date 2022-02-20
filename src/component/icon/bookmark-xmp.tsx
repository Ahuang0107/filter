import * as React from "react";

interface PropsType {
    style?: React.CSSProperties
}

export function BookmarkXmp(props: PropsType) {
    return (
        <svg style={props.style} width="31" height="50"
             viewBox="0 0 31 50" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H31V50L15.5 41.1111L0 50V0Z" fill="#261E47"/>
            <path
                d="M4.99833 28.2942C4.75233 28.2942 4.54533 28.2102 4.37733 28.0422C4.20933 27.8742 4.12533 27.6642 4.12533 27.4122C4.12533 27.1542 4.20933 26.9472 4.37733 26.7912C4.54533 26.6292 4.75233 26.5482 4.99833 26.5482C5.24433 26.5482 5.45133 26.6292 5.61933 26.7912C5.78733 26.9472 5.87133 27.1542 5.87133 27.4122C5.87133 27.6642 5.78733 27.8742 5.61933 28.0422C5.45133 28.2102 5.24433 28.2942 4.99833 28.2942ZM9.9008 28.2222L8.8388 26.7372L7.7408 28.2222H6.2108L8.0738 25.7832L6.2738 23.3802H7.8488L8.8748 24.7932L9.9278 23.3802H11.4218L9.6218 25.7472L11.4938 28.2222H9.9008ZM18.3763 23.3082C18.9823 23.3082 19.4623 23.4882 19.8163 23.8482C20.1763 24.2022 20.3563 24.7362 20.3563 25.4502V28.2222H18.9523V25.6662C18.9523 25.2822 18.8713 24.9972 18.7093 24.8112C18.5533 24.6192 18.3283 24.5232 18.0343 24.5232C17.7043 24.5232 17.4433 24.6312 17.2513 24.8472C17.0593 25.0572 16.9633 25.3722 16.9633 25.7922V28.2222H15.5593V25.6662C15.5593 24.9042 15.2533 24.5232 14.6413 24.5232C14.3173 24.5232 14.0593 24.6312 13.8673 24.8472C13.6753 25.0572 13.5793 25.3722 13.5793 25.7922V28.2222H12.1753V23.3802H13.5163V23.9382C13.6963 23.7342 13.9153 23.5782 14.1733 23.4702C14.4373 23.3622 14.7253 23.3082 15.0373 23.3082C15.3793 23.3082 15.6883 23.3772 15.9643 23.5152C16.2403 23.6472 16.4623 23.8422 16.6303 24.1002C16.8283 23.8482 17.0773 23.6532 17.3773 23.5152C17.6833 23.3772 18.0163 23.3082 18.3763 23.3082ZM24.4768 23.3082C24.9268 23.3082 25.3348 23.4132 25.7008 23.6232C26.0728 23.8272 26.3638 24.1182 26.5738 24.4962C26.7838 24.8682 26.8888 25.3032 26.8888 25.8012C26.8888 26.2992 26.7838 26.7372 26.5738 27.1152C26.3638 27.4872 26.0728 27.7782 25.7008 27.9882C25.3348 28.1922 24.9268 28.2942 24.4768 28.2942C23.8588 28.2942 23.3728 28.0992 23.0188 27.7092V29.9682H21.6148V23.3802H22.9558V23.9382C23.3038 23.5182 23.8108 23.3082 24.4768 23.3082ZM24.2338 27.1422C24.5938 27.1422 24.8878 27.0222 25.1158 26.7822C25.3498 26.5362 25.4668 26.2092 25.4668 25.8012C25.4668 25.3932 25.3498 25.0692 25.1158 24.8292C24.8878 24.5832 24.5938 24.4602 24.2338 24.4602C23.8738 24.4602 23.5768 24.5832 23.3428 24.8292C23.1148 25.0692 23.0008 25.3932 23.0008 25.8012C23.0008 26.2092 23.1148 26.5362 23.3428 26.7822C23.5768 27.0222 23.8738 27.1422 24.2338 27.1422Z"
                fill="#F6F3EE" style={{boxShadow: "0px 4px 4px 0px rgba(0,0,0,.25)"}}/>
        </svg>
    )
}
