import Image from "next/image";

export default function Home() {
return ( <main id="home" className="bg-white text-gray-800">
{/* Header */}
<header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-sm">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
    <a href="#home" className="flex items-center gap-3 shrink-0" aria-label="Thankful to Christ Fellowship Edison home">
      <Image
        src="/edison_logo_clear.png"
        alt="Thankful to Christ Fellowship Edison Logo"
        width={48}
        height={48}
        priority
        className="h-12 w-12 object-contain"
      />
      <span className="hidden sm:block leading-tight">
        <span className="block text-sm font-bold text-slate-900">Thankful to Christ Fellowship</span>
        <span className="block text-xs font-semibold text-amber-600">Edison</span>
      </span>
    </a>

    <nav aria-label="Main navigation" className="flex items-center gap-1 sm:gap-2 overflow-x-auto whitespace-nowrap">
      <a href="#mission" className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors">Mission</a>
      <a href="#join-us" className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors">Worship</a>
      <a href="#location" className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors">Visit</a>
      <a href="#founder" className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors">Founder</a>
      <a href="#why-visit" className="rounded-full px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors">Why Us</a>
      <a href="#connect" className="ml-1 rounded-full bg-amber-500 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-amber-400 transition-colors">Connect</a>
    </nav>
  </div>
</header>

{/* Hero Section */}
<section className="relative isolate overflow-hidden text-white py-24 md:py-32 px-6">
  <Image
    src="/church_scenic_background.png"
    alt="Scenic mountain lake at sunrise"
    fill
    priority
    sizes="100vw"
    className="object-cover object-center"
  />
  <div className="absolute inset-0 -z-0 bg-gradient-to-b from-slate-950/70 via-slate-950/55 to-slate-950/80" />
  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-slate-950/30 via-transparent to-slate-950/30" /> <div className="relative z-10 max-w-5xl mx-auto text-center"> <div className="flex justify-center mb-8 drop-shadow-2xl"> <Image
           src="/edison_logo_clear.png"
           alt="Thankful to Christ Fellowship Edison Logo"
           width={200}
           height={200}
           priority
         /> </div>

      <h1 className="text-5xl md:text-6xl font-bold text-amber-400">
        Welcome to Thankful to Christ Fellowship Edison
      </h1>

      <p className="text-2xl mt-6 text-gray-200">
        Established in 2025
      </p>

      <div className="mt-4 inline-flex items-center rounded-full border border-amber-300/40 bg-amber-400/15 px-4 py-2 shadow-sm backdrop-blur-sm">
        <span className="text-sm font-semibold tracking-wide text-amber-200">
          Affiliated with TCFNJ
        </span>
      </div>

      <div className="mt-10 bg-white/10 rounded-xl p-6 max-w-3xl mx-auto">
        <p className="text-xl italic text-amber-200">
          &quot;I was glad when they said to me,
          Let us go into the house of the LORD.&quot;
        </p>

        <p className="mt-3 font-semibold text-amber-400">
          Psalm 122:1
        </p>
      </div>

      <div className="max-w-4xl mx-auto text-left mt-10 space-y-6 text-lg leading-8 text-gray-200">
        <p>
          Thankful to Christ Fellowship Edison is a Bible-centered, non-denominational,
          Asian Indian and multi-ethnic church.
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
  <section id="mission" className="scroll-mt-20 py-20 bg-white">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-slate-900 mb-10">
        Our Mission &amp; Vision
      </h2>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg shadow-sm mb-10">
        <p className="max-w-3xl mx-auto text-xl italic text-center text-slate-800">
          &quot;Go therefore and make disciples of all nations...&quot;
        </p>

        <p className="text-center mt-3 font-semibold text-amber-700">
          Matthew 28:18-20
        </p>
      </div>

      <div className="mx-auto space-y-6 text-lg leading-8 text-gray-700 text-left">
        <p>
          Our mission is to share the Good News of Jesus
          Christ and help people become committed disciples
          through worship, prayer, teaching, and fellowship.
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
    className="relative isolate scroll-mt-20 overflow-hidden py-20 px-6"
  >
    <Image
      src="/church_scenic_background.png"
      alt=""
      fill
      sizes="100vw"
      className="object-cover object-center"
    />
    <div className="absolute inset-0 -z-0 bg-amber-50/90" />
    <div className="relative z-10 max-w-6xl mx-auto">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
          Come Worship With Us
        </h2>

        <p className="mt-4 text-lg leading-8 text-gray-600 max-w-4xl mx-auto text-center">
          Worship with us in person, connect with our ministry
          online, and become part of the Thankful to Christ Fellowship Edison family.
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

            <p className="mt-4 text-gray-600 leading-7">
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

            <p className="mt-4 text-gray-600 leading-7">
              Follow our ministry online and watch sermons,
              Bible studies, worship services, and church events.
            </p>

            <div className="mt-6 bg-red-50 rounded-xl p-5">
              <p className="font-bold text-lg text-slate-900">
                Thankful to Christ Fellowship Edison YouTube Ministry
              </p>

              <p className="mt-2 text-gray-600 text-sm">
                Stay connected with our latest messages
                and ministry updates.
              </p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@TCFED"
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

            <p className="mt-4 text-gray-600 leading-7">
              We would love to worship and fellowship
              with you and your family.
            </p>

            <div className="mt-6 bg-slate-50 rounded-xl p-5">
              <p className="font-bold text-lg text-slate-900">
                Thankful to Christ Fellowship Edison
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
  <section id="founder" className="scroll-mt-20 py-20 bg-slate-50">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
        Our Founder
      </h2>

      <div className="grid md:grid-cols-[300px_minmax(0,1fr)] gap-12 items-center">
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
            Founder of Thankful to Christ Fellowship Edison
          </p>

          <div className="mt-6 space-y-5 text-lg leading-8 text-gray-700 text-left">
            <p>
              Thankful to Christ Fellowship Edison was established in 2025 with a vision to proclaim the Gospel of Jesus Christ, disciple believers, and build a Christ-centered community.
              Through decades of faithful ministry, Dr. David Chigurupati has encouraged generations of believers to deepen their faith, grow in prayer, and share the love of Christ with others.
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
  <section id="why-visit" className="scroll-mt-20 bg-slate-50 pb-20">
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

  {/* Social Media - compact icon row */}
  <section id="connect" className="scroll-mt-20 bg-slate-950 py-4 px-6">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500 sm:mr-1">
        Connect with us
      </span>

      <div className="flex items-center justify-center gap-2">
        {/* Facebook - placeholder until official account is created */}
        <div
          aria-label="Facebook coming soon"
          title="Facebook — Coming Soon"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1877F2] shadow-sm ring-1 ring-white/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="19" height="19" fill="#ffffff" aria-hidden="true" className="block">
            <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z"/>
          </svg>
        </div>

        {/* Instagram - placeholder until official account is created */}
        <div
          aria-label="Instagram coming soon"
          title="Instagram — Coming Soon"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] shadow-sm ring-1 ring-white/10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#ffffff" strokeWidth="2" aria-hidden="true" className="block">
            <rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.4" cy="6.7" r="1" fill="#ffffff" stroke="none"/>
          </svg>
        </div>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@TCFED"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Thankful to Christ Fellowship Edison on YouTube"
          title="YouTube"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF0000] shadow-sm ring-1 ring-white/10 transition-transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="19" height="19" fill="#ffffff" aria-hidden="true" className="block">
            <path d="M23.5 6.2a3.1 3.1 0 0 0-2.2-2.2C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.3.5A3.1 3.1 0 0 0 .5 6.2 32.7 32.7 0 0 0 0 12a32.7 32.7 0 0 0 .5 5.8 3.1 3.1 0 0 0 2.2 2.2c1.9.5 9.3.5 9.3.5s7.4 0 9.3-.5a3.1 3.1 0 0 0 2.2-2.2A32.7 32.7 0 0 0 24 12a32.7 32.7 0 0 0-.5-5.8ZM9.6 15.8V8.2L16 12l-6.4 3.8Z"/>
          </svg>
        </a>

        {/* Email */}
        <a
          href="mailto:mail2tcfed@gmail.com"
          aria-label="Email Thankful to Christ Fellowship Edison"
          title="Email"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 shadow-sm ring-1 ring-white/10 transition-transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="#ffffff" strokeWidth="2" aria-hidden="true" className="block">
            <rect x="3" y="5" width="18" height="14" rx="2.5"/>
            <path d="m4 7 8 6 8-6"/>
          </svg>
        </a>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-slate-950 text-white px-6 py-10">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
      <div>
        <p className="font-bold text-lg text-amber-400">
          Thankful to Christ Fellowship Edison
        </p>
        <p className="mt-1 text-sm text-slate-400">
          Worship • Fellowship • Grow in Christ
        </p>
      </div>

      <div className="text-sm text-slate-400">
        <p>120 S Wood Ave, Iselin, NJ 08830</p>
        <p className="mt-1">Sunday Worship • 5:00 PM</p>
      </div>

      <a
        href="https://www.youtube.com/@TCFED"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2.5 font-semibold text-slate-200 transition-colors hover:border-red-500 hover:text-white"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-red-500 fill-current" aria-hidden="true">
          <path d="M23.5 6.2a3.1 3.1 0 0 0-2.2-2.2C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.3.5A3.1 3.1 0 0 0 .5 6.2 32.7 32.7 0 0 0 0 12a32.7 32.7 0 0 0 .5 5.8 3.1 3.1 0 0 0 2.2 2.2c1.9.5 9.3.5 9.3.5s7.4 0 9.3-.5a3.1 3.1 0 0 0 2.2-2.2A32.7 32.7 0 0 0 24 12a32.7 32.7 0 0 0-.5-5.8ZM9.6 15.8V8.2L16 12l-6.4 3.8Z" />
        </svg>
        Follow on YouTube
      </a>
    </div>
  </footer>

</main>

);
}