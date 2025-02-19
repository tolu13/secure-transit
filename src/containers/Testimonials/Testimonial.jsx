import React from "react";
import "./testimonials.css";
import man from "../../assets/man.jpg";
import mans from "../../assets/mans.jpg";

const Testimonial = () => {
  return (
    <div>
      <section class="testimonials">
        <h2>What Our Clients Say</h2>
        <div
          id="testimonialCarousel"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="testimonial-card">
                <img
                  src="client-photo1.jpg"
                  class="d-block w-100 rounded-circle"
                  alt="Client's Photo"
                />
                <p>
                  "This service completely transformed my business. Highly
                  recommend it!"
                </p>
                <h4>John Smith, CEO at ABC Corp</h4>
              </div>
            </div>
            <div class="carousel-item">
              <div class="testimonial-card">
                <img
                  src="client-photo2.jpg"
                  class="d-block w-100 rounded-circle"
                  alt="Client's Photo"
                />
                <p>
                  "An amazing experience! Excellent customer support and
                  fantastic service."
                </p>
                <h4>Jane Doe, Designer at XYZ Ltd</h4>
              </div>
            </div>

            <div class="carousel-item">
              <div class="testimonial-card">
                <img
                  src="client-photo3.jpg"
                  class="d-block w-100 rounded-circle"
                  alt="Client's Photo"
                />
                <p>
                  "I’m so happy with the results! The team was professional and
                  delivered ahead of schedule."
                </p>
                <h4>Mark Taylor, Marketing Director at PQR Co</h4>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
};
export default Testimonial;
