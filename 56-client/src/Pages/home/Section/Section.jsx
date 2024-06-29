import { FaTrash } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import Swal from "sweetalert2";

const Section = ({ coffee }) => {
  const handleDeleteBtn = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/newCoffee/${_id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            // console.log("data____", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  const { category, chef, details, name, photo, supplier, taste } = coffee;
  // console.log("coffee", coffee);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="flex">
          <div>
            <h1 className="text-5xl font-bold">{details}</h1>
            <p className="py-6">{chef}</p>
            <p className="py-6">{name}</p>
            <p className="py-6">{supplier}</p>
            <p className="py-6">{taste}</p>
          </div>
          <div>
            <button
              className="btn btn-block text-re"
              onClick={() => handleDeleteBtn(coffee._id)}
            >
              <FaTrash />
            </button>
            <button className="btn btn-block">
              <MdEdit />
            </button>
            <button className="btn btn-block">
              <MdOutlineSecurityUpdateGood />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
