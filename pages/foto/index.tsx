import { Footer, Menu, NuxtPicture } from "#components";


export default defineComponent({
    render() {

        type PhotoMeta = {
            title: string,
            link: string,
            image: string,
            // Dimensions are requided to mitigate content jumping.
            width: number,
            height: number,
        };

        const photos = {
            makroVidlicka: {
                title: 'Vidlička',
                link: '/photo/vidlicka.jpeg', // TODO: link to photo page
                image: '/photo/vidlicka.jpeg',
                width: 1216,
                height: 864,
            },
            vazka: {
                title: 'Vážka',
                link: '/photo/vazka.jpeg', // TODO: link to photo page
                image: '/photo/vazka.jpeg',
                width: 1216,
                height: 864,
            }
        };

        const generatePicture = (photo: PhotoMeta) => {
            return h('div', { class: 'block mx-auto rounded-lg overflow-hidden hover:opacity-80' }, [
                h('a', { href: photo.link, class: 'w-full', target: '_blank' }, [
                    h(NuxtPicture, {
                        class: 'block h-64',
                        src: photo.image,
                        alt: photo.title,
                        width: photo.width,
                        height: photo.height,
                    })
                ])
            ]);
        };

        return (
            <>
                <div class="bg-stone-900 min-w-screen min-h-screen pb-10">
                    <Menu />

                    <div class="mt-10 mb-10 w-full max-w-5xl mx-auto p-4 bg-stone-800 rounded-lg text-gray-100">
                        <h1 class="text-2xl font-bold mb-4">Fotografie</h1>
                        <p class="mb-4">Mé amatérské zájmy v oblasti fotografie byly založeny na mém studiu středoškolské optiky. Od té doby jsem se začal více zajímat o různé druhy fotografování, zejména o:</p>

                        <ul>
                            <li class="text-gray-300 mb-2 flex"><span class="bg-rose-500 text-gray-100 px-2 py-1 rounded-lg font-medium mr-2 inline-block">1.</span><span class="pl-2 first-letter:inline-block">Fotografování architektury, které mi umožňuje zachytit krásu a jedinečnost různých staveb a jejich architektonických prvků.</span></li>
                            <li class="text-gray-300 mb-2 flex"><span class="bg-rose-500 text-gray-100 px-2 py-1 rounded-lg font-medium mr-2 inline-block">2.</span><span class="pl-2 inline-block">Noční fotografování, které mě fascinuje tím, jak může město a okolní krajina vypadat úplně jinak a nabízí mnoho možností pro experimentování s dlouhými expozičními časy a světelnými efekty.</span></li>
                            <li class="text-gray-300 mb-2 flex"><span class="bg-rose-500 text-gray-100 px-2 py-1 rounded-lg font-medium mr-2 inline-block">3.</span><span class="pl-2 inline-block">Makrofotografie, která umožňuje zachytit detaily a textury, které bychom jinak přehlédli, a umožňuje mi objevovat krásu světa kolem nás na úplně nové úrovni.</span></li>
                        </ul>
                    </div>

                    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-white">
                        <h2 class="text-2xl font-bold mb-4">Makro: Vidlička</h2>
                        {generatePicture(photos.makroVidlicka)}
                        <div class="mt-10 mb-10 w-full p-4 bg-stone-800 rounded-lg">
                            Rád bych se s vámi podělil o své zážitky z fotografování vidličky pomocí makro techniky.
                            Pro dosažení co nejvyššího detailu jsem použil klasický objektiv, který jsem na své zrcadlovce otočil naopak, čímž fungoval jako makro objektiv.
                            Takto jsem mohl vidličku fotografovat z blízka a zachytit úžasné detaily, které bych jinak přehlédl.
                            Detaily jsem ještě zvýraznil v postprodukci.
                            Bylo fascinující ve výsledku vidět strukturu kovových proužků vidličky, kterou nelze s běžným okem pozorovat.
                            Tato zkušenost mě motivovala pokračovat v experimentování s makro fotografií a zkoumat krásu světa kolem nás na zcela nové úrovni.
                        </div>
                    </div>

                    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-white">
                        <h2 class="text-2xl font-bold mb-4">Vážka</h2>
                        {generatePicture(photos.vazka)}
                        <div class="mt-10 mb-10 w-full p-4 bg-stone-800 rounded-lg">
                            
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        )
    }
});

