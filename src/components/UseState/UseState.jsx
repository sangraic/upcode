import React, { useState } from "react";


export const UseState = () => {
    const [count, setCount] = useState(0); 
    return(
        <>
        <main>
            <div className="container">
                <div className="col-md-12">
                    <div className="col-md-6 d-flex mx-auto">
                        <button className="btn btn-success" onClick={() => setCount(count + 1)}> + </button>
                             <h1 style={{margin:"0 15px"}}>{count}</h1>
                        <button className="btn btn-danger" onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}> - </button>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
};


