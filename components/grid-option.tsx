import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface GridOptionProps {
  title: string;
  className?: string;
  image?: string;
}

const GridOption = ({ title, className, image }: GridOptionProps) => {
  return (
    <Link
      className={cn("grid-option relative", className)}
      href={{ pathname: "/search", query: { q: title } }}
    >
      <h2 className="text-xl font-bold">{title}</h2>
      {image && (
        <Image
          src={image}
          alt={title}
          layout="fill"
          className="rounded-md object-cover opacity-20"
        />
      )}
    </Link>
  );
};

export default GridOption;