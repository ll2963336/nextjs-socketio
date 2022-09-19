import { useRouter } from "next/router";

const SpaceBreakIndex = () => {
  const route = useRouter();

  function toCompetitionMode() {
    route.push("/spaceBreak/[gameMode]", "/spaceBreak/competition");
  }
  function toSingleMode() {
    route.push("/spaceBreak/[gameMode]", "/spaceBreak/single");
  }

  return (
    <div className="w-screen h-screen flex flex-col gap-y-6 items-center justify-center">
      <button
        onClick={toCompetitionMode}
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        競賽模式
      </button>
      <button
        onClick={toSingleMode}
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        單人模式
      </button>
    </div>
  );
};

export default SpaceBreakIndex;
