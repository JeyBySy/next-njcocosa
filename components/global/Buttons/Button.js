import React from 'react'
import Link from "next/link";
import style from './Button.module.css'

function Button({ href_link, btn_title }) {
    return (
        <>
            <Link href={href_link} >
                <div className={style.btn}>{btn_title}</div>
            </Link>
        </>
    )
}

export default Button