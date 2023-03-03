import { NuxtLink } from "#components"


export default defineComponent({
    render() {
        return <div>
            <NuxtLink to="/" class="text-rose-400">Vizitka</NuxtLink>
            <NuxtLink to="/studium-mediciny-ano-ne">Vizitka</NuxtLink>
            <NuxtLink to="/blog">Blog</NuxtLink>
            <NuxtLink to="/">Vizitka</NuxtLink>
        </div>
    }
})

