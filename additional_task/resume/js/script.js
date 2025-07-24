document.addEventListener('DOMContentLoaded', () => {
    const exportCV = document.querySelector('.export-cv');
    const body = document.body;


    const resumItems = document.querySelector('.resume__items');

    const knowledge = document.createElement('div');
    knowledge.classList.add('knowledge');

    const about = document.createElement('div');
    about.classList.add('about');



    const resumeData = {
        exportButtonText: "Export",
        personalInfo: {
            avatarSrc: "./img/Avatar.svg",
            name: {
                firstName: "Melik",
                lastName: "Papikyan",
            },
            subtitle: [
                "Frontend",
                "Developer",
            ],
            custom: {
                theme: 0
            },
        },
        contactInfo: {
            title: "contact",
            details: [
                {
                    iconSrc: "./img/date.svg",
                    alt: "date",
                    text: "12 - 06 - 1994",
                },
                {
                    iconSrc: "./img/phone.svg",
                    alt: "phone",
                    link: "tel:+573123450321",
                    text: "+57 3123450321",
                },
                {
                    iconSrc: "./img/email.svg",
                    alt: "email",
                    link: "mailto:ralfgreg@mail.com",
                    text: "ralfgreg@mail.com",
                },
                {
                    iconSrc: "./img/location.svg",
                    alt: "location",
                    link: "https://www.google.com/maps/place/Colombia,+Medellín",
                    target: "_blank",
                    text: "Colombia",
                },
            ],
        },
        languages: {
            title: "Language",
            list: [
                {
                    name: "SPANISH",
                    rating: 1, // Number of active spans
                },
                {
                    name: "ENGLISH",
                    rating: 2,
                },
                {
                    name: "Portuguese",
                    rating: 3,
                },
                {
                    name: "Armenia",
                    rating: 4,
                },
                {
                    name: "Germany",
                    rating: 5,
                }
            ],
        },
        followWork: {
            title: "follow My work",
            links: [
                {
                    iconSrc: "./img/linkedin.svg",
                    alt: "linkedin",
                    link: "#!",
                    text: "linkedin/ralfgreg",
                },
                {
                    iconSrc: "./img/youtube.svg",
                    alt: "youtube",
                    link: "#!",
                    text: "youtube/ralfgreg",
                },
                {
                    iconSrc: "./img/behance.svg",
                    alt: "behance",
                    link: "#!",
                    text: "behance/ralfgreg",
                },
                {
                    iconSrc: "./img/vimeo.svg",
                    alt: "vimeo",
                    link: "#!",
                    text: "vimeo/ralfgreg",
                },
            ],
        },
        interests: {
            title: "Interests",
            list: [
                {
                    iconSrc: "./img/cine.svg",
                    alt: "cine",
                    link: "#!",
                    text: "Cine",
                },
                {
                    iconSrc: "./img/game.svg",
                    alt: "game",
                    link: "#!",
                    text: "Games",
                },
                {
                    iconSrc: "./img/painting.svg",
                    alt: "painting",
                    link: "#!",
                    text: "Painting",
                },
                {
                    iconSrc: "./img/music.svg",
                    alt: "music",
                    link: "#!",
                    text: "Music",
                },
            ],
        },
        // applications: {
        //     title: "Applications",
        //     list: [
        //         {
        //             name: "Illustrator",
        //             rating: 1,
        //         },
        //         {
        //             name: "Photoshop",
        //             rating: 5,
        //         },
        //         {
        //             name: "After Effects",
        //             rating: 3,
        //         },
        //         {
        //             name: "Premiere Pro",
        //             rating: 3,
        //         },
        //         {
        //             name: "Character Animator",
        //             rating: 3,
        //         },
        //         {
        //             name: "Blender",
        //             rating: 3,
        //         },
        //         {
        //             name: "Maya",
        //             rating: 3,
        //         },
        //         {
        //             name: "Corel",
        //             rating: 3,
        //         }
        //     ],
        // },
        skills: {
            title: "Skills",
            list: [
                { name: "Character Animation", width: "100" },
                { name: "Video Editing", width: "10" },
                { name: "2D Animation", width: "20" },
                { name: "Motion Graphics", width: "30" },
                { name: "Conceptualization", width: "40" },
                { name: "Illustration", width: "50" },
                { name: "Vector Illustration", width: "60" },
                { name: "Audio Editing", width: "70" },
            ],
        },
        personalSkills: {
            title: "Personal Skills",
            items: [
                "Teamworking",
                "Work Ethic",
                "Problem-solving",
                "Empathy",
                "Empathy",
                "Leadership",
                "Loyalty",
                "Communication",
                "Active listening",
            ],
        },
        aboutMe: {
            title: "about me",
            description: [
                "Ultrices ac ultrices sodales mattis vel. Blandit tempus nisl scelerisque cras. Mauris amet porttitor sit nulla diam dignissim et. Nisi, diam tellus porttitor purus est pretium elit. Ac parturient suscipit ornare ut ut non curabitur aenean. Mauris amet porttitor sit nulla diam.",
                "Nisi, scelerisque erat lacus non viverra et orci, diam sit egestas purus est pretium elit. Ac parturient suscipit ornare.",
            ],
        },
        education: {
            title: "EDUCATION",
            items: [
                {
                    title: "University Education",
                    text: "Audio Visual Communication. Organization name’s.",
                    date: "2011 - 2017 | Colombia",
                },
                {
                    title: "University Education1",
                    text: "Audio Visual Communication. Organization name’s.1",
                    date: "2015 - 2022 | Colombia1",
                },
            ],
        },
        workshops: {
            title: "courses and WORKSHOPS",
            items: [
                {
                    title: "Course Title",
                    name: "Organization name’s",
                    date: "Abr 2021 | Bogotá, Colombia",
                },
                {
                    title: "Course Title",
                    name: "Organization name’s",
                    date: "Abr 2021 | Bogotá, Colombia",
                },
                {
                    title: "Course Title",
                    name: "Organization name’s",
                    date: "Jul 2020 | Buenos Aires, Argentina",
                    description: "Description...",
                },
                {
                    title: "Course Title",
                    name: "Organization name’s",
                    date: "Jul 2020 | Buenos Aires, Argentina",
                },
                {
                    title: "Course Title",
                    name: "Organization name’s",
                    date: "Sep 2019 | Medellín, Colombia",
                },
                {
                    title: "Course Title",
                    name: "Organization name’s",
                    date: "Abr 2018 | Medellín, Colombia",
                },
            ],
        },
        experience: {
            title: "WORK EXPERIENCE222",
            items: [
                {
                    title: "Job Title1",
                    name: "Organization name’s",
                    date: "May 2020 - Present | Bogotá, Colombia",
                    text: "Mattis egestas sed ac sit venenatis enim viverra morbi. Proin ullamcorper imperdiet quisque mi auctor mauris, amet velit. Faucibus dolor fames malesuada iaculis sagittis, pulvinar lacinia.",
                },
                {
                    title: "Job Title2",
                    name: "Freelance",
                    date: "2016 - Present | Bogotá, Colombia",
                    text: "Arcu arcu nisl ultrices viverra. Condimentum dui massa, enim at purus sed. Massa lorem scelerisque massa nunc. Dolor at integer in integer quam. Sem duis rutrum sed arcu vitae et, mauris augue.",
                },
                {
                    title: "Job Title3",
                    name: "Freelance",
                    date: "Sep 2019 - May 2020 | Bogotá, Colombia",
                    text: "Purus gravida suspendisse ut facilisis eleifend eget sit. Elit eget sit penatibus varius. Tellus sit proin volutpat, lacus elementum sagittis, sit nec rhoncus. Aliquam tellus vitae orci orci, facilisi pellentesque pharetra. Nisl, amet placerat convallis tempus consectetur fermentum.",
                }

            ],
        },
        projects: {
            title: "Projects",
            items: [
                {
                    title: "Project Title",
                    role: "My Rol",
                    date: "2020 | Colombia",
                    text: "Enim amet, amet at sem felis et mi. Tincidunt arcu amet, sodales faucibus viverra.",
                    link: "#!",
                    linkText: "See project here",
                },
                {
                    title: "Project Title1",
                    role: "My Rol1",
                    date: "2019 | Argentina",
                    text: "Nullam proin turpis et ullamcorper est amet, aliquam sed.",
                    link: "#!",
                    linkText: "See project here",
                },
            ],
        },
        volunteerExperiences: {
            title: "Volunteer Experiences",
            items: [
                {
                    title: "Speaker",
                    name: "Organization name’s",
                    date: "Jul 2018 - Sep 2020 | Medellín, Colombia",
                    text: "Elit dui morbi augue aliquam consequat aliquet duis. Sit mi mi eget massa sit odio sed. Morbi eu et, netus ut velit tortor. Sit eget etiam vulputate ornare lorem magna eu. Morbi quisque mauris, quis eget. Elit dui morbi augue aliquam consequat aliquet duis. Sit mi mi eget massa sit odio sed. Morbi eu et, netus ut velit tortor. Sit eget etiam vulputate ornare lorem magna eu. Morbi quisque mauris, quis eget. Elit dui morbi augue aliquam consequat aliquet duis.",
                }
            ],
        }
    };



    function createDataEl(el, tag, tagtext, headerClass, innerClass) {
        const container = document.createElement('div');
        container.classList.add(el);
        const header = document.createElement(tag);
        header.classList.add(headerClass);
        header.textContent = tagtext;
        container.appendChild(header);

        const inner = document.createElement('div');
        inner.classList.add(innerClass);
        container.appendChild(inner);
        return {
            container,
            inner
        }
    }



    function info(data) {
        if (data?.personalInfo) {
            const avatar = document.createElement('div');
            avatar.classList.add('knowledge__person');
            avatar.innerHTML = `
            <div class="knowledge__person-avatar">
                                <img src="${data.personalInfo.avatarSrc}" alt="avatar">
                            </div>
                            <h1 class="knowledge__person-name">
                                <div>
                                    <span>${data.personalInfo.name.firstName}</span>
                                    <span>${data.personalInfo.name.lastName}</span>
                                </div>
                            </h1>
                            <div class="knowledge__person-subtitle">
                                <span>${data.personalInfo.subtitle[0]}</span>
                                <span>${data.personalInfo.subtitle[1]}</span>
                            </div>`;

            knowledge.appendChild(avatar);


        }
    }
    info(resumeData);


    function constacts(data) {
        if (data?.contactInfo?.details?.length) {
            let tagTitle = data.contactInfo.title;
            const { container, inner } = createDataEl('knowledge__constacts', 'h2', tagTitle, 'knowledge__constacts-title', 'knowledge__constacts-inner');
            let knowledgeData = '';

            data.contactInfo.details.forEach((item) => {
                if (item.link) {
                    knowledgeData += `
        <div class="knowledge__constacts-${item.alt}">
                        <a href="${item.link}" class="">
                            <img src="${item.iconSrc}" alt="${item.alt}">
                            <span>${item.text}</span>
                        </a>
                    </div>
        `;
                } else {
                    knowledgeData += `
        <div class="knowledge__constacts-${item.alt}">
                        <img src="${item.iconSrc}" alt="${item.alt}">
                        <span>${item.text}</span>
                    </div>
        `;
                }
            });
            inner.innerHTML = knowledgeData;
            container.appendChild = inner;
            knowledge.appendChild(container);

        }
    }
    constacts(resumeData);


    function language(data) {
        if (data?.languages?.list?.length) {
            let tagTitle = data.languages.title;
            const { container, inner } = createDataEl('knowledge__language', 'h2', tagTitle, 'knowledge__lang-title', 'knowledge__language-inner');
            let langData = '';

            data.languages.list.forEach(item => {
                langData += `
        <div class="knowledge__lang">
          <span>${item.name}</span>
          <div class="knowledge__lang-rate">
            ${'<span class="active"></span>'.repeat(item.rating)}${'<span></span>'.repeat(5 - item.rating)}
          </div>
        </div>
        `;
            });
            inner.innerHTML = langData;
            container.appendChild(inner);
            knowledge.appendChild(container);
        }
    }
    language(resumeData);


    function follows(data) {
        if (data?.followWork?.links?.length) {
            let tagTitle = data.followWork.title;
            const { container, inner } = createDataEl('knowledge__follows', 'h2', tagTitle, 'knowledge__follows-title', 'knowledge__follows-inner');
            let followData = '';

            data.followWork.links.forEach((item) => {
                followData += `
        <div class="knowledge__follow">
                            <a href="${item.link}">
                                <img src="${item.iconSrc}" alt="${item.alt}">
                                <span>${item.text}</span>
                            </a>
                        </div>`;
            });
            inner.innerHTML = followData;
            container.appendChild(inner);
            knowledge.appendChild(container);
        }
    }
    follows(resumeData);


    function interests(data) {
        if (data?.interests?.list?.length) {
            let tagTitle = data.interests.title;
            const { container, inner } = createDataEl('knowledge__interests', 'h2', tagTitle, 'knowledge__follows-title', 'knowledge__interests-inner');
            let interestsData = '';

            data.interests.list.forEach((item) => {
                interestsData += `
        <div class="knowledge__interest">
                            <a href="${item.link}">
                                <img src="${item.iconSrc}" alt="${item.alt}">
                                <span>${item.text}</span>
                            </a>
                        </div>
        `;
            });

            inner.innerHTML = interestsData;
            container.appendChild(inner);
            knowledge.appendChild(container);
        }
    }
    interests(resumeData);


    function applications(data) {
        if (data?.applications?.list?.length) {
            let tagTitle = data.applications.title;
            const { container, inner } = createDataEl('knowledge__applications', 'h2', tagTitle, 'knowledge__app-title', 'knowledge__applications-inner');
            let appData = '';

            data.applications.list.forEach(item => {
                appData += `
        <div class="knowledge__app">
          <span>${item.name}</span>
          <div class="knowledge__app-rate">
            ${'<span class="active"></span>'.repeat(item.rating)}${'<span></span>'.repeat(5 - item.rating)}
          </div>
        </div>
        `;
            });

            inner.innerHTML = appData;
            container.appendChild(inner);
            knowledge.appendChild(container);
        }
    }
    applications(resumeData);


    function skills(data) {
        if (data?.skills?.list?.length) {
            let tagTitle = data.skills.title;
            const { container, inner } = createDataEl('knowledge__skills', 'h2', tagTitle, 'knowledge__skills-title', 'knowledge__skills-inner');
            let skillsData = '';

            data.skills.list.forEach(skill => {
                skillsData += `
         <div class="knowledge__skill">
            <span>${skill.name}</span>
            <span class="knowledge__skill-rate" style="--after-width: ${skill.width}%;"></span>
        </div>`;

            });


            inner.innerHTML = skillsData;
            container.appendChild(inner);
            knowledge.appendChild(container);
        }
    }
    skills(resumeData);


    function personal(data) {
        if (data?.personalSkills?.items?.length) {
            let tagTitle = data.personalSkills.title;
            const { container, inner } = createDataEl('knowledge__personal', 'h2', tagTitle, 'knowledge__personal-title', 'knowledge__personal-items');
            let personalData = '';

            data.personalSkills.items.forEach((item) => {
                personalData += `
        <span>${item}</span>`;
            });

            inner.innerHTML = personalData;
            container.appendChild(inner);
            knowledge.appendChild(container);
        }
    }
    personal(resumeData);


    function aboutHeader(data) {
        if (data?.aboutMe?.description) {
            let tagTitle = data.aboutMe.title;
            const { container, inner } = createDataEl('about__header', 'h3', tagTitle, 'about__title', 'about__descr');
            let aboutData = '';

            data.aboutMe.description.forEach((item, index, arr) => {
                aboutData += `
        <p>${item}</p>
        ${index !== arr.length - 1 ? '<br><br>' : ''}
        `;
            });

            inner.innerHTML = aboutData;
            container.appendChild(inner);
            about.appendChild(container);
        }
    }
    aboutHeader(resumeData);


    function aboutEducation(data) {
        if (data?.education?.items?.length) {
            let tagTitle = data.education.title;
            const { container, inner } = createDataEl('about__education', 'h3', tagTitle, 'about__education-title', 'education__items');
            let educationData = '';

            data.education.items.forEach((item) => {
                educationData += `
        <div class="education__item">
                            <div class="education__item-title">${item.title}</div>
                            <p class="education__item-text">${item.text}</p>
                            <div class="education__item-date">
                            ${item.date}
                            </div>
                        </div>
        `;
            });
            inner.innerHTML = educationData;
            container.appendChild(inner);
            about.appendChild(container);
        }
    }
    aboutEducation(resumeData);


    function aboutWorkshops(data) {
        if (data?.workshops?.items?.length) {
            let tagTitle = data.workshops.title;
            const { container, inner } = createDataEl('about__workshops', 'h3', tagTitle, 'about__workshops-title', 'workshops__items');
            let workshopData = '';
            data.workshops.items.forEach((item) => {
                workshopData += `
        <div class="workshops__item">
                            <div class="workshops__item-title">${item.title}</div>
                            <p class="workshops__item-name">${item.name}</p>
                            <div class="workshops__item-date">
                            ${item.date}
                            </div>
                        </div>
        `;
            });
            inner.innerHTML = workshopData;
            container.appendChild(inner);
            about.appendChild(container);
        }
    }
    aboutWorkshops(resumeData);


    function aboutExperience(data) {
        if (data?.experience?.items?.length) {
            let tagTitle = data.experience.title;
            const { container, inner } = createDataEl('about__experience', 'h3', tagTitle, 'about__experience-title', 'experience__items');
            let experienceData = '';

            data.experience.items.forEach((item) => {
                experienceData += `
        <div class="experience__item">
                            <div class="experience__item-title">${item.title}</div>
                            <div class="experience__item-name">${item.name}</div>
                            <div class="experience__item-date">${item.date}</div>
                            <p class="experience__item-text">${item.text}</p>
                        </div>
        `;
            });


            inner.innerHTML = experienceData;
            container.appendChild(inner);
            about.appendChild(container);
        }
    }
    aboutExperience(resumeData);


    function aboutProjects(data) {
        if (data?.projects?.items?.length) {
            let tagTitle = data.projects.title;
            const { container, inner } = createDataEl('about__projects', 'h3', tagTitle, 'about__projects-title', 'projects__items');
            let projectsData = '';

            data.projects.items.forEach((item) => {
                projectsData += `
        <div class="projects__item">
                            <div class="projects__item-title">${item.title}</div>
                            <div class="projects__item-name">${item.role}</div>
                            <div class="projects__item-date">${item.date}</div>
                            <p class="projects__item-text">${item.text}</p>
                            <a href="${item.link}" target="_blank">${item.linkText}</a>
                        </div>
        `;
            });


            inner.innerHTML = projectsData;
            container.appendChild(inner);
            about.appendChild(container);
        }
    }
    aboutProjects(resumeData);


    function aboutVolunteer(data) {
        if (data?.volunteerExperiences?.items?.length) {
            let tagTitle = data.volunteerExperiences.title;
            const { container, inner } = createDataEl('about__volunteer', 'h3', tagTitle, 'about__volunteer-title', 'volunteer__items');

            let volunteerData = '';

            data.volunteerExperiences.items.forEach((item) => {
                volunteerData += `
        <div class="volunteer__item">
                            <div class="volunteer__item-title">${item.title}</div>
                            <div class="volunteer__item-name">${item.name}</div>
                            <div class="volunteer__item-date">${item.date}</div>
                            <p class="volunteer__item-text">${item.text}</p>
                        </div>
        `;
            });

            inner.innerHTML = volunteerData;
            container.appendChild(inner);
            about.appendChild(container);
        }
    }
    aboutVolunteer(resumeData);

    resumItems.appendChild(knowledge);
    resumItems.appendChild(about);

    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++   

    const exportButton = document.querySelector('.export-cv');
    if (exportButton && resumeData.exportButtonText) {
        exportButton.textContent = resumeData.exportButtonText;
    }

    if (resumeData?.personalInfo?.custom?.theme) {
        if (resumeData.personalInfo.custom.theme === 1) {
            const theme = document.querySelector('.knowledge');
            const body = document.body;

            theme.style.background = 'linear-gradient(to bottom, #D8ECFF 0%, #D8ECFF 100%)';
            body.style.setProperty('--point-color', '#0074FD');

            const skills = document.querySelectorAll('.knowledge__personal-items span');
            skills.forEach((item) => {
                item.style.cssText = `
                background-color: #0074FD;
                color: #ffffff;`;
            });

        }
    }



    //////////////////////////////////
    const person = document.querySelector('.knowledge__person');
    const about1 = document.querySelector('.about');

    function handleClick() {
        body.classList.toggle('active');
        about1.classList.toggle('blur');


        about1.addEventListener('click', () => {
            if (body.classList.contains('active')) {
                body.classList.remove('active');
                about1.classList.remove('blur');
            }
        });

    }

    function myFunc() {
        if (window.innerWidth < 600) {
            person.addEventListener('click', handleClick);
        } else {
            person.removeEventListener('click', handleClick);
            // about1.removeEventListener('click', handleClick);
            // about1.classList.remove('blur');
        }
    }

    myFunc();

    window.addEventListener('resize', myFunc);

    // function downloadPDF() {
    //     const element = document.querySelector('.resume');
    //     const pageHeight = 1122; // Стандартная высота A4 в пикселях при scale: 2

    //     html2pdf().set({
    //         margin: [20, 0, 0, 0], // Устанавливаем верхний отступ 20px
    //         filename: 'CV.pdf',
    //         image: { type: 'jpeg', quality: 1.2 },
    //         html2canvas: { scale: 2 },
    //         jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    //     })
    //         .from(element)
    //         .toPdf()
    //         .get('pdf')
    //         .then(function (pdf) {
    //             pdf.save();
    //         });
    // }




    // exportCV.addEventListener('click', () => {
    //     downloadPDF();
    // });
});


