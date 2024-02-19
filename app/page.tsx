import GridOption from "@/components/grid-option";

export default function Home() {
  return (
    <main>
      <div className="m-6 grid grid-flow-row-dense grid-cols-1 gap-6 md:grid-cols-4">
        <GridOption
          title="Sweet gifts for less"
          image=""
          className="h-full bg-pink-200 md:h-32"
        />
        <GridOption
          title="Shop Wardrobe"
          image="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="col-span-2 row-span-2 bg-blue-100"
        />
        <GridOption
          title="Shop Home"
          image="https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="row-span-2 bg-pink-200"
        />
        <GridOption
          title="Shop Electronics"
          image="https://images.pexels.com/photos/343457/pexels-photo-343457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="h-64 bg-yellow-100"
        />
        <GridOption
          title="Shop Toys"
          image="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="col-span-2 h-64 bg-green-100"
        />
        <GridOption
          title="All you need for match day"
          image="https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="col-span-2 row-span-2 bg-red-100"
        />
        <GridOption
          title="Shop Gadgets"
          image="https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="h-64 bg-orange-100"
        />
        <GridOption
          title="Shop Beauty"
          image="https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="h-64 bg-blue-100"
        />
        <GridOption
          title="Shop Sports"
          image="https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="h-64 bg-blue-100"
        />
        <GridOption
          title="Enjoy Free Shipping"
          image="https://images.pexels.com/photos/1556691/pexels-photo-1556691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="h-64 bg-rose-100"
        />
        <GridOption
          title="Flash Deals"
          image="https://images.pexels.com/photos/9017721/pexels-photo-9017721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="col-span-2 h-64 bg-orange-200"
        />
      </div>
    </main>
  );
}