import { NuxtImg, NuxtLink } from "#components";


export default defineComponent({
    setup() {
        definePageMeta({
            layout: 'none'
        })

        useHead({
            meta: [
                { name: 'description', content: 'Programmer, medicus...' },
            ]
        })

        type MenuItem = {
            title: string,
            link: string,
            image: string,
        }

        const images: MenuItem[] = [
            {
                title: 'Medical',
                link: '/medical/koagulace/',
                image: '/medical.jpg',
            },
            {
                title: 'Programming',
                link: '/',
                image: '/programming.jpg',
            },
            {
                title: 'PKM',
                link: '/pkm/',
                image: '/pkm.png',
            },
            {
                title: 'Foto',
                link: '/foto/',
                image: '/photo.jpeg',
            },
        ]

        return () =>
            <div class="flex flex-col">
                <div class="snap-center w-full h-screen grid place-items-center bg-stone-900">
                    <div class="flex flex-col flex-nowrap w-full bg-stone-900">
                        <div class="grid place-items-center">
                            <div>
                                <h1 class="font-bold text-white text-5xl">Nikolas Tsiongas</h1>
                                <div class="text-rose-500">Programmer, medicus...</div>
                                <ul class="mt-10 flex justify-center space-x-4">
                                    <li>
                                        <a target="_blank" href="/" onclick="document.location='mailto:'+'ntsiongas'+'@'+'gmail.com'" class="bg-rose-600 hover:bg-rose-700 text-white px-3 py-2 rounded-md text-sm font-medium">Email</a>
                                    </li>

                                    <li>
                                        <a target="_blank" href="https://github.com/echo511/" class="bg-gray-900 hover:bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium">Github</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://twitter.com/ntsiongas/" class="bg-[#00acee] hover:bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium">Twitter</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://www.linkedin.com/in/nikolas-tsiongas-52896887/" class="bg-blue-800 hover:bg-blue-900 text-white px-3 py-2 rounded-md text-sm font-medium">LinkedIn</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="mt-20">
                            <div class="flex flex-col md:flex-row flex-nowrap place-content-center overflow-x-hidden gap-8 ">
                                {images.map((image) => {
                                    return h(NuxtLink, {
                                        href: image.link,
                                        class: 'flex flex-col text-stone-800 hover:text-white'
                                    }, () => [
                                        h(NuxtImg, {
                                            src: image.image,
                                            width: 176,
                                            height: 176,
                                            alt: image.title,
                                            class: `mx-auto md:m-0 w-32 h-32 rounded-xl opacity-50 hover:opacity-100 rotate-45 hover:rotate-0 scale-[0.6] hover:scale-95 transition duration-200`,
                                        }),
                                        h('div', {
                                            class: 'text-2xl font-bold text-center'
                                        }, [
                                            image.title,
                                        ]),
                                    ])
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }
});

