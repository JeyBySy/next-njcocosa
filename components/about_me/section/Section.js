import React from 'react'
import Tags from '../Tags/Tags'


function Section({ pos }) {
    function card_content() {
        if (pos == 'left') {
            return "hellooo"
        }
    }

    return (
        <>
            <Tags></Tags>
            <div>{pos}</div>

        </>

    )
}

export default Section