import Image from "next/image";
import Feed from "@/components/Feed";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className=" text-6xl p-2">Discover & Share</div>
        <div className="text-3xl p-2">AI Powered and Prompts</div>
        <div className="text-lg p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facere
          illum, possimus mollitia quae, sapiente nemo unde suscipit quia
          reprehenderit perspiciatis voluptatum velit fugit voluptate libero
          blanditiis. Omnis, beatae debitis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Expedita officiis quibusdam accusantium
          ullam dignissimos praesentium? Dolores ullam totam enim? Minus
          perspiciatis dignissimos laborum. Nulla facilis nostrum, quam aliquam
          natus est.
        </div>

        <Feed />
      </div>
    </>
  );
}
