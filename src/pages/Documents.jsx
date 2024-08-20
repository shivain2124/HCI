export default function Document() {
  return (
    <div className="min-h-screen w-screen flex flex-col gap-4 items-center">
      <h1 className="text-4xl font-bold p-4">Magic in my Bones</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Total Projects</h2>
          <p className="text-4xl font-bold">10</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Total Tasks</h2>
          <p className="text-4xl font-bold">20</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Total Members</h2>
          <p className="text-4xl font-bold">30</p>
        </div>
      </div>
      <div className="flex gap-4 p-4">
        <img
          src="https://www.thoughtco.com/thmb/d99-RfSw1Zu3pNiVXEUmNTKsWhY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/t-rex--artwork-460716257-5b495432c9e77c0037077db9.jpg"
          alt="T-Rex"
          className="h-[500px] w-[600px] object-contain"  
        />
        <div className="bg-white p-6 rounded-lg shadow-lg h-96 w-96 flex flex-col justify-center">  // Match text box size
          <h2 className="text-2xl font-bold">Text Box Title</h2>
          <p className="mt-2 text-lg">This is where you can add some descriptive text or content related to the image. You can talk about the project, team, or any relevant information.</p>
        </div>
      </div>
    </div>
  );
}
