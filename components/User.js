import React from "react";

const user = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
        <style jsx>{`
            p {
                color: blue;
            }

            @media (max-width: 600px) {
                div {
                  background: gray;
                }
            }
        `}</style>
    </div>
);

export default user;