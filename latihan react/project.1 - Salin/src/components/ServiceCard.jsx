function ServiceCard({ icon, title, description }) {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="card service-card h-100 border-0 shadow-sm">
        <div className="card-body p-4">

          <div className="service-icon mb-4">
            <i className={`bi ${icon}`}></i>
          </div>

          <h5 className="fw-bold mb-3">
            {title}
          </h5>

          <p className="text-secondary mb-0">
            {description}
          </p>

        </div>
      </div>
    </div>
  );
}

export default ServiceCard;