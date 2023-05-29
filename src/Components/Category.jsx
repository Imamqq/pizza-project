import React from 'react'

function Category({ value, onClickCategory }) {

    let category = [
        "Все",
        "Мясные",
        "Вегетарианская",
        "Гриль",
        "Острые",
        "Закрытые",
    ]

    return (
        <div className="categories">
            <ul>
                {category.map((item, index) => <li
                    key={`${item}${index}`}
                    className={value === index ? "active" : ""}
                    onClick={() => onClickCategory(index)}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Category