/**
 * Pure-CSS floating gradient blobs for hero backgrounds. No JS/motion needed
 * (drift comes from the `blob-float` keyframe in globals.css), so this is safe
 * to drop into Server Components as well as Client Components.
 * Place inside a `relative overflow-hidden` container, before the foreground content.
 */
export default function HeroBlobs() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="bg-mesh-blob"
        style={{
          top: "-10%",
          left: "-6%",
          width: "32rem",
          height: "32rem",
          background:
            "radial-gradient(circle at 30% 30%, var(--color-primary-300), transparent 70%)",
        }}
      />
      <div
        className="bg-mesh-blob"
        style={{
          top: "10%",
          right: "-8%",
          width: "26rem",
          height: "26rem",
          background:
            "radial-gradient(circle at 60% 40%, var(--color-accent-300), transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="bg-mesh-blob"
        style={{
          bottom: "-14%",
          left: "20%",
          width: "30rem",
          height: "30rem",
          background:
            "radial-gradient(circle at 50% 50%, var(--color-primary-200), transparent 70%)",
          animationDelay: "-11s",
        }}
      />
    </div>
  );
}
