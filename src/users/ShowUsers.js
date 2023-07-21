import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

const URI = "http://localhost:4000/users"

const CompShowUsers = () =>{
    const [users, setUsers] = useState([])
    useEffect(()=>{
        getUsers()
    }, [])
    //procedimiento para obtener usuarios
    const getUsers = async () =>{
        const res = await axios.get(URI)
        const data = await res.data
        console.log(data);
        setUsers(data)
    }
  
    const changeStatus = async(id, status)=>{
        console.log(status);
        if(status=="Habilitado"){
            const res = await axios.put(URI+"/disable/"+id)
            console.log(URI+"/disable/"+id);
        }
        else{
            const res = await axios.put(URI+"/enable/"+id)
        }
        window.location.href = window.location.href;
    }
    return (
    <div className='container' style={{textAlign:"center"}}>
    <Link to="/create" className='btn btn-primary mt-2 mb-2'>Create user</Link>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Status</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user)=>{
            return(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.status}</td>
                    <td>
                    <Link to={`/edit/${user.id}`} className='btn btn-info'>Update user</Link>
                    <button className="btn btn-success" onClick={()=>changeStatus(user.id, user.status)}>Change status</button>
                    </td>
                </tr>
            )
        })}
      </tbody>
    </Table>
    </div>
    )

}

export default CompShowUsers;
