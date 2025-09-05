// Fetch JSON data and display in respective sections
fetch("product.json")
  .then(response => response.json())
  .then(data => {
    renderFeatures(data.filter(item => item.category === "feature"));
    renderPricing(data.filter(item => item.category === "pricing"));
    renderTestimonials(data.filter(item => item.category === "testimonial"));
    renderCTA(data.filter(item => item.category === "cta"));
  });
// Render Features
function renderFeatures(features) {
  const container = document.getElementById("features-list");
  features.forEach(f => {
    container.innerHTML += `
      <div class="col-md-3">
      <div class="card h-100 text-center bg-dark text-white border-primary">
      <img src="${f.image}" class="card-img-top w-50 mx-auto mt-3" alt="${f.title}">
      <div class="card-body">
      <h5 class="card-title">${f.title}</h5>
      <p class="card-text">${f.description}</p>
      </div>
      </div>
      </div>
    `;
  });
}
// Render Pricing
function renderPricing(plans) {
  const container = document.getElementById("pricing-list");
  plans.forEach(p => {
    container.innerHTML += `
      <div class="col-md-4">
      <div class="card h-100 text-center bg-dark text-white border-info">
      <div class="card-body">
      <h5 class="card-title">${p.title}</h5>
      <p class="card-text">${p.description}</p>
      <h3 class="text-primary">$${p.price}/mo</h3>
        <a href="#" class="btn btn-outline-primary mt-3">Choose Plan</a>
          </div>
        </div>
      </div>
    `;
  });
}
// Render Testimonials
function renderTestimonials(testimonials) {
  const container = document.getElementById("testimonials-list");
  testimonials.forEach(t => {
    container.innerHTML += `
      <div class="col-md-6">
        <div class="card h-100 bg-dark text-white border-success">
          <div class="card-body">
            <img src="${t.image}" alt="Customer" class="rounded-circle mb-3" width="60">
            <h6>${t.title}</h6>
            <p class="card-text">"${t.description}"</p>
          </div>
        </div>
      </div>
    `;
  });
}
// Render CTA
function renderCTA(ctaItems) {
  const container = document.getElementById("cta-content");
  ctaItems.forEach(c => {
    container.innerHTML += `
      <h2>${c.title}</h2>
      <p class="lead">${c.description}</p>
      <a href="#pricing" class="btn btn-light btn-lg mt-3">Start Free Trial</a>
    `;
  });
}
