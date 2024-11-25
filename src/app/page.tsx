import Header from "@/components/Header/Header";
import Menu from "@/components/Menu/Menu";


export default function Page() {
  return (
    <div>
      <Header/>
      <div className="flex">
        <div className="basis-[200px]">
          <Menu/>
        </div>
        <div className="flex-auto">
          HOME
        </div>
      </div>
    </div>
  );
}
