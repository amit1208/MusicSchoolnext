import React from 'react'

type User={
    id:number;
    name:string;
    email:string;
}

const UsersPage =async () => {

    const res= await fetch('https://jsonplaceholder.typicode.com/users',
    {next:{revalidate:10}})
    const users:User[]=await res.json();
  return (
    <div className='bg-black text-white'>
    {/* <p>{new Date().toLocaleTimeString()}</p> */}
    
    <div className="carousel carousel-center rounded-box flex flex-row">
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Pizza" />
  </div> 
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Pizza" />
  </div>
</div>
    <h1 className="flex font-bold justify-center text-3xl mt-4 mb-4">Alumni Details</h1>
<div className="flex flex-col items-center justify-center relative">

    <table className='table table-bordered w-fit'>
        <thead>
            <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
    {users.map((u)=> <tr key={u.id}>
        <td>{u.id}</td>
        <td>{u.name}</td>
        <td>{u.email}</td>
        </tr>)}
            
        </tbody>
    </table>
</div>
    </div>
  )
}

export default UsersPage