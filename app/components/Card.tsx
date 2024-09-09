import Image from "next/image";

interface CardProps {
  imageSrc: string;
  altText: string;
  title: string;
  content: string;
  skills: string[];
}

export default function Card({
  imageSrc,
  altText,
  title,
  content,
  skills,
}: CardProps) {
  return (
    <div className="flex flex-col md:flex-row bg-[rgb(41,41,41)] rounded-lg shadow-xl overflow-hidden max-w-4xl">
      <div className="md:w-1/3">
        <Image
          src={imageSrc}
          alt={altText}
          width={300}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-2/3 p-8">
        <h2 className="text-3xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-gray-300 mb-6">{content}</p>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-[rgb(51,51,51)] text-white px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
