import React,{useState} from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit, } from "react-icons/fa";
import BookForm from './BookForm';


function Book({bookings, removeBooking, updateBooking}) {

    // todo list (adding the delete, complete and edit functionalities)


// // setting the current date and time
//     const dateTime= (d) => {
         
//         let hour = d.getHours()
//         let minute = d.getMinutes()
//         let date = d.getDate()
//         let year = d.getFullYear()
//         let month = d.getMonth()

//         return `${hour}:${minute},${date}-${month}-${year}`
//     }

const [edit,setEdit] = useState({
    id : null,
    value : ''
})

const submitUpdate = value => {
    updateBooking(edit.id,  value)
    setEdit({
        id : null,
        value : ''
    })
}

if (edit.id){
    return<BookForm edit = {edit} onSubmit = {submitUpdate}/>
}


    return (
        // returning the individual list 
        <div>

            {/* <div div className = 'date'>{`${dateTime(new Date())}`}</div>  */}
            
            {bookings.map((booking,index)=>(
       
                <div key={index}>
                    {/* <div key={todo.id} onClick = {() => completeTodo(todo.id)}>
                        {todo.text}
                    </div> */}
                    <div className='icons'>
                        <MdDelete onClick={() => removeBooking(booking.id)} className = 'del-btn'/>
                        <FaRegEdit onClick={() => setEdit({id :booking.id, value : booking.text})} className = 'edit-btn'/>
                    </div>
                </div>
                
            ))}

        </div>

    )
        
    
}



export default Book
