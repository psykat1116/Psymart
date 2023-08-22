import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'

const Star = ({ stars, reviews }) => {

    const rantingStar = Array.from({ length: 5 }, (el, i) => {
        let number = i + 0.5;
        return (
            <p key={i}>
                {
                    stars >= i + 1 ? <FaStar /> : stars >= number ? <FaStarHalfAlt /> : <AiOutlineStar />
                }
            </p>
        )
    })

    return <section>
        <p id='rate'>{rantingStar}</p>
        <p>({reviews} customer reviews)</p>
    </section>;
}

export default Star