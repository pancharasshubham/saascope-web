type AuthLayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function AuthLayout({
  title,
  description,
  children,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F6F8FB]">

      <div className="grid lg:grid-cols-2 min-h-screen">

        <div
          className="
            hidden
            lg:flex
            flex-col
            justify-center
            px-16
            bg-slate-900
            text-white
          "
        >

          <h1 className="text-4xl font-bold">
            SaaScope
          </h1>

          <h2 className="text-5xl font-bold mt-8 leading-tight">
            Stop Paying For
            Software Nobody Uses.
          </h2>

          <p className="mt-6 text-slate-300 text-lg">
            Upload SaaS subscription exports
            and uncover hidden savings
            opportunities in minutes.
          </p>

          <div
            className="
              mt-10
              bg-white/10
              border
              border-white/20
              rounded-2xl
              p-6
            "
          >

            <p className="text-sm text-slate-300">
              Example Audit
            </p>

            <div className="mt-4">

              <div className="flex justify-between">
                <span>Slack</span>
                <span>₹12,000</span>
              </div>

              <div className="flex justify-between mt-2">
                <span>Zoom</span>
                <span>₹8,500</span>
              </div>

              <div className="flex justify-between mt-2">
                <span>HubSpot</span>
                <span>₹25,000</span>
              </div>

            </div>

            <div
              className="
                mt-6
                pt-4
                border-t
                border-white/10
              "
            >

              <p className="text-sm text-slate-300">
                Potential Savings
              </p>

              <h3 className="text-3xl font-bold">
                ₹45,500
              </h3>

            </div>

          </div>

        </div>

        <div
          className="
            flex
            items-center
            justify-center
            px-6
          "
        >

          <div
            className="
              w-full
              max-w-md
              bg-white
              border
              border-slate-200
              rounded-2xl
              p-8
              shadow-sm
            "
          >

            <h1 className="text-3xl font-bold">
              {title}
            </h1>

            <p className="text-slate-500 mt-2">
              {description}
            </p>

            <div className="mt-8">
              {children}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}