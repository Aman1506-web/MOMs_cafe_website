import Image from "next/image";

export default function InstagramAvatar() {
  return (
    <div className="flex justify-center">
      {/* Gradient Ring */}
      <div className="p-[3px] rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400">
        {/* White inner border */}
        <div className="bg-white p-[3px] rounded-full">
          {/* Avatar */}
          <Image
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=200&h=200&fit=crop"
            alt="Bakehouse Cafe"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
