import { routes } from "./constant";
export default function Sidebar() {
  return (
    <div className="flex flex-col max-w-72 min-h-screen items-center bg-black text-white border-white py-4 px-2">
      <h1 className="text-4xl font-bold p-4 text-nowrap">Project Name</h1>
      {routes.map((route, index) => {
        return (
          <a key={index} href={route.href}>
            <div className="p-2 hover:bg-white/20 w-full text-center text-xl">
              {route.name}
            </div>
          </a>
        );
      })}
    </div>
  );
}
