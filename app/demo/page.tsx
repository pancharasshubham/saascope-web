import Link from "next/link";

<header className="border-b border-slate-200 bg-pink-50">

  <div
    className="
      max-w-6xl
      mx-auto
      px-6
      h-16
      flex
      items-center
      justify-between
    "
  >

    <Link
      href="/"
      className="
        text-xl
        font-bold
      "
    >
      SaaScope
    </Link>

    <div className="flex gap-3">

      <Link
        href="/"
        className="
          px-4
          py-2
          rounded-lg
          hover:bg-slate-100
        "
      >
        Home
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

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-[#F6F8FB]">

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Header */}

        <div className="mb-12">

          <span
            className="
              inline-block
              rounded-full
              bg-green-100
              text-green-700
              px-3
              py-1
              text-sm
              font-medium
            "
          >
            Sample Audit Report
          </span>

          <h1
            className="
              text-5xl
              font-bold
              text-slate-900
              mt-4
            "
          >
            See What SaaScope Finds
          </h1>

          <p
            className="
              mt-4
              text-lg
              text-slate-600
              max-w-2xl
            "
          >
            Example results generated from
            a SaaS subscription export.
            Discover unused licenses,
            duplicate subscriptions,
            and potential savings.
          </p>

        </div>

        {/* Summary Cards */}

        <div
          className="
            grid
            md:grid-cols-4
            gap-6
            mb-16
          "
        >

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">

            <p className="text-sm text-slate-500">
              Potential Savings
            </p>

            <h2 className="text-3xl font-bold mt-2">
              ₹147,300
            </h2>

          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">

            <p className="text-sm text-slate-500">
              Vendors Flagged
            </p>

            <h2 className="text-3xl font-bold mt-2">
              3
            </h2>

          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">

            <p className="text-sm text-slate-500">
              Duplicate Tools
            </p>

            <h2 className="text-3xl font-bold mt-2">
              2
            </h2>

          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">

            <p className="text-sm text-slate-500">
              Unused Licenses
            </p>

            <h2 className="text-3xl font-bold mt-2">
              5
            </h2>

          </div>

        </div>

        {/* Top Savings */}

        <section className="mb-16">

          <h2
            className="
              text-2xl
              font-semibold
              mb-6
            "
          >
            Top Savings Opportunities
          </h2>

          <div className="space-y-4">

            {[
              {
                vendor: "HubSpot",
                savings: "₹73,300",
                confidence: "High",
                action:
                  "Reduce inactive seats and downgrade unused plans",
              },
              {
                vendor: "Zoom",
                savings: "₹39,000",
                confidence: "Medium",
                action:
                  "Remove duplicate subscriptions",
              },
              {
                vendor: "Slack",
                savings: "₹35,000",
                confidence: "High",
                action:
                  "Cancel inactive user licenses",
              },
            ].map((item) => (
              <div
                key={item.vendor}
                className="
                  bg-white
                  border
                  border-slate-200
                  rounded-xl
                  p-6
                  shadow-sm
                "
              >

                <div className="flex justify-between items-start">

                  <div>

                    <h3
                      className="
                        text-lg
                        font-semibold
                      "
                    >
                      {item.vendor}
                    </h3>

                    <p
                      className="
                        text-slate-500
                        mt-1
                      "
                    >
                      Confidence:
                      {" "}
                      {item.confidence}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-sm text-slate-500">
                      Savings
                    </p>

                    <p className="text-2xl font-bold">
                      {item.savings}
                    </p>

                  </div>

                </div>

                <div
                  className="
                    mt-4
                    bg-slate-50
                    rounded-lg
                    p-4
                  "
                >
                  <span className="font-medium">
                    Recommended Action:
                  </span>
                  {" "}
                  {item.action}
                </div>

              </div>
            ))}

          </div>

        </section>

        {/* Insights */}

        <section className="mb-16">

          <h2
            className="
              text-2xl
              font-semibold
              mb-6
            "
          >
            What SaaScope Detected
          </h2>

          <div
            className="
              grid
              md:grid-cols-3
              gap-6
            "
          >

            <div className="bg-white border border-slate-200 rounded-xl p-6">

              <h3 className="font-semibold">
                Unused Licenses
              </h3>

              <p className="text-slate-600 mt-2">
                Several paid seats showed
                no recent activity.
              </p>

            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">

              <h3 className="font-semibold">
                Duplicate Tools
              </h3>

              <p className="text-slate-600 mt-2">
                Multiple subscriptions
                performing the same job.
              </p>

            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">

              <h3 className="font-semibold">
                Overspending
              </h3>

              <p className="text-slate-600 mt-2">
                Plans exceed actual
                business usage.
              </p>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section>

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
              Ready To Audit Your Own SaaS Stack?
            </h2>

            <p
              className="
                mt-4
                text-slate-300
              "
            >
              Upload your SaaS subscription
              export and uncover hidden
              savings opportunities.
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

      </div>

    </main>
  );
}