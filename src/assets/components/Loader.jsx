export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50">
      <div className="snake-loader">
        <span></span><span></span><span></span><span></span>
      </div>

      <p className="text-amber-300 font-mono text-lg mt-6 animate-pulse">
        Portfolio is loading...
      </p>
    </div>
  );
}
