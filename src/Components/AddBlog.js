import { useState } from 'react'

const AddBlog = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [summary, setSummary] = useState('')

    // const onSubmit = (e) => {
    //     e.preventDefault()
    
    //     if (!text) {
    //       alert('Please add a task')
    //       return
    //     }
    
    //     onAdd({ text, summary })
    
    //     setText('')
    //     setSummary('')
    //   }

      // Insert Rich Text Editor within the div.
      return (
        // <form className='add-form' onSubmit={onSubmit}>
        //   <div>

        //   </div>
        console.log('hello world')
      )
}

export default AddBlog;