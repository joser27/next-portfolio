export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-[#1f1f1f] text-gray-200"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8 text-white">Contact Me</h1>
        <div className="space-y-6">
          <a
            href="https://github.com/joser27"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xl hover:text-blue-300 transition-colors"
          >
            <i className="fab fa-github mr-2"></i>GitHub
          </a>
          <a
            href="https://linkedin.com/in/joser27"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xl hover:text-blue-300 transition-colors"
          >
            <i className="fab fa-linkedin mr-2"></i>LinkedIn
          </a>
          <a
            href="mailto:joser27@uw.edu"
            className="block text-xl hover:text-blue-300 transition-colors"
          >
            <i className="fas fa-envelope mr-2"></i>joser27@uw.edu
          </a>
        </div>
      </div>
    </section>
  );
}
