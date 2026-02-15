import React, { useEffect } from "react";
import { useSearchParams, Link } from "react-router";
import { FaCheckCircle, FaShoppingBag, FaHome } from "react-icons/fa";
import useAxios from "../../../hooks/useAxios";

const PaymentSuccess = () => {

    const [searchParams] = useSearchParams();
    const axiosSecure = useAxios()
    const sessionId = searchParams.get("session_id");
    console.log(sessionId)
    

    useEffect(() => {
        if(sessionId) {
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)     
        }
    }, [sessionId, axiosSecure])

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center p-6">
            <div className="bg-white shadow-2xl rounded-3xl max-w-md w-full p-10 text-center">

                <div className="flex justify-center mb-6">
                    <FaCheckCircle className="text-6xl text-emerald-500 animate-pulse" />
                </div>

                
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Payment Successful 🎉
                </h1>

                <p className="text-gray-500 mb-6">
                    Thank you for your purchase. Your payment has been processed
                    successfully.
                </p>

                {/* Session Info */}
                {sessionId && (
                    <div className="bg-gray-50 border rounded-lg p-3 text-sm text-gray-600 mb-6">
                        <span className="font-semibold text-gray-700">Transaction ID:</span>
                        <p className="break-all">{sessionId}</p>
                    </div>
                )}

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                    <Link
                        to="/dashboard/carts"
                        className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-semibold transition"
                    >
                        <FaShoppingBag /> View My Orders
                    </Link>

                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold transition"
                    >
                        <FaHome /> Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
