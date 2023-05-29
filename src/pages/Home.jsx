import React, { useContext } from 'react'
import Category from '../Components/Category'
import Sort from '../Components/Sort'
import Skeleton from '../Components/skeleton/skeleton'
import PizzaBlock from '../Components/PizzaBlock'
import { useEffect, useState } from "react";
import Pagination from '../Components/Pagination/Pagination'
import { SearchContext } from '../App'
import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId, setCurrentPage } from "../redux/Slices/FilterSlice"



function Home() {

    const dispatch = useDispatch()
    const categoryId = useSelector(state => state.filter.categoryId)
    const sortType = useSelector(state => state.filter.sort)
    const currenPage = useSelector(state => state.filter.currenPage)


    const { searchValue } = useContext(SearchContext)

    const [isLoading, setIsLoading] = useState(true)
    const [pizzas, setPizzas] = useState([])

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const onChagePage = (number) => {
        dispatch(setCurrentPage(number))
    }

    useEffect(() => {
        setIsLoading(true)
        const search = searchValue ? `search=${searchValue}` : ""
        axios.get(`https://646870e060c8cb9a2ca9d9ec.mockapi.io/items?page=${currenPage}&limit=4&${categoryId > 0 ? `category=${categoryId}` : ""
            }${search}&sortBy=${sortType.sort}&order=desc`)
            .then(arr => {
                setPizzas(arr.data)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortType, searchValue, currenPage])


    // const items = pizzas.filter(obj => {
    //     if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
    //         return true
    //     }
    //     return false
    // }).map((obj) => <PizzaBlock key={obj.id} {...obj} />)
    // const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />)

    const items = pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
    const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />)
    return (
        <>
            <div className='container'>
                <div className="content__top">
                    <Category value={categoryId} onClickCategory={onChangeCategory} />
                    <Sort />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                        isLoading
                            ? skeletons
                            : items
                    }
                </div>
                <Pagination currenPage={currenPage} onChagePage={onChagePage} />
            </div>
        </>
    )
}

export default Home