const Apply = () => {
  return (
    <>
      <div class="flex flex-col items-center justify-center h-screen">
        <div class="w-1/3 bg-white rounded-lg shadow-md p-6">
          <h2 class="text-3xl text-center font-mono font-bold text-gray-900 mb-20">
            Admission Form
          </h2>

          <div class="flex flex-col">
            <div className="flex items-center gap-5">
              <p className="w-40">Applicant Name:</p>
              <input
                type="text"
                class="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Full Name"
              />
            </div>
            <div className="flex items-center gap-5">
              <p className="w-40">Father's Name:</p>
              <input
                type="text"
                class="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Full Name"
              />
            </div>
            <div className="flex items-center gap-5">
              <p className="w-40">Mother's Name:</p>
              <input
                type="text"
                class="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Full Name"
              />
            </div>
            <div className="flex items-center gap-5">
              <p className="w-40">Number :</p>
              <input
                type="number"
                class="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex items-center gap-5">
              <p className="w-40">E-mail :</p>
              <input
                type="email"
                class="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center gap-5">
              <p className="w-40">Address :</p>
              <input
                type="text"
                class="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Address"
              />
            </div>
            <div className="flex items-center gap-5">
              <p className="w-40">Nid Card/Birth Certificate:</p>
              <input
                type="file"
                class="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Certificate"
              />
            </div>
            <div className="flex items-center gap-5">
              <p className="w-40">JSC/SSC Certificate:</p>
              <input
                type="file"
                class="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Certificate"
              />
            </div>
            <div className="flex items-center gap-5">
              <p className="w-40">JSC/SSC Registration:</p>
              <input
                type="file"
                class="w-full bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Certificate"
              />
            </div>

            <button
              type="submit"
              class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apply;
