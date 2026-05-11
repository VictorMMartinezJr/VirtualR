const Hero = () => {
  return (
    <section className="flex flex-col items-center mt-6 lg:mt-20">
      {/* Text */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-linear-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col space-y-4 xs:flex-row xs:space-y-0 justify-center my-10">
        <a
          href="#"
          className="bg-linear-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>

      {/* Videos */}
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source
            src="https://res.cloudinary.com/dosqnvzhy/video/upload/v1778473764/video1_ljsohl.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source
            src="https://res.cloudinary.com/dosqnvzhy/video/upload/v1778473764/video1_ljsohl.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Hero;
