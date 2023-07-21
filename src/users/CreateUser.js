import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

const URI = "http://localhost:4000/users/add"

const CompCreateUser = () => {
    const [name, setName] = useState('')
    const [status, setStatus] = useState('Habilitado')
    const navigate = useNavigate()    
    //Save
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {name: name, status:status})
        navigate('/')
    }   

    return (
        <div style={{textAlign:"center"}}>
           <h3>Create User</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Name:</label>
                    <input
                        style={{margin:"5px"}}
                        required
                        value={name}
                        onChange={ (e)=> setName(e.target.value)} 
                        type="text"
                    />
                 </div>   
                 <div className='mb-3'>
                 <label for="option" style={{margin:15}}>Choose status:</label>
                    <select name="cars" id="cars" onChange={ (e)=> setStatus(e.target.value)}>
                    <option value="Habilitado">Habilitado</option>
                    <option value="Deshabilitado">Deshabilitado</option>
                    </select>                 
                 </div> 
                          
                 <button type='submit' className='btn btn-primary'>Save</button>                  
           </form>
        </div>
    )
}
export default CompCreateUser;