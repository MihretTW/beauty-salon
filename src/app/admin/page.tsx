export default function Admin(){

  return (
    <main className="p-10">

      <h1 className="text-4xl font-bold">
        Admin Dashboard
      </h1>


      <div className="mt-10 grid md:grid-cols-3 gap-6">


        <div className="p-6 shadow rounded-xl">
          <h2 className="text-xl font-bold">
            Services
          </h2>

          <p>
            Manage salon services
          </p>

        </div>



        <div className="p-6 shadow rounded-xl">

          <h2 className="text-xl font-bold">
            Gallery
          </h2>

          <p>
            Upload images
          </p>

        </div>



        <div className="p-6 shadow rounded-xl">

          <h2 className="text-xl font-bold">
            Posts
          </h2>

          <p>
            Create promotions
          </p>

        </div>


      </div>


    </main>
  );
}