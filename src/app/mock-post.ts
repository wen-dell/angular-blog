import { Post } from './post';

export const posts: Post[] = [
    {
        id: 1,
        title: 'First post here',
        tags: ['About me', 'Latin'],
        image: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg',
        datePost: new Date(10, 2, 2017),
        author: 'Wendell Alves',
        message: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        `,
        comments: [
            'So cool, what a great idea you had when you decided to create this blog.',
            'I think your writing style is very good.',
            'Ow, I think you are the only person that writes in Latin nowadays!'
        ]
    },
    {
        id: 2,
        title: 'Hey there, I\'m back!',
        tags: ['Latin', 'Tutorial'],
        image: 'https://cdn.pixabay.com/photo/2016/02/19/11/19/computer-1209641_960_720.jpg',
        datePost: new Date(10, 4, 2017),
        author: 'Wendell Alves',
        message: `
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        `,
        comments: [
            'Why do you just write things in Latin?'
        ]
    }
];