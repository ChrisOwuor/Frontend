export default function Statistics() {
  const stats = [
    {
      data: "35K",
      title: "Total Cases",
    },
    {
      data: "10K+",
      title: "Active Cases",
    },
    {
      data: "40+",
      title: "Closed Cases",
    },
    {
      data: "30M+",
      title: "Searches",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
        <div className="sm:hidden lg:block lg:max-w-xl">
          <img
            src="https://images.pexels.com/photos/8369520/pexels-photo-8369520.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="rounded-lg"
            alt=""
          />
        </div>
        <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
          <div className="max-w-2xl">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              We do our best to resolve as many cases as possible
            </h3>
            <p className="mt-3 max-w-xl">
              The following statistics showcase the effectiveness of our Missing
              Persons Locator Services in reuniting families and communities.
              Each number represents a life changed, a family reunited, and a
              community strengthened. These statistics not only illustrate the
              power of technology but also the collaborative spirit of our users
              and partners in making a difference. Join us in the journey toward
              a safer, more connected world.
            </p>
          </div>
          <div className="flex-none mt-6 md:mt-0 lg:mt-6">
            <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
              {stats.map((item, idx) => (
                <li key={idx} className="">
                  <h4 className="text-4xl text-indigo-600 font-semibold">
                    {item.data}
                  </h4>
                  <p className="mt-3 font-medium">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
