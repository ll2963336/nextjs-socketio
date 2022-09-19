import { useRouter } from "next/router";

export default function Home() {
  const route = useRouter();

  function toSpaceBreak() {
    route.push("/spaceBreak");
  }
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <button
        onClick={toSpaceBreak}
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Space Break
      </button>
    </div>
  );
}
