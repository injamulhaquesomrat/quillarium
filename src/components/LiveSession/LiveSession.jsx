const LiveSession = () => {
  return (
    <div className="container mx-auto my-10 px-3">
      <h2 className="text-2xl md:text-4xl pb-6 font-bold text-center text-violate">
        Join Live Session
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 duration-700">
        <div className="shadow-lg p-4 md:p-6 rounded-md md:rounded-xl bg-slate-400/20">
          <iframe
            className="aspect-video h-auto w-full"
            src="https://www.youtube.com/embed/XhaBrrOEahU"
            title="How to become a Self-taught Web Developer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h2 className="text-lg font-semibold py-5">
            How to become a Self-taught Web Developer{" "}
            <span className="badge bg-[red] text-white">Live</span>
          </h2>
        </div>
        <div className="shadow-lg p-4 md:p-6 rounded-md md:rounded-xl bg-slate-400/20">
          <iframe
            className="aspect-video h-auto w-full"
            src="https://www.youtube.com/embed/mOpkPkgjM2o"
            title="Web Development : Learning in a Productive Way with Hasin Hayder"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h2 className="text-lg font-semibold py-5">
            Learning in a Productive Way with Hasin Hayder{" "}
            <span className="badge bg-[red] text-white">Live</span>
          </h2>
        </div>
        <div className="shadow-lg p-4 md:p-6 rounded-md md:rounded-xl bg-slate-400/20">
          <iframe
            className="aspect-video h-auto w-full"
            src="https://www.youtube.com/embed/OdG9O6e5JCk"
            title="Web Development এ কোন স্ট্যাক শিখবো? || Web Development Learning Confusion"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h2 className="text-lg font-semibold py-5">
            Web Development এ কোন স্ট্যাক শিখবো? || Web Development Learning
            Confusion
            <span className="badge bg-[red] text-white">Live</span>
          </h2>
        </div>
        <div className="shadow-lg p-4 md:p-6 rounded-md md:rounded-xl bg-slate-400/20">
          <iframe
            className="aspect-video h-auto w-full"
            src="https://www.youtube.com/embed/oyZnBDONuv4"
            title="Extended Review - Stack Overflow Developer Survey 2023 | Stack Learner"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h2 className="text-lg font-semibold py-5">
            Extended Review - Stack Overflow Developer Survey 2023
            <span className="badge bg-[red] text-white">Live</span>
          </h2>
        </div>
        <div className="shadow-lg p-4 md:p-6 rounded-md md:rounded-xl bg-slate-400/20">
          <iframe
            className="aspect-video h-auto w-full"
            src="https://www.youtube.com/embed/dX8396ZmSPk"
            title="Web Development with HTML &amp; CSS – Full Course for Beginners"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h2 className="text-lg font-semibold py-5">
            Web Development with HTML, CSS – Full Course for Beginners
            <span className="badge bg-[red] text-white">Live</span>
          </h2>
        </div>
        <div className="shadow-lg p-4 md:p-6 rounded-md md:rounded-xl bg-slate-400/20">
          <iframe
            className="aspect-video h-auto w-full"
            src="https://www.youtube.com/embed/FkowOdMjvYo"
            title="Build and Deploy an Amazing 3D Developer Portfolio in React with Three.js"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <h2 className="text-lg font-semibold py-5">
            Build and Deploy an Amazing 3D Developer Portfolio in React with
            Three.js
            <span className="badge bg-[red] text-white">Live</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LiveSession;
