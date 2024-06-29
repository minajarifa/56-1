const Addpage2 = () => {
    const handleAddCraft = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, chef, supplier, taste, category, details, photo };
        console.log(newCoffee);
        
      };

  
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold text-center  lg:mr-28">
          Add new categories
        </h1>
      </div>
      <div className="hero-content bg-[#F4F3F0] rounded-3xl p-20 mt-10">
        <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleAddCraft} className="card-body  ">
          <div className="grid md:grid-cols-2 gap-5 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Name </span>
                </label>
                <input
                  type="text"
                  name="name"
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
                placeholder="Enter photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
               
                className="btn btn-block bg-yellow-900 btn-primary"
              >
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Addpage2;
