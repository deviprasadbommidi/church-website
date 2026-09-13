export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-24 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to Our Church
        </h1>

        <p className="mt-6 text-xl">
          A place to worship, grow, and serve together.
        </p>

        <button className="mt-8 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold">
          Join Us This Sunday
        </button>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Who We Are
        </h2>

        <p className="max-w-3xl mx-auto text-lg">
          We are a Christ-centered community dedicated to
          worship, prayer, fellowship, and sharing God's
          love with the world.
        </p>
      </section>

      {/* Service Times */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Service Times
        </h2>

        <p>Sunday Worship: 10:00 AM</p>
        <p>Wednesday Bible Study: 7:00 PM</p>
      </section>
    </main>
  );
}



