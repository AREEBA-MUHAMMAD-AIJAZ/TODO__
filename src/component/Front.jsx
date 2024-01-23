import Link from "next/link";

const Front = () => {
  return (
    <div className="text-center my-10">
      <div className="flex flex-col gap-5 pt-12 md:pt-40 pb-12 md:pb-40">
        <h1 className="text-6xl font-semibold p-1">
          Organize your Work and life Finally...
        </h1>
        <p className="text-lg p-1">
          Become focused organizedand calm with todo app. The worlds no 1
          Task Manager APP!
        </p>
        <div>
          <Link
            href={"/todo"}
            className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-300"></span>
            <span className="relative text-semibold text-2xl">Set Todo</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Front;
