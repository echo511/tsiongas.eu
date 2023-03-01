

export default defineComponent({
    render() {
        type MenuItem = {
            title: string,
            link: string,
            image: string,
        }
        const images: MenuItem[] = [
            {
                title: 'Medical',
                link: '#medical',
                image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Medical_Care.jpg',
            },
            {
                title: 'Programming',
                link: '#programming',
                image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Programming_code.jpg',
            },
            {
                title: 'Blogging',
                link: '/blog',
                image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Fountain_pen_writing_%28literacy%29.jpg',
            },
            {
                title: 'Test',
                link: 'https://google.com',
                image: 'https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75',
            },
        ]

        return (
            <div class="flex flex-col bg-stone-900">
                <div class="w-full h-screen grid place-items-center">
                    <div class="flex flex-col flex-nowrap w-full">
                        <div class="grid place-items-center">
                            <div>
                                <h1 class="font-bold text-white text-5xl">Nikolas Tsiongas</h1>
                                <div class="text-rose-500">Programmer, medicus...</div>
                            </div>
                        </div>
                        <div class="mt-20">
                            <div class="flex flex-col md:flex-row flex-nowrap place-content-center overflow-x-hidden gap-0 ">
                                {images.map((image) => {
                                    const rotate = Math.floor(Math.random() * 3) + 1
                                    const direction = Math.random() < 0.5

                                    return h('a', {
                                        href: image.link,
                                        class: 'contents'
                                    }, [
                                        h('img', {
                                            src: image.image, 
                                            class: `mx-auto md:m-0 w-44 h-44 rounded-xl opacity-80 hover:opacity-100 ${direction ? '-' : ''}rotate-${rotate} hover:${direction ? '' : '-'}rotate-3 scale-75 hover:scale-95 transition duration-300`,
                                        })
                                    ])
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full h-screen grid place-items-center" id="medical">
                    <div class="flex flex-col flex-nowrap w-full">
                        <div class="grid place-items-center">
                            <div>
                                <h2 class="font-bold text-white text-5xl">Proč studovat medicínu</h2>
                                <div class="text-rose-500">Programmer, medicus...</div>
                            </div>
                        </div>
                        <div class="mt-20">
                        </div>
                    </div>
                </div>
                <div class="w-full h-screen grid place-items-center" id="programming">
                    <div class="flex flex-col flex-nowrap w-full">
                        <div class="grid place-items-center">
                            <div>
                                <h2 class="font-bold text-white text-5xl">Proč programovat</h2>
                                <div class="text-rose-500">Programmer, medicus...</div>
                            </div>
                        </div>
                        <div class="mt-20">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

