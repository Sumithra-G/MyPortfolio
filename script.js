const viewBtn = document.getElementById("viewMoreBtn");
const moreCertificates = document.getElementById("moreCertificates");

if (viewBtn && moreCertificates) {

    viewBtn.addEventListener("click", function () {

        moreCertificates.classList.toggle("show");

        if (moreCertificates.classList.contains("show")) {
            viewBtn.textContent = "Show Less";
        } else {
            viewBtn.textContent = "View All Certificates";

            document.getElementById("Certifications").scrollIntoView({
                behavior: "smooth"
            });
        }

    });

}