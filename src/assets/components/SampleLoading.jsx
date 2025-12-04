export default function SampleLoading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/70 backdrop-blur z-50">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-amber-300 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-amber-300 rounded-full animate-bounce delay-150"></div>
        <div className="w-3 h-3 bg-amber-300 rounded-full animate-bounce delay-300"></div>
      </div>
      <p className="text-amber-200 font-mono mt-4 text-lg animate-bounce">Loading...</p>
    </div>
  );
}
