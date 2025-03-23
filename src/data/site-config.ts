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
        alt: 'Dante - Astro.js and Tailwind CSS theme'
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
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'WhatsApp',
            href: 'https://api.whatsapp.com/send?text=Hi&phone=919205520499'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/hardikksharmaaa/'
        },
        {
            text: 'Telegram',
            href: 'https://telegram.me/hardikksharmaaa'
        }
    ],
    hero: {
        title: '',
        text: "If you don't commit to anything, you're distracted by everything. -- {Bhagvad Gita 2:41}",
        image: {
            src: '/hero.jpeg',
            alt: 'A person standing in front of Parvati river in Kasol, Himachal Pradesh, India.'
        },
        actions: [
            {
                text: 'Let\'s talk',
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
