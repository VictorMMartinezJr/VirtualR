import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {/* Testimonial Cards */}
        {testimonials.map((testimonial, index: number) => (
          <div key={index} className="flex w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            {/* Testimonial Text */}
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin flex flex-col justify-between">
              <div className="grow">
                <p className="text-neutral-300">"{testimonial.text}"</p>
              </div>

              {/* User Info */}
              <div className="flex mt-8 items-start">
                {/* User Image */}
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt={testimonial.user}
                />

                {/* User Name and Company */}
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
