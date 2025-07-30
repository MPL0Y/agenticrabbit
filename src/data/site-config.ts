export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Hardik',
    subtitle: 'a.k.a Agentic Rabbit',
    description: 'This is the personal blog of Hardik',
    image: {
        src: '/agentic-rabbit-preview.jpg',
        alt: 'Agentic Rabbit preview'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Art',
            href: '/art'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'WhatsApp',
            href: 'https://api.whatsapp.com/send?text=Hi&phone=919205520499'
        },
        {
            text: 'Twitter',
            href: 'https://x.com/hardikksharmaaa'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/hardikksharmaaa/'
        }
    ],
    hero: {
        title: '',
        text: `- SDE 1 at Amazon, working on <a href="https://play.google.com/store/apps/details?id=com.mxtech.videoplayer.television&hl=en_IN" target="_blank">MXPlayer</a> Android TV app
- President at <a href="https://www.toastmasters.org/Find-a-Club/28677014-amazon-bangalore-toastmasters-club" target="_blank">Amazon Bangalore Toastmasters Club</a>, a corporate public speaking club
- I love art. <a href="/art">Check out</a> my writings and other cool stuff`,
        image: {
            src: '/hero.jpeg',
            alt: 'A person standing in front of Parvati river in Kasol, Himachal Pradesh, India.'
        },
        actions: [
            {
                text: 'Say hello!',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
