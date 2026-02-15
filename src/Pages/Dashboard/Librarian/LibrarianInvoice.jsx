import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const LibrarianInvoice = () => {
  
    const axiosSecure = useAxiosSecure()
  const { data = [], isLoading, refetch } = useQuery({
    queryKey: ["pendingInvoices"],
    queryFn: async () => {
      const res = await axiosSecure.get("/pending-invoices");
      return res.data;
    }
  });

  const handleAccept = (id) => {
    Swal.fire({
      title: "Accept this payment?",
      text: "This will mark the book as sold.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4f46e5",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Accept"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.patch(`/accept-invoice/${id}`);
        if (res.data.modifiedCount > 0) {
          Swal.fire("Approved!", "Invoice accepted successfully.", "success");
          refetch();
        }
      }
    });
  };

  if (isLoading) {
    return <div className="text-center py-20">Loading invoices...</div>;
  }

  return (
    <div className="p-10 min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      <h2 className="text-3xl font-bold mb-8 text-indigo-700">
        📄 Pending Book Payments
      </h2>

      <div className="overflow-x-auto shadow-xl rounded-2xl bg-white">
        <table className="table w-full">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th>#</th>
              <th>Book Name</th>
              <th>User Email</th>
              <th>Transaction ID</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, i) => (
              <tr key={item._id} className="hover">
                <td>{i + 1}</td>
                <td className="font-semibold">{item.bookTitle}</td>
                <td>{item.userEmail}</td>
                <td className="text-xs text-gray-500 break-all">
                  {item.transectionID}
                </td>
                <td>
                  <button onClick={() => handleAccept(item._id)} className="btn px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-md transition">Accept</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {data.length === 0 && (
          <div className="text-center py-10 text-gray-400">
            No pending invoices 🎉
          </div>
        )}
      </div>
    </div>
  );
};

export default LibrarianInvoice;
