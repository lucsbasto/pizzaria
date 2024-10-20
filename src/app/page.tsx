import Banner from "./components/Banner";
import Pizza from "./components/Pizza";
import { pizzas } from "./data";

export default function Home() {
  return (
    <section className="bg-slate-300 bg-pattern">
      <Banner/>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12">
          {
            pizzas.map((pizza) => {
              return <Pizza key={pizza.id} pizza={pizza}/>
            })
          }
        </div>
      </div>
    </section>
  );
}
