import { content, team, user, app_web, analytics, media, notification, setting, articles, category, stories, ad } from '@/assets/icons'
import { article1, article3, article2, story1, story2, story3, story4, ad1, ad2, ad3 } from '@/assets/images'
export const sidebarArr = [
    {
        icon: content,
        name: 'Content'
    },
    {
        icon: team,
        name: 'Team'
    },
    {
        icon: user,
        name: 'User'
    },
    {
        icon: app_web,
        name: 'App/Web'
    },
    {
        icon: analytics,
        name: 'Analytics',
        value: 3
    },
    {
        icon: media,
        name: 'Media',
        value: 16
    },
    {
        icon: notification,
        name: 'Notification'
    },
    {
        icon: setting,
        name: 'Settings'
    },

]

export const detailsArr = [
    {
        heading: 'Articles',
        para: '4,950',
        icon: articles
    },
    {
        heading: 'Categories',
        para: '10,275',
        icon: category
    },
    {
        heading: 'Stories',
        para: '4,193',
        icon: stories
    },
    {
        heading: 'Advertisements',
        para: '928',
        icon: ad
    },
]

export const artilceArr = [
    {
        image: article1,
        type: 'BUSINESS',
        heading: '7 Rules of Effective Branding ',
        para: 'Lorem ipsum dolor sit amet, consectetur',
        list: ['Branding', 'Communication', 'Coding'],
        buttonText: 'Created'
    },

    {
        image: article2,
        type: 'ECONOMY',
        heading: 'Research on biodiversity an...',
        para: 'Lorem ipsum dolor sit amet, consectetur',
        list: ['World', 'Population'],
        buttonText: 'Published'
    },
    {
        image: article3,
        type: 'POLITICS',
        heading: 'Close and historical ties to h...',
        para: 'Lorem ipsum dolor sit amet, consectetur',
        list: ['Politics', 'Defence'],
        buttonText: 'Published'
    },
]

export const storyArr = [
    {
        image: story1,
        heading: 'How 7 lines code turned into $36 Billion Empire',
        type: 'BUSINESS',
        buttonText: 'Published'
    },
    {
        image: story2,
        heading: 'Chez pierre restaurant in Monte Carlo by Vuidafieri ',
        type: 'BUSINESS',
        buttonText: 'Created'
    },
    {
        image: story3,
        heading: 'Teknion wins Gold at 2022 International Design Awards',
        type: 'POLITICS',
        buttonText: 'Draft'
    },
    {
        image: story4,
        heading: 'How 4 lines code turned into $36 Billion Empire',
        type: 'BUSINESS',
        buttonText: 'Published'
    },
]

export const adArr = [
    {
        image: ad1,
        heading: 'Build your business',
        para: 'Shopify has all the tools you need to start, sell, market, and manage. '
    },
    {
        image: ad2,
        heading: 'Libre Coffee',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    },
    {
        image: ad3,
        heading: 'KFC',
        para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  '
    },
]