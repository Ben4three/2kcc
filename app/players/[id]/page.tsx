import { players } from "@/data/players";
import AttributeBar from "@/components/AttributeBar";

export default function PlayerPage({
  params,
}: {
  params: {
    id: string;
  };
}) {

  const player = players.find(
    (p) => p.id === Number(params.id)
  );

  if (!player) {
    return <div>Player not found</div>;
  }

  return (
    <main className="max-w-5xl mx-auto p-10">

      <div className="flex gap-10">

        <img
          src={player.image}
          className="w-80 rounded-xl"
        />

        <div>

          <h1 className="text-5xl font-bold">
            {player.name}
          </h1>

          <h2 className="text-3xl text-yellow-400 mt-2">
            {player.overall} OVR
          </h2>

          <p className="text-zinc-400 mt-3">
            {player.position}
          </p>

        </div>

      </div>

      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-8">
          Attributes
        </h2>

        <AttributeBar
          name="3PT Shot"
          value={player.attributes.threePoint}
        />

        <AttributeBar
          name="Driving Dunk"
          value={player.attributes.drivingDunk}
        />

        <AttributeBar
          name="Speed"
          value={player.attributes.speed}
        />

        <AttributeBar
          name="Ball Handle"
          value={player.attributes.ballHandle}
        />

      </div>

    </main>
  );
}
