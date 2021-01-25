import React from 'react'
import "./Content.css"

// function Content() {
//     return (
//         <div>
            
//         </div>
//     )
// }

const Content = (props) => {
    return (
        <section className="section-content">
            <p>Data</p>
            <p>{props.api}</p>
        </section>
    )
}

export default Content
