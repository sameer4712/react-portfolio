export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50">
      <div className="snake-loader md:ml-14 ml-10 ">
        <span></span><span></span><span></span><span></span>
      </div>
      <p className="text-amber-300 font-mono text-lg mt-4 md:ml-14 ml-7 animate-pulse">
        Portfolio is loading...
      </p>

    </div>
  );
}
