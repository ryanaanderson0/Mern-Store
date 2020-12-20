import React from 'react'

const Rating = ({ value, text }) => {
    return (
        <div className='rating'>
            {/* 1st rating */}
            <span>
                <i className={value >= 1 ? 'fas fa-wine-glass' : value >= 0.5 ? 'fas fa-wine-glass-alt' : 'far fa-wine-glass'}></i>
            </span>
            {/* 2nd rating */}
            <span>
                <i className={value >= 2 ? 'fas fa-wine-glass' : value >= 1.5 ? 'fas fa-wine-glass-alt' : 'far fa-wine-glass'}></i>
            </span>
            {/* 3rd rating */}
            <span>
                <i className={value >= 3 ? 'fas fa-wine-glass' : value >= 2.5 ? 'fas fa-wine-glass-alt' : 'far fa-wine-glass'}></i>
            </span>
            {/* 4th rating */}
            <span>
                <i className={value >= 4 ? 'fas fa-wine-glass' : value >= 3.5 ? 'fas fa-wine-glass-alt' : 'far fa-wine-glass'}></i>
            </span>
            {/* 5th rating */}
            <span>
                <i className={value >= 5 ? 'fas fa-wine-glass' : value >= 4.5 ? 'fas fa-wine-glass-alt' : 'far fa-wine-glass'}></i>
            </span>

            {/* shows text if there is text, renders empty string if not */}
            <span>
                {text && text}
            </span>

        </div>
    )
}

export default Rating
