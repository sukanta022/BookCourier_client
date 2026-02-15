import React from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { FaUserShield, FaUserTie, FaTrashAlt } from "react-icons/fa"
import Swal from 'sweetalert2'

const UserList = () => {
    const axiosSecure = useAxiosSecure()

    const { data: userList = [], isLoading, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data
        }
    })

    if (isLoading) return <p className="text-center py-10">Loading users...</p>

    const makeRole = (name, email, role) => {
        Swal.fire({
            title: "Are you sure?",
            text: `Make ${name} is a ${role}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#4f46e5",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, confirm"
        }).then(result => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/role/${email}`, { role })
                    .then(() => {
                        refetch()
                        Swal.fire("Updated!", "User role has been changed.", "success")
                    })
            }
        })
    }

    const removeUser = (email) => {
        console.log(email)
        Swal.fire({
            title: "Delete user?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Delete"
        }).then(result => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${email}`)
                    .then(() => {
                        refetch()
                        Swal.fire("Deleted!", "User has been removed.", "success")
                    })
            }
        })
    }

    return (
        <div className="bg-slate-50 min-h-screen p-6 md:p-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">User Management</h1>

            <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-indigo-50 text-black">
                        <tr>
                            <th className="p-4">Name</th>
                            <th className="p-4">Email</th>
                            <th className="p-4 text-center">Actions</th>
                            <th className="p-4 text-center">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map(user => (
                            <tr key={user._id} className="border-b hover:bg-gray-50 transition">
                                <td className="p-4 font-medium text-gray-800">{user.name}</td>
                                <td className="p-4 text-gray-500">{user.email}</td>

                                
                                <td className="p-4 text-center space-x-2">
                                    <button
                                        onClick={() => makeRole(user.name,user.email, user.role == "user"? "admin" : "user" )}
                                        className="btn inline-flex items-center gap-1 bg-black hover:bg-gray-600 text-white px-3 py-1 rounded-lg text-sm transition"
                                    >
                                        <FaUserShield /> 
                                        {
                                            user.role === "user" ? <p>Admin</p> : <p>Remove Admin</p>
                                        }
                                    </button>

                                    <button
                                        onClick={() => makeRole(user.name ,user.email, user.role == "user"? "librarian" : "user")}
                                        className="btn inline-flex items-center gap-1 bg-gray-500 hover:bg-black text-white px-3 py-1 rounded-lg text-sm transition"
                                    >
                                        <FaUserTie />
                                        {
                                            user.role == "librarian" ? <p>Remove Librarian</p> : <p>Make Librarian</p>
                                        }
                                    </button>
                                </td>

                                
                                <td className="p-4 text-center">
                                    <button
                                        onClick={() => removeUser(user.email)}
                                        className="text-red-500 btn hover:text-red-600 text-xl transition"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserList
