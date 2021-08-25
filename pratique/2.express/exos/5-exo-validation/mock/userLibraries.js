const userLibraries = [
    {
        id: 1,
        user: "Thibaut",
        libraries: [
            {
                id: 1,
                name: "Mes médias science-fiction"
            },
            {
                id: 2,
                name: "Mes médias comédie",
                books: [
                    {
                        id: 1,
                        title: 'Le diner de cons',
                        year: '1995'
                    },
                    {
                        id: 2,
                        title: 'Les 3 frères',
                        year: '1998'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        user: "Aurore",
        libraries: [
            {
                id: 3,
                name: "Mes médias manga",
                books: [
                    {
                        id: 3,
                        title: 'Dragon Ball Z',
                        year: '1989'
                    },
                    {
                        id: 4,
                        title: 'Pokemon',
                        year: '2001'
                    }
                ]
            },

            {
                id: 4,
                name: "Mes médias drame norvégien des années 30 "
            }
        ]
    }
];


module.exports = userLibraries;