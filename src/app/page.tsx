import Image from "next/image";

export default function Home() {
return ( <main className="bg-white text-gray-800">
{/* Hero Section */} <section className="bg-slate-900 text-white py-32 px-6"> <div className="max-w-5xl mx-auto text-center"> <div className="flex justify-center mb-8"> <Image
           src="/logo.png"
           alt="TCF Edison Logo"
           width={200}
           height={200}
           priority
         /> </div>

      <h1 className="text-5xl md:text-6xl font-bold text-amber-400">
        Welcome to TCF Edison
      </h1>

      <p className="text-2xl mt-6 text-gray-200">
        Established in 1979
      </p>

      <div className="mt-10 bg-white/10 rounded-xl p-6 max-w-3xl mx-auto">
        <p className="text-xl italic text-amber-200">
          &quot;I was glad when they said to me,
          Let us go into the house of the LORD.&quot;
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

      <a
        href="#join-us"
        className="inline-block mt-10 bg-amber-500 hover:bg-amber-600 transition-colors text-black px-8 py-4 rounded-lg font-bold"
      >
        Join Us This Sunday
      </a>
    </div>
  </section>

  {/* Mission & Vision */}
  <section className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-slate-900 mb-10">
        Our Mission &amp; Vision
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg shadow-sm mb-10">
        <p className="text-xl italic text-center text-slate-800">
          &quot;Go therefore and make disciples of all nations...&quot;
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
          we seek to bring God&apos;s love and the message of
          salvation to our community and beyond.
        </p>
      </div>
    </div>
  </section>

  {/* Join Us - Worship, YouTube & Location */}
  <section
    id="join-us"
    className="bg-amber-50 py-20 px-6"
  >
    <div className="max-w-6xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
          Come Worship With Us
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Worship with us in person, connect with our ministry
          online, and become part of the TCF Edison family.
        </p>
      </div>

      {/* Unified Cards */}
      <div className="grid md:grid-cols-3 gap-8 items-stretch">

        {/* Worship Service */}
        <div className="bg-white rounded-2xl shadow-lg border-t-4 border-amber-500 p-8 text-center flex flex-col justify-between hover:shadow-xl transition-shadow">
          <div>
            <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-3xl">
              🙏
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Weekly Worship
            </h3>

            <p className="mt-4 text-gray-600">
              Come together with us for worship,
              prayer, fellowship, and the Word of God.
            </p>

            <div className="mt-6 bg-amber-50 rounded-xl p-5">
              <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
                Every Sunday
              </p>

              <p className="mt-2 text-3xl font-bold text-amber-600">
                05:00 PM
              </p>

              <p className="mt-2 text-gray-600">
                Sunday Worship Service
              </p>
            </div>
          </div>

          <a
            href="#location"
            className="mt-8 inline-block bg-amber-500 hover:bg-amber-600 transition-colors text-black px-6 py-3 rounded-xl font-semibold"
          >
            Plan Your Visit
          </a>
        </div>

        {/* YouTube */}
        <div className="bg-white rounded-2xl shadow-lg border-t-4 border-red-500 p-8 text-center flex flex-col justify-between hover:shadow-xl transition-shadow">
          <div>
            <div className="w-16 h-16 mx-auto rounded-full bg-red-50 flex items-center justify-center text-3xl">
              ▶️
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Watch Online
            </h3>

            <p className="mt-4 text-gray-600">
              Follow our ministry online and watch sermons,
              Bible studies, worship services, and church events.
            </p>

            <div className="mt-6 bg-red-50 rounded-xl p-5">
              <p className="font-bold text-lg text-slate-900">
                TCFNJ YouTube Ministry
              </p>

              <p className="mt-2 text-gray-600 text-sm">
                Stay connected with our latest messages
                and ministry updates.
              </p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/results?search_query=tcfnj"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-red-600 hover:bg-red-700 transition-colors text-white px-6 py-3 rounded-xl font-semibold"
          >
            Visit YouTube Channel
          </a>
        </div>

        {/* Location */}
        <div
          id="location"
          className="bg-white rounded-2xl shadow-lg border-t-4 border-slate-700 p-8 text-center flex flex-col justify-between hover:shadow-xl transition-shadow"
        >
          <div>
            <div className="w-16 h-16 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-3xl">
              📍
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Visit Us
            </h3>

            <p className="mt-4 text-gray-600">
              We would love to worship and fellowship
              with you and your family.
            </p>

            <div className="mt-6 bg-slate-50 rounded-xl p-5">
              <p className="font-bold text-lg text-slate-900">
                TCF Edison
              </p>

              <p className="mt-3 text-gray-700 leading-7">
                120 S Wood Ave
                <br />
                Iselin, NJ 08830
                <br />
                <span className="text-sm text-gray-500">
                  APA Hotel
                </span>
              </p>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=120+S+Wood+Ave+Iselin+NJ+08830"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-slate-800 hover:bg-slate-900 transition-colors text-white px-6 py-3 rounded-xl font-semibold"
          >
            Get Directions
          </a>
        </div>
      </div>

      {/* Bottom Welcome Banner */}
      <div className="mt-10 bg-slate-900 rounded-2xl p-8 text-center text-white shadow-lg">
        <h3 className="text-2xl font-bold text-amber-400">
          You Are Welcome Here
        </h3>

        <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
          Whether you are visiting for the first time or
          have been part of our church family for years,
          we look forward to worshiping together.
        </p>
      </div>
    </div>
  </section>

  {/* Founder */}
  <section className="py-20 bg-slate-50">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
        Our Founder
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Image
            src="/founder.png"
            alt="Dr. David Chigurupati"
            width={300}
            height={300}
          />
        </div>

        <div>
          <h3 className="text-3xl font-bold text-slate-900">
            Dr. David Chigurupati
          </h3>

          <p className="mt-2 text-amber-600 font-semibold">
            Founder of TCF Edison
          </p>

          <div className="mt-6 space-y-4 text-lg leading-8 text-gray-700">
            <p>
              TCF Edison was established in 1979 with a vision
              to proclaim the Gospel of Jesus Christ, disciple
              believers, and build a Christ-centered community.
            </p>

            <p>
              Through decades of faithful ministry, Dr. David
              Chigurupati has encouraged generations of believers
              to deepen their faith, grow in prayer, and share
              the love of Christ with others.
            </p>

            <p>
              We thank God for his leadership, dedication,
              and commitment to serving the Kingdom of God.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Why Visit Us */}
  <section className="bg-slate-50 pb-20">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
        Why Visit Us?
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-5">📖</div>

          <h3 className="text-xl font-bold mb-3 text-slate-900">
            Biblical Teaching
          </h3>

          <p className="text-gray-600 leading-7">
            Learn God&apos;s Word through practical,
            Christ-centered messages.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-5">🙌</div>

          <h3 className="text-xl font-bold mb-3 text-slate-900">
            Worship
          </h3>

          <p className="text-gray-600 leading-7">
            Experience meaningful worship
            and heartfelt prayer.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-5">🤝</div>

          <h3 className="text-xl font-bold mb-3 text-slate-900">
            Fellowship
          </h3>

          <p className="text-gray-600 leading-7">
            Connect with a loving church family
            that cares for one another.
          </p>
        </div>
      </div>
    </div>
  </section>
</main>

);
}