import React from "react";
import useAccountUser from "../../../hooks/useAccountUser";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrash, FaCreditCard, FaCheckCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const Cart = () => {
    const { userData } = useAccountUser();
    const axiosSecure = useAxiosSecure();

    const { data: cartData = [], isLoading, refetch } = useQuery({
        queryKey: ["cart", userData?.email],
        enabled: !!userData?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts/${userData.email}`);
            return res.data;
        },
    });

    if (isLoading) return <p className="text-center mt-10">Loading...</p>;

    // Delete cart item
    const handleDelete = (id) => {
        Swal.fire({
            title: "Remove from cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axiosSecure.delete(`/carts/${id}?email=${userData.email}`);
                refetch();
                Swal.fire("Deleted!", "Item removed from cart.", "success");
            }
        });
    };

    const handlePayment = async(bookCart) => {
        const paymentInfo = {
            cost : bookCart.bookPrice,
            cartID : bookCart._id,
            senderEmail : bookCart.userEmail,
            bookName : bookCart.bookTitle
        }
        console.log(paymentInfo)
        const res = await axiosSecure.post('/payment-checkout-session', paymentInfo)
        console.log(res.data.url)
        window.location.assign(res.data.url)
    }

    

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6">My Cart</h2>

            <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
                <table className="table w-full">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th>#</th>
                            <th>Book Title</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Transaction ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cartData.map((item, i) => (
                            <tr key={item._id} className="hover:bg-gray-50">
                                <td>{i + 1}</td>
                                <td className="font-medium">{item.bookTitle}</td>
                                <td className="text-sm text-gray-500">{item.userEmail}</td>

                                {/* Status */}
                                <td>
                                    {item.status === "paid" ? (
                                        <span className="badge badge-success gap-1">
                                            <FaCheckCircle /> Paid
                                        </span>
                                    ) : (
                                        <button onClick={() => handlePayment(item)} className="btn btn-xs bg-indigo-600 text-white hover:bg-indigo-500">
                                            <FaCreditCard /> Pay
                                        </button>
                                    )}
                                </td>

                                {/* Transaction ID */}
                                <td className="text-sm text-gray-600">
                                    {item.transectionID || "—"}
                                </td>

                                {/* Delete */}
                                <td>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-xs bg-red-500 text-white hover:bg-red-400"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {cartData.length === 0 && (
                    <p className="text-center py-6 text-gray-500">Cart is empty</p>
                )}
            </div>
        </div>
    );
};

export default Cart;
