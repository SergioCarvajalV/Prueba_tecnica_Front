import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const URI = 'http://localhost:4000/users/'

const CompUpdateUser = () => {
    const [name, setName] = useState('')    
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id, URI+id)
    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            name: name,
        })
        navigate('/')
    }

    return (
        <div style={{textAlign:"center"}}>
        <h3>Edit User</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">New name: </label>
                <input
                style={{margin:"5px"}}
                required
                    value={name}
                    onChange={ (e)=> setName(e.target.value)}
                    type="text"                     
                />
            </div>
            <Link to="/" className='btn btn-danger mt-2 mb-2'>Cancel</Link>
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
    )

}

export default CompUpdateUser