import ServiceCard from "./ServiceCard";

function Services() {
  const services = [
    {
      icon: "bi-laptop",
      title: "Web Development",
      description:
        "Membangun website modern, responsif, dan sesuai kebutuhan.",
    },
    {
      icon: "bi-phone",
      title: "Mobile Application",
      description:
        "Mengembangkan aplikasi mobile untuk Android dan iOS.",
    },
    {
      icon: "bi-bar-chart",
      title: "Data & Analytics",
      description:
        "Mengubah data menjadi informasi yang membantu pengambilan keputusan.",
    },
    {
      icon: "bi-cloud",
      title: "Cloud Solution",
      description:
        "Menyediakan solusi cloud yang fleksibel dan mudah dikembangkan.",
    },
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">

        {/* Section Heading */}
        <div className="text-center mb-5">
          <span className="text-primary fw-semibold">
            Our Services
          </span>

          <h2 className="fw-bold mt-2">
            Solusi untuk Kebutuhan Digital
          </h2>

          <p className="text-secondary mx-auto section-description">
            Berbagai layanan teknologi untuk membantu bisnis berkembang
            lebih cepat dan efisien.
          </p>
        </div>

        {/* Service Cards */}
        <div className="row g-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;