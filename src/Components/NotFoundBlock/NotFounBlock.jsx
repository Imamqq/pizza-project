import React from 'react'
import s from "./notFoundBlock.module.scss"

function NotFoundBlock() {
    return (
        <div className={s.root}>
            <h1>
                <span>&#128533;</span>
                <br />
                Ничего не найдено
            </h1>
            <p>К сожалению, такой страницы нет в нашем магазине(</p>
        </div>
    )
}

export default NotFoundBlock