import Image from "next/image";

export function HeroImage() {
  return (
    <div className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
      {/* Photo */}
      <Image
        src="/header.jpg"
        alt="Reetdachhaus an der Ostsee"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark terminal overlay — blends photo with theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-terminal-bg/60 via-terminal-bg/40 to-terminal-bg" />

      {/* Scanline texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 scanlines opacity-40"
      />

      {/* Caption */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="font-mono text-sm text-terminal-green terminal-glow-sm">
          &gt; Reetdachhaus · Ostsee
        </p>
      </div>
    </div>
  );
}
