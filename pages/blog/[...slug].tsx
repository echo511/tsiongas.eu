import { Header, ContentRenderer } from "#components"


export default defineComponent({
    async setup() {
        let slug: string
        const params = useRoute().params
        if (Array.isArray(params.slug)) {
            slug = params.slug.join('/')
        } else {
            slug = params.slug
        }

        const path = `/articles/${slug}`
        const article = await queryContent(path).findOne()

        return () => {
            return h('div', {}, [
                article?.title || '',
                h(ContentRenderer, {value: article})
            ])
        }
    }
})

