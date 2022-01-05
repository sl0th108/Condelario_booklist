import React, { useState } from 'react';
import './form.css'
// import { useSelector, useDispatch} from 'react-redux'
// import { selectCard, addCard } from '../../state/chatroomSlice'

function Form({addBook}) {
    // const dispatch = useDispatch();
    // const showCard = useSelector(selectCard)
    const submit = (e) => {
        e.preventDefault()
        addBook(data)
        
    }

    const [] = useState(null)
    const [data, setData] = useState({title: '', author: '', synopsis: ''});

    function getInfo(e) {
        setData({...data, [e.target.name]: e.target.value})
        console.log(data)
    } 

    return(
        <div className="background">
            <div className="content">
                Title 

                <form onSubmit={submit}>

                    <input
                    name='title'
                    onChange={getInfo}
                    className="message"
                    placeholder="Message"
                    type="text"
                    color="white"
                    />
                
                
                <br /><br />

                Author
                
                <br />
                
                    <input
                    name='author'
                    onChange={getInfo}
                    className="message"
                    placeholder="Message"
                    type="text"
                    color="white"
                    />
                
                
                <br /><br />

                Synopsis
                
                <br />
                
                    <input
                    name='synopsis'
                    onChange={getInfo}
                    className="message"
                    placeholder="Message"
                    type="text"
                    color="white"
                    />
                
                
                <br /><br />

                <button type="submit" className="button">submit</button>
                </form>
            </div> 
        </div>
    )
}

export default Form