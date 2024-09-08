import Card from "./Card";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center p-6"
    >
      <Card
        imageSrc="/path/to/your/profile-picture.jpg"
        altText="Your Name"
        content="Here you can write a brief description about yourself. For example: I'm a passionate web developer with experience in React, Next.js, and TypeScript. I love creating user-friendly and efficient web applications."
      />
    </section>
  );
}
