type StatCardProps = {
  title: string;
  value: string | number;
};

export default function StatCard({
  title,
  value,
}: StatCardProps) {

  return (
    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-xl
        p-6
        shadow-sm
      "
    >
      <p
        className="
          text-sm
          text-slate-500
        "
      >
        {title}
      </p>

      <h2
        className="
          text-3xl
          font-semibold
          mt-2
        "
      >
        {value}
      </h2>
    </div>
  );
}