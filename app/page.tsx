export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white p-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          DevConnect
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          The ultimate social and portfolio platform built specifically for developers to connect, share projects, and find recruiter opportunities.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button className="rounded-md bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-all">
            Get Started
          </button>
          <a href="#about" className="text-sm font-semibold leading-6 text-white hover:text-indigo-300 transition-all">
            Learn more <span aria-hidden="true">-</span>
          </a>
        </div>
      </div>
    </div>
  )
}