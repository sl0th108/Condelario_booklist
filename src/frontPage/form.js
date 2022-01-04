import React from "react";
import './form.css'

function Form() {
    return(
        <div className="background">
            <div className="content">
                Title 

                <form >
                    <input
                    className="message"
                    placeholder="Message"
                    type="text"
                    color="white"
                    />
                </form>
                
                <br />

                Author

                <form >
                    <input
                    
                    className="message"
                    placeholder="Message"
                    type="text"
                    color="white"
                    />
                </form>
                
                <br />

                Synopsis
                

                <form >
                    <input
                    className="message"
                    placeholder="Message"
                    type="text"
                    color="white"
                    />
                </form>
                
                <br />

                <button className="button">
                    Submit
                </button>
            </div> 
        </div>
    )
}

export default Form