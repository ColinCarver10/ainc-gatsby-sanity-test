
export default {
    name: "pageTitles",
    title: "Page Titles",
    type: "document",
    fields: [
        {
            name: "pageTitle",
            title: "Page Title",
            type: "string",
            description: "Every title will be appended with \" | Awesome Inc\"",
            validation: Rule => Rule.required().min(1)
        },
        {
            name: "filePath",
            title: "Page URL",
            type: "string",
            description: "The page URL, e.g. \"/learn/youth\"",
            validation: Rule => Rule.required().min(1)
        },
    ],
    preview: {
        select: {
            title: 'pageTitle',
            subtitle: 'filePath',
        }
    }
};