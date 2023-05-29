import React, { useContext, useRef, useState } from 'react'
import s from "./search.module.scss"
import search from "../../assets/img/search.svg"
import close from "../../assets/img/close.svg"
import { SearchContext } from '../../App'
import debounce from 'lodash.debounce'

function Search() {
    const [value, setValue] = useState("")

    const { setSearchValue } = useContext(SearchContext)
    const inputRef = useRef()

    const updateSearchValue = useRef(
        debounce((str) => {
            setSearchValue(str)
        }, 300)).current

    const onChangeInput = (e) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }

    const onClickClear = () => {
        setSearchValue("")
        setValue('')
        inputRef.current.focus()
    }
    return (
        <div className={s.root}>
            <img className={s.icon} src={search} alt="search" />
            <input ref={inputRef} value={value} onChange={onChangeInput} className={s.input} type="text" placeholder='Поиск пиццы...' />
            {value && <img onClick={onClickClear} className={s.close} src={close} alt="close" />}
        </div>
    )
}

export default Search