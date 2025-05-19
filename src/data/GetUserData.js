export const GetUserData = () => {
    return new Promise((resolve, reject) => {
        const users = [
        {
        id: "2905a3d6-2eb7-4e85-aef9-db6d4c7e01be",
        lastName: "Harding",
        name: "Velma",
        team: "Design & Media",
        email: "valma.harding@mail.com",
        },
        {
        id: "a56f165e-c4ab-40ee-bc3e-68fa8fde8119",
        lastName: "Wagner",
        name: "Orlando",
        team: "Marketing",
        email: "orlando.wagner@mail.com",
        },
        {
        id: "b0ef5594-9246-41a0-9bb5-df77462ff273",
        lastName: "Thompson",
        name: "Brian",
        team: "Technical",
        email: "brian.thompson@mail.com",
        },
        {
        id: "b0ef5594-9246-41a0-9bb5-df77462ff273",
        lastName: "Trevino",
        name: "Annabella",
        team: "Marketing",
        email: "annabella.trevino@mail.com",
        },
        {
        id: "e3f9007a-310d-4c35-8a03-b197450e20b6",
        lastName: "O'reilly",
        name: "Penelope",
        team: "Marketing",
        email: "penelope.oreilly@mail.com",
        },
        {
        id: "a46307bf-dc79-452b-8651-945d011f3767",
        lastName: "Bauer",
        name: "Yusra",
        team: "Marketing",
        email: "yusra.bauer@mail.com",
        },
        {
        id: "33b48856-4ae5-41df-b185-fc2834654eb4",
        lastName: "Mejia",
        name: "Siena",
        team: "Marketing",
        email: "siena.mejia@mail.com",
        },
        {
        id: "5ae85be2-3e20-4f10-b2d9-95470eb50bb6",
        lastName: "Tate",
        name: "Tessa",
        team: "Finance & sponsorship",
        email: "tessa.tate@mail.com",
        },
        {
        id: "4a91c71b-ad67-4c05-b656-37c9226b3fc9",
        lastName: "Curtis",
        name: "Luc",
        team: "Marketing",
        email: "luc.curtis@mail.com",
        },
        {
        id: "065ff0fa-816d-4fa8-ac00-ba9163968dbf",
        lastName: "Livingston",
        name: "Sami",
        team: "People Management",
        email: "sami.livingston@mail.com",
        },
        ]
        setTimeout(() => resolve(users), 1000)
    })
} 