type Props = {
  name: string;
  value: number;
};

export default function AttributeBar({
  name,
  value,
}: Props) {
  return (
    <div className="mb-4">

      <div className="flex justify-between mb-1">
        <span>{name}</span>
        <span>{value}</span>
      </div>

      <div className="bg-zinc-800 rounded-full h-3 overflow-hidden">

        <div
          className="bg-yellow-400 h-3"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
}
