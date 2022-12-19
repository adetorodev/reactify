import React from 'react'

function Columns() {
    const items = []
  return (
    // <React.Fragment>
    //     {items.map( item =>(
    //         <React.Fragment key={item.id}>
    //             <h1>Title</h1>
    //             <p>{item.title}</p>
    //         </React.Fragment>
    //     ))}
    //     <td>Name</td>
    //     <td>Ezekiel</td>
    // </React.Fragment>

    // cannot use key attribute here
    <> 
        <td>Name</td>
        <td>Ezekiel</td>
    </>
  )
}

export default Columns