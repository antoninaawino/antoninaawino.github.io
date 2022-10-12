AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [{
        title: "Part-time Lecturer",
        cardImage: "assets/images/experience-page/equator.jpg",
        place: "Equator Institute of Technology and proffessional studies",
        time: "(May, 2021-Date)",
        desp: "<li>I teach students programming, (Mobile development, python, Database design and development</li>",
    },
    {
        title: "Software developer and service delivery head",
        cardImage: "assets/images/experience-page/softtec.jpg",
        place: "Softtec Innovation Africa",
        time: "(September, 2020 - May 2021)",
        desp: "<li>Designed and developed ERP systems, Went out for demos, took customer requirements, ensured well done projects meeting customer requirements.</li>",
    },
    {
        title: "Microsoft learn student ambassador",
        cardImage: "assets/images/experience-page/microsoft.jpg",
        place: "Microsoft",
        time: "(August, 2017 - June, 2021)",
        desp: "<li>Led a tech community. Create content and share with the community, Organise tech events and hackathons. I also became the co-founder of Microsoft Evolve (Women in Tech)</li>",
    },
    {
        title: "Android developer Intern",
        cardImage: "assets/images/experience-page/hillcroft.jpg",
        place: "Hillcroft Technologies",
        time: "(October, 2019 – April, 2020)",
        desp: "<li>Worked on building android components for the customer-facing mobile app which provides a variety of insurance solutions digitally</li>",
    },
];

const showCards2 = () => {
    let output = "";
    exp.forEach(
        ({ title, cardImage, place, time, desp }) =>
        (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
    );
    experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);