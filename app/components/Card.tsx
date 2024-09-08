import Image from "next/image";

interface CardProps {
  imageSrc: string;
  altText: string;
  content: string;
}

export default function Card({ imageSrc, altText, content }: CardProps) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:w-1/3">
        <Image
          src={imageSrc}
          alt={altText}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-6">
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
}
