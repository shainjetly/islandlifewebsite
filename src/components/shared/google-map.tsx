"use client";

interface GoogleMapProps {
  lat: number;
  lng: number;
  name: string;
}

export function GoogleMap({ lat, lng, name }: GoogleMapProps) {
  const query = encodeURIComponent(`${name}, Maldives`);

  return (
    <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
      <iframe
        src={`https://www.google.com/maps?q=${lat},${lng}&z=12&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map showing ${name}`}
        className="absolute inset-0"
      />
    </div>
  );
}
