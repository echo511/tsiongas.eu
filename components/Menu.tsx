import { NuxtLink } from "#components"


export default defineComponent({
    setup() {
        const links = [
            { to: '/', title: 'Vizitka' },
            { to: '/pkm/', title: 'Personal Knowledge Management (PKM)' },
            { to: '/medical/koagulace/', title: 'Medical - Koagulace' },
            { to: '/foto/', title: 'Fotografie' },
            { to: '/o-webu/', title: 'O webu' },
        ]

        // Resolve active state
        const isActive = (link: { to: string }) => link.to === useRoute().path

        // Mobile menu
        const smMenuActive = ref(false)
        const smMenuActiveToggle = () => smMenuActive.value = !smMenuActive.value

        return () =>
            <nav class="bg-rose-900">
                <div class="max-w-7xl mx-auto p-4">
                    <div class="flex flex-col md:flex-row flex-gaps space-y-1 space-x-0 md:space-x-2">
                        {/* Mobile menu button */}
                        <div class="-mr-2 flex md:hidden" onClick={smMenuActiveToggle}>
                            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Menu" aria-expanded="false">
                                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {links.map((link) => {
                            let classes = 'px-3 py-2 rounded-md text-sm font-medium text-white'

                            // Resolve active state
                            classes += isActive(link) ? ' bg-rose-800' : ' hover:bg-gray-700'

                            // Resolve mobile menu
                            classes += smMenuActive.value ? ' block' : ' hidden'
                            classes += ' md:block'

                            return <NuxtLink to={link.to} class={classes}>{link.title}</NuxtLink>
                        })}
                    </div>
                </div>
            </nav>
    }
})

