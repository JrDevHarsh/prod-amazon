const Skeleton = () => {
  return (
    <div className="block w-80 h-auto bg-white p-4">
      <div className="animate-pulse">
        <div className="block w-full min-h-[210px] bg-slate-300"></div>
        <div className="block mt-2 py-3 w-full bg-slate-300"></div>
        <div className="block mt-2 py-2 w-32 bg-slate-300"></div>
        <div className="block mt-2 py-3 w-24 bg-slate-300"></div>
      </div>
    </div>
  );
};

export default Skeleton;
