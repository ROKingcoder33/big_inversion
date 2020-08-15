'use strict';

import React from 'react';

const PersonCard = props => {
    return (
      <>
        <h1>{props.lastName}, {props.firstName}</h1>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hairColor}</p>
      </>
    );
}

export default PersonCard;




// import React from 'react';
// const PersonCard = props => {
//     return(
//         <div>
//             <h1>{ props.lastName }, { props.firstName }</h1>
//             <p>Age: { props.age }</p>
//             <p>Hair Color: { props.hairColor }</p>
//         </div>
//     );
// }
// export default PersonCard;

// <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" />
// //Note: we can pass down a string with or without curly braces.