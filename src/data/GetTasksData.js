export const GetTasksData = () => {
    return new Promise((resolve, reject) => {
        const tasks = [
            {
                id: "alh7z5g4jy6s6byi6sfcg",
                type: "toDo",
                title: "Lorem ipsum",
                creation_date: "01/01/2025",
                due_date: "20/07/2025",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia voluptatum ratione mollitia!",
                assignated_to: [
                    "a56f165e-c4ab-40ee-bc3e-68fa8fde8119",
                    "b0ef5594-9246-41a0-9bb5-df77462ff273",
                    "5ae85be2-3e20-4f10-b2d9-95470eb50bb6"
                ]
            },
            {
                id: "zujr6h4z6etz6y46etj4y",
                type: "toDo",
                title: "Lorem ipsum 2",
                creation_date: "01/01/2025",
                due_date: "17/06/2025",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia voluptatum ratione mollitia!",
                assignated_to: [
                    "4a91c71b-ad67-4c05-b656-37c9226b3fc9",
                    "065ff0fa-816d-4fa8-ac00-ba9163968dbf",
                    "33b48856-4ae5-41df-b185-fc2834654eb4"
                ]
            },
            {
                id: "mlutzqgfezg3jyrjzt31t",
                type: "toDo",
                title: "Lorem ipsum 3",
                creation_date: "01/01/2025",
                due_date: "04/10/2025",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia voluptatum ratione mollitia!",
                assignated_to: [
                    "a56f165e-c4ab-40ee-bc3e-68fa8fde8119",
                    "4a91c71b-ad67-4c05-b656-37c9226b3fc9",
                    "5ae85be2-3e20-4f10-b2d9-95470eb50bb6"
                ]
            },
            {
                id: "tilrsth464qerhe45ehaqh",
                type: "InProgress",
                title: "Lorem ipsum 4",
                creation_date: "01/01/2025",
                due_date: "12/07/2025",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia voluptatum ratione mollitia!",
                assignated_to: [
                    "065ff0fa-816d-4fa8-ac00-ba9163968dbf",
                    "4a91c71b-ad67-4c05-b656-37c9226b3fc9",
                    "5ae85be2-3e20-4f10-b2d9-95470eb50bb6"
                ]
            },
            {
                id: "lkqgej48aqz6ahy16adtgj",
                type: "InProgress",
                creation_date: "01/01/2025",
                due_date: "30/08/2025",
                title: "Lorem ipsum 4",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia voluptatum ratione mollitia!",
                assignated_to: [
                    "a56f165e-c4ab-40ee-bc3e-68fa8fde8119",
                    "33b48856-4ae5-41df-b185-fc2834654eb4",
                ]
            },
            {
                id: "zrhza787ezh6zaéty5hths",
                type: "InReview",
                creation_date: "01/01/2025",
                due_date: "28/07/2025",
                title: "Lorem ipsum 6",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia voluptatum ratione mollitia!",
                assignated_to: [
                    "33b48856-4ae5-41df-b185-fc2834654eb4",
                    "a56f165e-c4ab-40ee-bc3e-68fa8fde8119",
                ]
            },
            {
                id: "qzmzf492qzf3f6tj6jethh",
                type: "InReview",
                creation_date: "01/01/2025",
                due_date: "15/06/2025",
                title: "Lorem ipsum 7",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia voluptatum ratione mollitia!",
                assignated_to: [
                    "b0ef5594-9246-41a0-9bb5-df77462ff273",
                ]
            },
            {
                id: "esehmehj786agg5te53tjr",
                type: "Done",
                creation_date: "01/01/2025",
                due_date: "06/07/2025",
                title: "Lorem ipsum 7",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia voluptatum ratione mollitia!",
                assignated_to: [
                    "a56f165e-c4ab-40ee-bc3e-68fa8fde8119",
                    "4a91c71b-ad67-4c05-b656-37c9226b3fc9",
                    "5ae85be2-3e20-4f10-b2d9-95470eb50bb6"
                ]
            },
        ]
        setTimeout(() => resolve(tasks), 1000);
    })
}