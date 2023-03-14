import React from 'react'
import Link from "next/link";
import style from './Button.module.css'

function Button({ link, btn_title }) {
    return (
        <>
            <Link href={link} >
                <div className={style.btn}>{btn_title}</div>
            </Link>
        </>
    )
}

export default Button