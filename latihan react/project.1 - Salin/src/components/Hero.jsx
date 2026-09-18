function Hero() {
    return (
        <section id="home" className="hero-section" >
            <div className= "container">
                <div className= "row align-item-center min-vh-100 py-5">
                    <div className="col-lg-6">
                        <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
                            Solusi Digital Untuk Bisnis Anda
                        </span>

                        <h1 className="display-4 fw-bold mb-4">
                            Mengembangkan Bisnis
                            di era Digital
                        </h1>
                        <p className = "lead text-secondary mb-4">
                            Kami Membantu perusahaan membangun solusi digital yang modern, efektif, dan mudah digunakan untuk meningkatkan produktivitas bisnis.
                        </p>
                        <div className='d-flex gap-3 flex-wrap' >
                            <a href='#services' className="btn btn-primary btn-lg px-4">
                                Tentang Kami
                            </a>
                            <a href='#about' className="btn btn-outline-secondary btn-lg px-4">
                                Tentang Kami
                            </a>
                        </div>
                        {/*kontak kanan di section hero */}
                        
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                            <div className="hero-card shadow-lg">
                                <i className="bi bi-building display-1 text-primary"></i>
                                <h3 className="fw-bold mt-4">Tecnology & inovation</h3>
                                <p className="text-secondary">membawa ide menjadi solusi nyata</p>
                            </div>
                        </div>

                </div>
            </div>

        </section>
    )
}

export default Hero;