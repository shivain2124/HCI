export default function Fossils() {
  return (
    <div className="min-h-screen w-screen flex flex-col gap-4 items-center">
      <h1 className="text-4xl font-bold p-4">Fossils</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Total Models</h2>
          <p className="text-4xl font-bold">4</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Facts</h2>
          <p className="text-4xl font-bold">37</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Total bones</h2>
          <p className="text-4xl font-bold">124</p>
        </div>
      </div>

      <div className="flex gap-8">
        {/* First Image and Text Box */}
        <div className="flex items-center">
          <img
            src="https://www.thoughtco.com/thmb/d99-RfSw1Zu3pNiVXEUmNTKsWhY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/t-rex--artwork-460716257-5b495432c9e77c0037077db9.jpg"
            alt="T-Rex"
            className="h-64 w-80" // Further increased size
          />
          <div className="border p-8 ml-4"> {/* Further increased padding */}
            <h2 className="text-2xl font-semibold">T-Rex Information</h2> {/* Further increased font size */}
            <p className="text-lg">This text box contains information related to the T-Rex image.</p> {/* Font size remains large */}
          </div>
        </div>

        {/* Second Image and Text Box */}
        <div className="flex items-center">
          <img
            src="https://static.scientificamerican.com/sciam/cache/file/FFC220E7-BE75-4167-9DF52CB721E0CA74_source.jpg?w=600"
            alt="Dinosaur Fossil"
            className="h-64 w-80" // Further increased size
          />
          <div className="border p-8 ml-4"> {/* Further increased padding */}
            <h2 className="text-2xl font-semibold">Dinosaur Fossil Information</h2> {/* Further increased font size */}
            <p className="text-lg">This text box contains information related to the dinosaur fossil image.</p> {/* Font size remains large */}
          </div>
        </div>
      </div>
    </div>
  );
}
