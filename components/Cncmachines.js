import Image from "next/image";

const cncMachines = [
  {
    title: "CNC ROUTERS",
    models: "6 MODELS",
    price: "STARTING AT $10,495.00",
    application: "CNC ROUTER APPLICATIONS",
    imgSrc: "/product_images/image1.png", // Replace with actual image path
    links: [
      { text: "All CNC Routers", href: "#" },
      { text: "Get a Quote", href: "#" },
    ],
  },
  {
    title: "CNC PLASMAS",
    models: "3 MODELS",
    price: "STARTING AT $6,495.00",
    application: "ALL CNC PLASMA APPLICATIONS",
    imgSrc: "/product_images/image2.png",
    links: [
      { text: "All CNC Plasma", href: "#" },
      { text: "Get a Quote", href: "#" },
    ],
  },
  {
    title: "CNC LASERS",
    models: "2 MODELS",
    price: "STARTING AT $59,995.00",
    application: "ALL CNC LASER APPLICATIONS",
    imgSrc: "/product_images/image3.png",
    links: [
      { text: "All CNC Lasers", href: "#" },
      { text: "Get a Quote", href: "#" },
    ],
  },
];

export default function CncMachines() {
  return (
    <section className="bg-white py-10 px-6 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        OUR CNC MACHINES
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cncMachines.map((machine, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden p-6 flex flex-col"
            style={{ boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.15)" }}            
          >
            {/* Image */}
            <div className="relative w-full h-64">
              <Image
                src={machine.imgSrc}
                alt={machine.title}
                layout="fill"
                objectFit="contain"
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mt-4">{machine.title}</h3>
            <p className="text-gray-600 text-sm">{machine.models}</p>
            <p className="text-gray-900 font-semibold text-sm">{machine.price}</p>

            {/* Links */}
            <div className="mt-4 flex justify-between text-blue-600 text-sm font-medium">
              {machine.links.map((link, i) => (
                <a key={i} href={link.href} className="flex items-center space-x-1">
                  <span>{link.text}</span> <span>→</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* View Our Services Button */}
      <div className="flex justify-center mt-12">
        <a
          href="#services"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 sm:px-8 sm:py-4 rounded-lg transition-all text-base sm:text-lg shadow-md"
        >
          View Our Services →
        </a>
      </div>
    </section>
  );
}
