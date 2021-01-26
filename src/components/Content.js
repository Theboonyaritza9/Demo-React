import React, { useState } from 'react'
// import Button from './Button'
import "./Content.css"

// function Content() {
//     return (
//         <div>

//         </div>
//     )
// }


const Content = (props) => {

    const [name, setName] = useState("boonayrit");
    const [status, setStatus] = useState("admin");

    const [password, setPassword] = useState("55555");
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false);

    const arr = [
        {
            username: "boonyarit",
            password: "1234"
        },
        {
            username: "mawin",
            password: "1234"
        },
        {

        }
    ];
    const obJ = {}

    // console.log(password)

    // function addNumber(num) {
    //     console.log(num + 1)
    // }

    // function decreseNumber(num) {
    //     console.log(num + 1)
    // }

    // function newName (e) {
    //     setName(e.target.value);
    // }

    const checkUser = (event) => {
        event.preventDefault();
        // console.log("pass")
        const data = {
            name: name,
            password: password
        }
        // font-end
        console.log(data)
        // back-end
        console.log(arr)
    }

    return (
        <section className="section-content">
            { status == "admin" && <p>boonayrit</p>}
            { true ? <div>Loading...</div> : <p>Mawin</p> }
            <form onSubmit={checkUser}>
                <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)} />
                <input type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">submit</button>
            </form>
            <p>Data</p>
            <p>{props.api}</p>
            <p>{name}</p>


            {/* <img src="./images/img1.jpg" alt="55" /> */}
            {/* <Button click={() => addNumber(5)}>calculate +</Button>
            <Button click={() => decreseNumber(6)}>calculate -</Button> */}

            {/* <Button click={() => console.log("submit")}>Submit</Button> */}


        </section>
    )
}

export default Content
