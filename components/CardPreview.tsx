type Props = {
  image: string;
};

export default function CardPreview({
  image,
}: Props) {

  return (

    <div
      className="
      relative
      w-[350px]
      h-[500px]
      rounded-3xl
      overflow-hidden
      border-4
      border-purple-500
      bg-black
      "
    >

      <img
        src={image}
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      />

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black
        via-transparent
        to-transparent
        "
      />

      <div className="absolute bottom-6 left-6">

        <h2 className="text-3xl font-bold text-white">
          CUSTOM PLAYER
        </h2>

        <p className="text-purple-300">
          99 OVR
        </p>

      </div>

    </div>

  );
}
