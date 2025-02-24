

export default function DineCard({ Restdata }) {
  return (
    <div className="flex-none max-w-sm">
      <a target="_blank" href={Restdata.cta.link}>
      <div className="relative text-white font-bold">
        <img
          className="w-80 h-50 object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            Restdata.info.mediaFiles[0].url
          }
          alt={Restdata?.info?.name}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        {/* Text elements with higher z-index */}
        <p className="absolute bottom-4 left-4 z-10">{Restdata?.info?.name}</p>
        <p className="absolute bottom-4 right-4 z-10">
          {Restdata?.info?.rating?.value}
        </p>
      </div>
      </a>
      
    </div>
  );
}
