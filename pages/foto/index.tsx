import { NuxtImg, NuxtPicture } from "#components";

type PhotoMinimal = {
    title: string,
    image: string,
}

type PhotoMeta = PhotoMinimal & {
    // Dimensions are requided to mitigate content jumping.
    width: number,
    height: number,
};

type PhotoState = {
    "state": "bar" | "full"
};

type Photo = PhotoMeta & PhotoState;

type PhotoCollection = {
    [id: string]: Photo
}

const photos: PhotoCollection = {
    makroVidlicka: {
        title: 'Vidlička',
        image: '/photo/vidlicka.jpeg',
        width: 1216,
        height: 864,
        state: "bar",
    },
    vazka: {
        title: 'Vážka',
        image: '/photo/vazka.jpeg',
        width: 1216,
        height: 864,
        state: "bar",
    }
};

const generatePictureBarThumbnail = (photo: PhotoMeta) => {
    const link = useImage()(photo.image)

    return h('a', { href: link, class: 'hover:opacity-80', target: '_blank' }, [
        h(NuxtImg, {
            class: 'block h-64 ',
            src: photo.image,
            alt: photo.title,
        })
    ]);
};

const generatePictureSquareThumbnail = (photo: PhotoMinimal) => {
    const link = useImage()(photo.image)
    return (
        h('div', { class: ' ' }, [ // wrapper needed for rounded corners, wrapper has more height in grid
            h('a', { href: link, class: 'block rounded-lg overflow-hidden hover:opacity-80', target: '_blank' }, [
                h(NuxtImg, {
                    src: photo.image,
                    alt: photo.title,
                    sizes: "sm:355px md:320px lg:300px",
                    style: "",
                })
            ])
        ])
    );
};

const OnePhoto = defineComponent({
    props: {
        photoMeta: {
            type: Object as PropType<PhotoMeta>,
            required: true,
        }
    },
    setup(props, { slots }) {
        const photoMetaRef = toRefs(props).photoMeta;

        return () => {
            const photoMeta = photoMetaRef.value;
            const titleSlot = (slots?.title && slots.title()) || 'No title';
            const descriptionSlot = (slots?.description && slots.description()) || 'No description';

            return <>
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div class="flex rounded-lg overflow-hidden">
                        <div class="">
                            {generatePictureBarThumbnail(photoMeta)}
                        </div>
                        <div class="flex-1 p-4 bg-stone-800">
                            <h2 class="text-2xl font-bold mb-4 text-rose-600">{titleSlot}</h2>
                            {descriptionSlot}
                        </div>
                    </div>
                </div>
            </>
        }
    }
});

const Gallery = (title: string, photos: PhotoMinimal[]) => {
    return defineComponent(() => {
        return () => (
            <div class="mx-auto p-2 sm:p-6 lg:p-8  bg-stone-800 rounded-lg overflow-hidden">
                <h2 class="text-2xl font-bold mb-4">{title}</h2>
                <div class="grid grid-cols-3 gap-5">
                    {photos.map((photo) => generatePictureSquareThumbnail(photo))}
                </div>
            </div>
        )
    })
}

const FranceGallery = () => {
    const photos: PhotoMinimal[] = [];
    for (let i = 1; i <= 20; i++) {
        photos.push({
            title: 'Vidlička',
            image: '/photo/F - ' + i + '.jpeg',
        })
    }

    return Gallery('Francie', photos);
}

export default defineComponent({
    setup() {
        return () => (
            <div class="py-10 flex flex-col space-y-10">
                <div class="max-w-5xl mx-auto px-7 py-5 bg-stone-800 rounded-lg">
                    <h1 class="text-2xl font-bold mb-4">Fotografie</h1>
                    <p class="mb-4">Mé amatérské zájmy v oblasti fotografie byly založeny na mém studiu středoškolské optiky. Od té doby jsem se začal více zajímat o různé druhy fotografování, zejména o:</p>

                    <ul>
                        <li class="text-gray-300 mb-2 flex"><span class="bg-rose-900 text-gray-100 px-2 py-1 rounded-lg font-medium mr-2 inline-block">1.</span><span class="pl-2 first-letter:inline-block">Fotografování architektury, které mi umožňuje zachytit krásu a jedinečnost různých staveb a jejich architektonických prvků.</span></li>
                        <li class="text-gray-300 mb-2 flex"><span class="bg-rose-900 text-gray-100 px-2 py-1 rounded-lg font-medium mr-2 inline-block">2.</span><span class="pl-2 inline-block">Noční fotografování, které mě fascinuje tím, jak může město a okolní krajina vypadat úplně jinak a nabízí mnoho možností pro experimentování s dlouhými expozičními časy a světelnými efekty.</span></li>
                        <li class="text-gray-300 mb-2 flex"><span class="bg-rose-900 text-gray-100 px-2 py-1 rounded-lg font-medium mr-2 inline-block">3.</span><span class="pl-2 inline-block">Makrofotografie, která umožňuje zachytit detaily a textury, které bychom jinak přehlédli, a umožňuje mi objevovat krásu světa kolem nás na úplně nové úrovni.</span></li>
                    </ul>
                </div>

                <OnePhoto photoMeta={photos.makroVidlicka}>
                    {{
                        title: () => 'Makro: Vidlička',
                        description: () => <>
                            Rád bych se s vámi podělil o své zážitky z fotografování vidličky pomocí makro techniky.
                            Pro dosažení co nejvyššího detailu jsem použil klasický objektiv, který jsem na své zrcadlovce otočil naopak, čímž fungoval jako makro objektiv.
                            Takto jsem mohl vidličku fotografovat z blízka a zachytit úžasné detaily, které bych jinak přehlédl.
                            Detaily jsem ještě zvýraznil v postprodukci.
                            Bylo fascinující ve výsledku vidět strukturu kovových proužků vidličky, kterou nelze s běžným okem pozorovat.
                            Tato zkušenost mě motivovala pokračovat v experimentování s makro fotografií a zkoumat krásu světa kolem nás na zcela nové úrovni.
                        </>
                    }}
                </OnePhoto>

                {h(FranceGallery())}

                <OnePhoto photoMeta={photos.vazka}>
                    {{
                        title: () => 'Vážka',
                        description: () => <>
                            Krásná zelená vážka s jemnými křídly a dlouhým tělem na balkónovém zábradlí.
                            Expozice a ohnisková vzdálenost nastaveny pro zachycení všech detailů vážky.
                            Po zachycení fotografií byla v postprodukci provedena úprava barevnosti,
                            aby bylo pozadí černobílé a vážka zůstala v původních barvách.
                        </>
                    }}
                </OnePhoto>
            </div>
        )
    }
});
