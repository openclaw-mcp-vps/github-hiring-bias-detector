export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          For Engineering Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect Unconscious Bias in{" "}
          <span className="text-[#58a6ff]">GitHub Code Reviews</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your GitHub repos and instantly surface bias patterns in PR feedback — by tone, length, and reviewer behavior — so you can build a fairer engineering team.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $15/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required to explore. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {[
          ["PR Comment Analysis", "NLP scans tone, length, and sentiment across all reviewer feedback."],
          ["Demographic Patterns", "Correlates review behavior with contributor identity signals."],
          ["Actionable Dashboard", "Weekly reports and alerts for managers to act on findings."],
        ].map(([title, desc]) => (
          <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{title}</h3>
            <p className="text-sm text-[#8b949e]">{desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#8b949e] text-sm mb-6">/month per organization</p>
          <ul className="text-left space-y-2 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited repositories",
              "Full PR comment history analysis",
              "Bias pattern detection & scoring",
              "Weekly email digest for managers",
              "GitHub OAuth integration",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does the bias detection work?",
              "We use NLP to analyze tone, word choice, comment length, and response rates across reviewers and contributors. Patterns are compared against baseline norms to flag statistically significant disparities.",
            ],
            [
              "What GitHub data do you access?",
              "Only public and private PR comments and review events from repos you explicitly authorize via GitHub OAuth. We never access your source code.",
            ],
            [
              "Can I cancel anytime?",
              "Yes. Cancel from your account dashboard at any time. You keep access until the end of your billing period.",
            ],
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} GitHub Hiring Bias Detector. All rights reserved.
      </footer>
    </main>
  );
}
