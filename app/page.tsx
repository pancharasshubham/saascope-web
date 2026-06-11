import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F8FB]">

      {/* Navbar */}
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          <div>
            <h1 className="text-xl font-bold">
              SaaScope
            </h1>
          </div>

          <div className="flex items-center gap-3">

            <Link
                href="/demo"
                className="
                  px-4
                  py-2
                  rounded-lg
                  hover:bg-slate-100
                "
              >
                Demo
            </Link>

            <Link
              href="/login"
              className="
                px-4
                py-2
                rounded-lg
                hover:bg-slate-100
              "
            >
              Login
            </Link>

            <Link
              href="/register"
              className="
                bg-slate-900
                text-white
                px-4
                py-2
                rounded-lg
              "
            >
              Get Started
            </Link>

          </div>

        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto pt-16 pb-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-slate-200
                bg-white
                px-4
                py-2
                text-sm
                mb-6
              "
            >
              Reduce SaaS Waste Before It Impacts Your Budget
            </div>

            <h1
              className="
                text-5xl
                font-bold
                text-slate-900
                leading-tight
              "
            >
              Stop Paying For
              Software Nobody Uses.
            </h1>

            <p
              className="
                mt-6
                text-lg
                text-slate-600
              "
            >
              Upload your SaaS subscription CSV
              and discover unused licenses,
              duplicate tools, and hidden
              savings opportunities in minutes.
            </p>

            <div
              className="
                flex
                gap-4
                mt-8
              "
            >

              <Link
                href="/register"
                className="
                  bg-slate-900
                  text-white
                  px-6
                  py-3
                  rounded-lg
                "
              >
                Start Free Audit
              </Link>

              <Link
                href="/demo"
                className="
                  border
                  border-slate-300
                  px-6
                  py-3
                  rounded-lg
                  bg-white
                "
              >
                View Sample Report
              </Link>

            </div>

          </div>

          {/* Proof Section */}
          <section className="max-w-6xl mx-auto px-6 pb-24">

              <div className="text-center mb-12">

                <h2 className="text-3xl font-bold">
                  See SaaScope In Action
                </h2>

                <p className="mt-3 text-slate-600">
                  A sample audit showing hidden
                  SaaS waste and savings opportunities.
                </p>

              </div>

              <div
                className="
                  bg-white
                  border
                  border-slate-200
                  rounded-2xl
                  p-8
                  shadow-sm
                "
              >

              <div className="grid md:grid-cols-2 gap-8">

                <div>

                  <p className="text-sm text-slate-500">
                    Potential Savings
                  </p>

                  <h3 className="text-5xl font-bold mt-2">
                    ₹147,300
                  </h3>

                  <div className="mt-8 space-y-4">

                    <div className="flex justify-between">
                      <span>Slack</span>
                      <span>₹35,000</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Zoom</span>
                      <span>₹39,000</span>
                    </div>

                    <div className="flex justify-between">
                      <span>HubSpot</span>
                      <span>₹73,300</span>
                    </div>

                  </div>

                </div>

              <div>

              <div className="space-y-4">

                <div className="rounded-xl bg-green-50 p-4">
                  ✓ 3 Unused Licenses Found
                </div>

                <div className="rounded-xl bg-yellow-50 p-4">
                  ✓ 2 Duplicate Subscriptions
                </div>

                <div className="rounded-xl bg-blue-50 p-4">
                  ✓ 5 Optimization Opportunities
                </div>

              </div>

              </div>

            </div>

            </div>

          </section>

        </div>

      </section>

      {/* Product Preview */}
      <section className="py-8">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

          <h2 className="text-4xl font-bold">
            Detailed Optimization Insights
          </h2>

          <p className="mt-4 text-slate-600">
            Understand exactly where your SaaS budget is being wasted.
          </p>

        </div>

        <div
          className="
            rounded-3xl
            overflow-hidden
            border
            border-slate-200
            shadow-2xl
            bg-white
          "
        >

          <Image
            src="/demo-report.png"
            alt="SaaScope Report Detail"
            width={1600}
            height={900}
            className="w-full h-auto"
          />

        </div>

        <div className="mt-12">

  <div className="text-center mb-8">

    <h2 className="text-3xl font-bold">
      Actionable Savings Recommendations
    </h2>

    <p className="mt-2 text-slate-600">
      Understand exactly where SaaS spending can be reduced.
    </p>

  </div>

  <div
    className="
      rounded-3xl
      overflow-hidden
      border
      border-slate-200
      shadow-2xl
      bg-white
    "
  >

    <Image
      src="/demo-report-detail.png"
      alt="SaaScope Report Detail"
      width={1600}
      height={900}
      className="w-full h-auto"
    />

  </div>

</div>

    </div>

</section>

      {/* Who Is It For */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-3xl font-bold text-center mb-12">
          Built For Teams Managing SaaS Spend
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold">
              Startup Founders
            </h3>

            <p className="mt-2 text-slate-600">
              Reduce unnecessary software
              costs and extend runway.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold">
              Finance Teams
            </h3>

            <p className="mt-2 text-slate-600">
              Gain visibility into recurring
              SaaS spending.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold">
              Operations Teams
            </h3>

            <p className="mt-2 text-slate-600">
              Identify overlapping tools
              and inefficiencies.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold">
              Agencies & SMBs
            </h3>

            <p className="mt-2 text-slate-600">
              Stop paying for software
              that provides little value.
            </p>
          </div>

        </div>

      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            "Upload CSV",
            "Analyze Usage",
            "Find Waste",
            "Reduce Costs",
          ].map((step, index) => (
            <div
              key={step}
              className="
                bg-white
                border
                border-slate-200
                rounded-xl
                p-6
              "
            >
              <div
                className="
                  text-sm
                  font-semibold
                  text-slate-500
                  mb-4
                "
              >
                0{index + 1}
              </div>

              <h3 className="font-semibold">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* Outcomes */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-2xl
            p-10
          "
        >

          <h2 className="text-3xl font-bold">
            What You&apos;ll Discover
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div>
              ✓ Unused Licenses
            </div>

            <div>
              ✓ Duplicate Subscriptions
            </div>

            <div>
              ✓ Overpaying Vendors
            </div>

            <div>
              ✓ Cost Saving Opportunities
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div
          className="
            bg-slate-900
            text-white
            rounded-2xl
            p-12
            text-center
          "
        >

          <h2 className="text-4xl font-bold">
            Ready To Audit Your SaaS Spend?
          </h2>

          <p className="mt-4 text-slate-300">
            Upload your first SaaS export
            and uncover hidden savings.
          </p>

          <Link
            href="/register"
            className="
              inline-block
              mt-8
              bg-white
              text-slate-900
              px-6
              py-3
              rounded-lg
              font-medium
            "
          >
            Create Account
          </Link>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">

        <div
          className="
            max-w-6xl
            mx-auto
            px-6
            py-10
            flex
            justify-between
            items-center
          "
        >

          <div>
            <h3 className="font-semibold">
              SaaScope
            </h3>

            <p className="text-sm text-slate-500">
              SaaS Cost Optimization Platform
            </p>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 SaaScope
          </p>

        </div>

      </footer>

    </main>
  );
}