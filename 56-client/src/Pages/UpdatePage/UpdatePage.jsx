import { useLoaderData } from "react-router-dom";

const UpdatePage = () => {
    const coffee= useLoaderData()
    
    const { category, chef, details, name, photo, supplier, taste } = coffee;
    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, chef, supplier, taste, category, details, photo };
        console.log(updatedCoffee);
        fetch(`http://localhost:5000/newCoffee/${coffee._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire("SweetAlert2 is working!");
            }
        })
    
      };
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Add New Coffee!</h1>
            <p className="p-6">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <div className="card ">
            <form onSubmit={handleUpdateCoffee} className="card-body">
              <div className="grid md:grid-cols-2 gap-5 ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Name </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                     defaultValue={name}
                    placeholder="Enter coffee name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Chef</span>
                  </label>
                  <input
                    type="text"
                    name="chef"
                    defaultValue={chef}
                    placeholder="Enter coffee chef"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Supplier</span>
                  </label>
                  <input
                    type="text"
                    name="supplier"
                    defaultValue={supplier}
                    placeholder="Enter coffee supplier"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Taste</span>
                  </label>
                  <input
                    type="text"
                    name="taste"
                    defaultValue={taste}
                    placeholder="Enter coffee taste"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category </span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    defaultValue={category}
                    placeholder="Enter coffee category "
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Details </span>
                  </label>
                  <input
                    type="text"
                    name="details"
                    defaultValue={details}
                    placeholder="Enter coffee details"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Enter photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                 
                  className="btn btn-block bg-yellow-900 btn-primary"
                >
                  Updated Coffee
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdatePage;