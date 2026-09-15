export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-amber-400">
            Welcome to TCF Edison
          </h1>

          <p className="text-2xl mt-6 text-gray-200">
            Established in 1979
          </p>

          <div className="mt-10 bg-white/10 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-xl italic text-amber-200">
              "I was glad when they said to me,
              Let us go into the house of the LORD."
            </p>

            <p className="mt-3 font-semibold text-amber-400">
              Psalm 122:1
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-left mt-10 space-y-5 text-lg leading-8 text-gray-200">
            <p>
              TCF Edison is a Bible-centered, non-denominational,
              Asian Indian and multi-ethnic church.
            </p>

            <p>
              Greetings to you in the matchless and magnificent
              Name of our Lord and Savior Jesus Christ. Since
              1979, God has faithfully sustained this ministry.
            </p>

            <p>
              To Him alone belong all honor, glory, and praise.
              We welcome you and your family to worship,
              fellowship, and grow together in Christ.
            </p>
          </div>

          <button className="mt-10 bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 rounded-lg font-bold">
            Join Us This Sunday
          </button>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-10">
            Our Mission & Vision
          </h2>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg shadow-sm mb-10">
            <p className="text-xl italic text-center text-slate-800">
              "Go therefore and make disciples of all nations..."
            </p>

            <p className="text-center mt-3 font-semibold text-amber-700">
              Matthew 28:18-20
            </p>
          </div>

          <div className="space-y-6 text-lg leading-8 text-gray-700">
            <p>
              Our mission is to share the Good News of Jesus
              Christ and help people become committed disciples
              through worship, prayer, teaching, and fellowship.
            </p>

            <p>
              We believe that Jesus Christ came into the world
              to save sinners, died on the cross for our sins,
              rose from the dead, and offers eternal life to all
              who trust in Him.
            </p>

            <p>
              Through local ministry, outreach, and missions,
              we seek to bring God's love and the message of
              salvation to our community and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="bg-amber-50 py-20">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-10">
          Weekly Worship Service
        </h2>

        <div className="max-w-xl mx-auto">
          <div className="bg-white shadow-lg rounded-xl p-8 text-center border-t-4 border-amber-500">
            <h3 className="text-2xl font-bold text-slate-900">
              Sunday Worship
            </h3>

            <p className="text-3xl mt-4 font-bold text-amber-600">
              05:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          Visit Us
        </h2>

        <p className="mt-6 text-lg">
          120 S Wood Ave
          Iselin, NJ 08830 (APA Hotel)
        </p>
      </section>
<section className="bg-slate-50 py-20">
<h2 className="text-4xl font-bold text-center mb-12">
Why Visit Us?
</h2>
<div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-6">
<div className="bg-white p-6 rounded-xl shadow">
<h3 className="text-xl font-bold mb-3">
Biblical Teaching
</h3>
<p>
Learn God's Word through practical,
Christ-centered messages.
</p>
</div>
<div className="bg-white p-6 rounded-xl shadow">
<h3 className="text-xl font-bold mb-3">
Worship
</h3>
<p>
Experience meaningful worship
and heartfelt prayer.
</p>
</div>
<div className="bg-white p-6 rounded-xl shadow">
<h3 className="text-xl font-bold mb-3">
Fellowship
</h3>
<p>
Connect with a loving church family
that cares for one another.
</p>
</div>
</div>
</section>
    </main>
  );
}