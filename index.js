// ================================= Constants ================================== \\

const PROFILE = {
    name: "Amirmahdi Digbari",
    role: "Front-end Developer",
    number: "+989020819888",
    email: "amdigbari@gmail.com",
    linkedIn: "https://www.linkedin.com/in/amdigbari/",
    // link: '',
    location: "Tehran, Iran",
    avatar: "./avatar.jpeg",
};

/**
 * 1 filed between description or bullets is required and it must not be an empty string.
 * Be aware that white spaces are considered empty.
 */
const SUMMARY = {
    // description: `Front-end developer with 4 years of experience in
    // web development. Implemented and launched
    // responsive, cross-browser compatible, and
    // accessibility-friendly panels using React.js, Redux,
    // and Typescript, in an agile environment in
    // SnappShop, an E-commerce company with over 200,000
    // daily users. Led a small Front-end team to develop
    // and release a Design-System third party.`,
    bullets: [
        "Results-driven Front-end Developer with 4 years of experience in web development, specialized in Javascript, React.js, Redux, and Typescript.",
        "Successfully Implemented and launched responsive, cross-browser compatible, and accessibility-friendly panels as part of the initial team at SnappShop, which grew to over 200,000 daily users within 3 years.",
        "Led a small Front-end team to develop and release a Design-System third party, improving overall design consistency and user experience.",
        "Proven ability to work effectively in an agile environment, collaborating with cross-functional teams to deliver high-quality products on time.",
    ],
};

/**
 * In each experience, these three fields are required. title, place, and duration.
 * They must not be an empty string.
 * Be aware that white spaces are considered empty.
 */
const EXPERIENCE = [
    {
        title: "Front-end Developer",
        place: "SnappShop",
        duration: "03/2020 - Ongoing",
        location: "Tehran, Iran",
        description:
            "SnappShop is the e-commerce arm of SnappGroup, a leading IT holdings in the Middle East. It was founded in 2020 and quickly grew to serve 200,000 daily users within its first three years of operation.",
        bullets: [
            "<b>Architected the infrastructure and managed the implementation and launch</b> of the tree-shakable Design-System component library, based on Rollup, Typescript, SASS modules with BEM methodology, and Storybook.",
            "<b>Developed and launched the Content-QC panel</b>, by collaborating with the content-creation team with Webpack, React, Redux, Typescript, and Material-UI. improving the team’s productivity by over 200%.",
            "<b>Enhanced UI/UX and CX of Seller’s journey</b>, by launching the Seller-Center panel using React, Typescript, Redux state management, and Tailwind CSS. Reducing rejected and undelivered orders by 38%.",
            "<b>Reduced 66% of side effects</b>, by communicating with QA engineers and introducing unit and E2E testing infrastructures with Jest, React-testing-library, Cypress, and applying TDD and BDD best practices.",
            "<b>Automated 84% of testing, releasing, and deploying pipelines</b>, by Architecting different CI/CD steps with software and DevOps engineers using Gitlab, Docker, Nginx, and AWS S3.",
        ],
    },
    {
        title: "Junior Front-end Developer",
        place: "Shopgram",
        duration: "02/2019 - 03/2020",
        location: "Tehran, Iran",
        description:
            "Shopgram was a company that connected customers to Instagram business accounts, making it easy for users to search for products, communicate with sellers, and make payments.",
        bullets: [
            "<b>Developed ImageInput and QuickMessage components</b> for the application based on React Native.",
            "<b>Designed a zoom feature</b> for the application from scratch that enabled zooming on product images and product cards, Increasing the number of product views.",
            "<b>Integrated the application Chat-Room into the website</b>, using jQuery, Bootstrap, Django Template, and WebSocket. Increasing chat usage.",
        ],
    },
];

/**
 * Each empty skills will be ignored.
 * Be aware that white spaces are considered empty.
 */
const SKILLS = [
    "Javascript",
    "React",
    "Typescript",
    "Redux",
    "CSS3",
    "HTML5",
    "Git",
    "Scrum",
    "Jira",
];

/**
 * title is required. It must not be an empty string.
 * Be aware that white spaces are considered empty.
 */
const ACHIEVEMENTS = [
    { title: "1st in IranOpen RoboCup in 2016", description: "" },
    { title: "3rd in IranOpen RoboCup in 2015", description: "" },
];

/**
 * Same as Experience
 */
const EDUCATION = [
    {
        title: "Associate of Computer Engineering",
        place: "Sharif University of Technology",
        duration: "09/2017 - 09/2021",
        location: "",
        description: "",
        bullets: [],
    },
];

const LANGUAGES = [
    { language: "English", level: "Proficient", percentLevel: 80 },
    { language: "Persian", level: "Native", percentLevel: 100 },
];

// ================================= Generating ================================== \\

document.querySelector("#header").innerHTML += getProfile();
document.querySelector("#summary-experience").innerHTML += getSummary();
document.querySelector("#summary-experience").innerHTML += getExperience(
    "Experience",
    EXPERIENCE
);

document.querySelector("#skills-achievements-education-languages").innerHTML +=
    getSkills();
document.querySelector("#skills-achievements-education-languages").innerHTML +=
    getAchievements();
document.querySelector("#skills-achievements-education-languages").innerHTML +=
    getExperience("Education", EDUCATION);
document.querySelector("#skills-achievements-education-languages").innerHTML +=
    getLanguages();

// ================================= Templates ================================== \\

function getProfile() {
    const profileTemplate = `<div class="header__profile">
                                ${
                                    isExist(PROFILE.name)
                                        ? `<h1>${PROFILE.name.trim()}</h1>`
                                        : ""
                                }
                                ${
                                    isExist(PROFILE.role)
                                        ? `<h3>${PROFILE.role.trim()}</h3>`
                                        : ""
                                }

                                ${
                                    isExist(PROFILE.number) ||
                                    isExist(PROFILE.email) ||
                                    isExist(PROFILE.linkedIn) ||
                                    isExist(PROFILE.link) ||
                                    isExist(PROFILE.location)
                                        ? `<div class="header__profile_contact">
                                                ${
                                                    isExist(PROFILE.number)
                                                        ? `<a class="header__profile_contact__item" href="tel:${PROFILE.number.trim()}">
                                                                <i class="bi bi-telephone-fill icon"></i>
                                                                ${PROFILE.number.trim()}
                                                            </a>`
                                                        : ""
                                                }

                                                ${
                                                    isExist(PROFILE.email)
                                                        ? `<a href="mailto:${PROFILE.email.trim()}" class="header__profile_contact__item">
                                                                <i class="bi bi-envelope-fill icon"></i>
                                                                ${PROFILE.email.trim()}
                                                            </a>`
                                                        : ""
                                                }
                                                ${
                                                    isExist(PROFILE.linkedIn)
                                                        ? `<a href="${PROFILE.linkedIn.trim()}" target="_blank" class="header__profile_contact__item">
                                                                <i class="bi bi-linkedin icon"></i>
                                                                LinkedIn
                                                            </a>`
                                                        : ""
                                                }

                                                ${
                                                    isExist(PROFILE.link)
                                                        ? `<a href="${PROFILE.link.trim()}" target="_blank" class="header__profile_contact__item">
                                                                <i class="bi bi-link icon" style="transform: rotate(-45deg)"></i>
                                                                ${PROFILE.link.trim()}
                                                            </a>`
                                                        : ""
                                                }

                                                ${
                                                    isExist(PROFILE.location)
                                                        ? `<div class="header__profile_contact__item">
                                                                <i class="bi bi-geo-fill icon"></i>
                                                                <span>${PROFILE.location.trim()}</span>
                                                            </div>`
                                                        : ""
                                                }
                                            </div>`
                                        : ""
                                }
                            </div>`;

    const avatarTemplate = isExist(PROFILE.avatar)
        ? `<img class="header__avatar" src="${PROFILE.avatar}" />`
        : "";

    return `${profileTemplate} ${avatarTemplate}`;
}

function getSummary() {
    const summaryTemplate =
        isExist(SUMMARY.description) || SUMMARY.bullets?.some((b) => isExist(b))
            ? `<section class="section">
                    <h6 class="section__title">Summary</h6>
                    ${
                        isExist(SUMMARY.description)
                            ? `<p class="summary">${SUMMARY.description.trim()}</p>`
                            : ""
                    }

                    ${
                        SUMMARY.bullets?.some((b) => isExist(b))
                            ? `<ul>
                                    ${SUMMARY.bullets
                                        .filter((b) => isExist(b))
                                        .map(
                                            (b) => `<div>
                                                        <i class="bi bi-chevron-double-right icon"></i>
                                                        <li>${b.trim()}</li>
                                                    </div>`
                                        )
                                        .join(" ")}
                                </ul>`
                            : ""
                    }
                </section>`
            : "";

    return summaryTemplate;
}

function getExperience(title, experience) {
    const experienceTemplate = experience.some((e) =>
        isExist(e, ["title", "place", "duration"])
    )
        ? `<section class="section">
                <h6 class="section__title">${title}</h6>
                ${experience
                    .filter((e) => isExist(e, ["title", "place", "duration"]))
                    .map(
                        (e) => `<div class="experience">
                                    <h3>${e.title.trim()}</h3>
                                    <div class="experience__details">
                                        <h4 class="experience__details_company">${e.place.trim()}</h4>
                                        <div>
                                            <i class="bi bi-calendar2-fill icon"></i>
                                            <span>${e.duration.trim()}</span>
                                            ${
                                                isExist(e.location)
                                                    ? `<i class="bi bi-geo-fill icon" style="margin-left: 16px"></i>
                                                        <span>${e.location.trim()}</span>`
                                                    : ""
                                            }
                                        </div>
                                    </div>
                                    ${
                                        isExist(e.description)
                                            ? `<p class="experience_company-description">${e.description.trim()}</p>`
                                            : ""
                                    }
                                    ${
                                        e.bullets?.some((b) => isExist(b))
                                            ? `<ul>
                                                    ${e.bullets
                                                        .filter((b) =>
                                                            isExist(b)
                                                        )
                                                        .map(
                                                            (b) => `<div>
                                                                        <i class="bi bi-chevron-double-right icon"></i>
                                                                        <li>${b.trim()}</li>
                                                                    </div>`
                                                        )
                                                        .join(" ")}
                                                </ul>`
                                            : ""
                                    }
                                </div>`
                    )
                    .join(" ")}
            </section>`
        : "";

    return experienceTemplate;
}

function getSkills() {
    const skillsTemplate = SKILLS.some((s) => isExist(s))
        ? `<section class="section">
                <h6 class="section__title">Skills</h6>
                <div class="skills">${SKILLS.filter((s) => isExist(s))
                    .map((s) => `<span>${s.trim()}</span>`)
                    .join(" ")}</div>
            </section>`
        : "";

    return skillsTemplate;
}

function getAchievements() {
    const achievementsTemplate = ACHIEVEMENTS.some((a) => isExist(a, ["title"]))
        ? `<section class="section">
                <h6 class="section__title">Achievements</h6>
                <div class="achievements">
                    ${ACHIEVEMENTS.filter((a) => isExist(a, ["title"]))
                        .map(
                            (a) => `<div>
                                        <div class="diamond"><i class="bi bi-gem"></i></div>
                                        <div>
                                            <h4>${a.title}</h4>
                                            ${
                                                isExist(a.description)
                                                    ? `<p style="margin-top: 3px; color: #65696d;">${a.description}</p>`
                                                    : ""
                                            }
                                        </div>
                                    </div>`
                        )
                        .join(" ")}   
                </div>
            </section>`
        : "";

    return achievementsTemplate;
}

function getLanguages() {
    const languageTemplate = LANGUAGES.some((l) =>
        isExist(l, ["language", "level"])
    )
        ? `<section class="section">
                <h6 class="section__title">Languages</h6>
                <div>
                    ${LANGUAGES.filter((l) => isExist(l, ["language", "level"]))
                        .map(
                            (l) => `<div class="language">
                                        <div class="detail">
                                            <h6>${l.language}</h6>
                                            <span>${l.level}</span>
                                        </div>
                                        ${
                                            l.percentLevel
                                                ? `<div class="line-bar">
                                                        <div style="width: ${l.percentLevel}%"></div>
                                                    </div>`
                                                : ""
                                        }
                                    </div>`
                        )
                        .join(" ")}
                </div>
            </section>`
        : "";

    return languageTemplate;
}

// ================================= Helpers ================================== \\

function isExist(item, fields = []) {
    return !!(typeof item === "object" && fields.length
        ? fields.every((f) => isExist(item[f]))
        : item?.toString().trim().length);
}
