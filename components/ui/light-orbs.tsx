export function LightOrbs() {
  return (
    <div>
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-angely-yellow-300/60 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-angely-teal-300/50 blur-3xl animate-pulse [animation-duration:5s]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-angely-pink-300/50 blur-3xl animate-pulse [animation-duration:7s]" />
    </div>
  );
}
