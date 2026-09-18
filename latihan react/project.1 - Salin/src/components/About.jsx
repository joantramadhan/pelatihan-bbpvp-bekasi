function About() {
    return (
        <section id="about" className="py-5" >
            <div className="container">
                <div className="row align-item-center g-5">
                    <div className="col-lg-6">
                        <div className="about-image">
                            <i className="bi bi-people-display-1 text-primary"></i>
                            <h4 className="fw-bold mt-3">
                                Profesional team
                            </h4>
                            <p className="text-secondary">
                                Team Berpengalaman yang siap Membantu Kebutuhan Digital Anda
                            </p>

                        </div>
                        {/*kontak kanan di section About */}
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <span className="text-primary fw-semibold">
                            Tentang kami
                        </span>
                        <h2 className="display-6 fw-bold mt-2 mb-4">
                            partner digital untuk pertumbuhan bisnis
                        </h2>
                        <p className="text-secondary">
                            kami menggabungkan teknologi, desain dan pemahaman terhadap kebutuhan bisnis untuk menghasilkan solusi yang tepat
                        </p>
                        <div className="roow mt-4">
                            <div classname='col-6'>
                                <h3 className='fw-bold text-primary'>
                                    10+
                                </h3>
                                <p className="text-secondary">
                                    tahun pengalaman
                                </p>
                            </div>
                            <div className="col-6">
                                <h3 className='fw-bold text-primary'>
                                    100+
                                </h3>
                                <p className="text-secondary">
                                    Project selesai
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default About;