import React, {useState} from 'react'
import Book from './Book';
import BookForm from "./BookForm";

function Booking() {
    const [booking, setBookings] = useState([]);

    const addbooking = booking => {
        if(!booking.text || /^\s*$/.test(booking.text)){
            return;
    }
        const newBookings = [booking, ...booking]

        setBookings(newBookings);
        
    };

    const updateBooking = (bookingId,newvalue) => {
        if (!newvalue.text || /^\s*$/.test (newvalue.text)){
            return;
        }

        setBookings(prev => prev.map(item => (item.id === bookingId ? newvalue:item))
        );
    }

    const removeBooking = id => {
        const removeArr = [...booking].filter(booking => booking.id !== id);

        setBookings(removeArr);
    }

    // const completeTodo = id =>{
    //     let updateTodos = todos.map(todo => {
    //         if (todo.id === id){
    //             todo.iscomplete = !todo.iscomplete;
    //         }
    //         return todo
    //     });
    //     setTodos(updateTodos)
    // }


    return (
        <div>
            <BookForm onSubmit = {addbooking}/>
            <Book bookings =  {booking}  removeTodo = {removeBooking} updateTodo={updateBooking}/>
        </div>
    )
}

export default Booking
