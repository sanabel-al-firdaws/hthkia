export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: "Is SmartCrowds completely free to use?",
                answer: "Yes, SmartCrowds is 100% free and open-source. You can use it for personal and commercial projects without any licensing fees."
            },
            {
                question: "How do I customize the color schemes?",
                answer: "SmartCrowds comes with 10 pre-built color schemes that can be easily switched through the theme configuration file. For custom colors, you can modify the CSS variables in the `src/styles/global.css` file to match your brand identity."
            },
            {
                question: "Do I need to know Astro JS to use this theme?",
                answer: "Basic familiarity with Astro JS is helpful, but not required. The component-based architecture makes it easy to understand and modify even if you're new to Astro."
            },
            {
                question: "Can I use SmartCrowds as a starting point for client projects?",
                answer: "Absolutely! SmartCrowds is designed to be a foundation theme that you can build upon for client projects. Its clean architecture and minimal approach make it perfect as a starting point for customized websites."
            },
            {
                question: "How often is SmartCrowds updated?",
                answer: "We aim to update SmartCrowds regularly to keep it compatible with the latest Astro JS releases and web standards. Major updates are released quarterly, with smaller fixes and improvements added more frequently. You can star our GitHub repository to stay informed about updates."
            }
        ]
    }
};
