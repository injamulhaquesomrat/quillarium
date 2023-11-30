import { Map, Marker } from "pigeon-maps";

const Contact = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 px-3 lg:grid-cols-2 gap-4 justify-between my-10">
      <div className="w-full">
        <Map
          height={400}
          defaultCenter={[23.945927, 90.376258]}
          defaultZoom={11}
        >
          <Marker width={50} anchor={[23.945927, 90.376258]} />
        </Map>
      </div>
      <div className="flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none justify-between">
        <h4 className="block font-sans text-2xl md:text-3xl font-semibold leading-snug text-center sm:text-left tracking-normal text-violate antialiased">
          Get In Touch With Us
        </h4>
        <form className="mt-4 mb-auto w-full max-w-screen-lg lg:w-96">
          <div className="mb-4 flex flex-col gap-4 ">
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-md border border-violate border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-violate outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-violate placeholder-shown:border-t-violate focus:border-2 focus:border-violate focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-violate"
                placeholder=""
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-violate before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-violate after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-violate peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-violate peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-violate peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-violate peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-violate">
                Name
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-md border border-violate border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-violate outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-violate placeholder-shown:border-t-violate focus:border-2 focus:border-violate focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-violate"
                placeholder=""
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-violate before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-violate after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-violate peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-violate peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-violate peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-violate peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-violate">
                Address
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                className="peer h-full w-full rounded-md border border-violate border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-violate outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-violate placeholder-shown:border-t-violate focus:border-2 focus:border-violate focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-violate"
                placeholder=""
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-violate before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-violate after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-violate peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-violate peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-violate peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-violate peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-violate">
                Mobile
              </label>
            </div>
            <div className="relative h-11 w-full min-w-[200px]">
              <textarea
                className="peer h-full min-h-[100px] w-full rounded-md border border-violate border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-violate outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-violate placeholder-shown:border-t-violate focus:border-2 focus:border-violate focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-violate"
                placeholder=""
              ></textarea>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-violate before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-violate after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-violate peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-violate peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-violate peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-violate peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-violate">
                Question
              </label>
            </div>
          </div>
          <button
            className="mt-16 select-none rounded-lg bg-violate py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-violate/20 transition-all hover:shadow-lg hover:shadow-violate/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
