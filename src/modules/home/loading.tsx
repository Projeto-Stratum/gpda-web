export default function Loading() {
  console.log("Loading");
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-pulse">
        <div className="h-[50px] w-[50px] bg-white/20 rounded-full"></div>
        <div className="h-[50px] w-[50px] bg-white/20 rounded-full"></div>
        <div className="h-[50px] w-[50px] bg-white/20 rounded-full"></div>
      </div>
    </div>
  );
}
