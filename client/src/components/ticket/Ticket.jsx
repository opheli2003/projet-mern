import axios from 'axios'
import React from 'react'
import {Link} from 'react-router-dom'

// const handleDelete = async () => {
//   try {
//     // await axios.delete("http://localhost:300/api/ticket/:id")

//   }
//   catch (err) {
    
//   }
// }

const Ticket = ({ ticket }) => {


  return (
    <div>
      <Link to={`/ticket/${ticket._id}`}><span className='ticketTitle'>{ticket.title}</span>
</Link>
      <hr />
      <span className='ticketComment'>{ticket.comment}</span>
    {/* <button onClick={handleDelete}>Delete</button> */}
    </div>
    

  )
}

export default Ticket