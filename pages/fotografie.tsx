import { NuxtImg } from "#components";
import HeaderBar from "~/components/HeaderBar";

type PhotoMinimal = {
    title: string,
    image: string,
}

type PhotoMeta = PhotoMinimal & {
    // Dimensions are requided to mitigate content jumping.
    width: number,
    height: number,
};

type Photo = PhotoMeta;

type PhotoCollection = {
    [id: string]: Photo
}

const photos: PhotoCollection = {
    makroVidlicka: {
        title: 'Vidlička',
        image: '/photos/vidlicka.jpeg',
        width: 1216,
        height: 864,
    },
    vazka: {
        title: 'Vážka',
        image: '/photos/vazka.jpeg',
        width: 1216,
        height: 864,
    }
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

            const link = useImage()(photoMeta.image)

            const image = h('div', { class: 'w-full desktop:w-1/3 max-h-64 overflow-hidden' }, [
                h('a', { href: link, class: '', target: '_blank' }, [
                    h(NuxtImg, {
                        class: "hover:opacity-80",
                        src: photoMeta.image,
                        alt: photoMeta.title,
                        sizes: "sm:300px md:340px lg:1280px lx:1920px",
                        width: photoMeta.width,
                        height: photoMeta.height,
                    })
                ])
            ]);

            return <>
                <div class="max-w-full mx-auto">
                    <div class="flex flex-col desktop:flex-row rounded-lg overflow-hidden">
                        {image}
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

const Gallery = (title: string, photos: PhotoMeta[]) => {
    return defineComponent(() => {
        const generatePictureSquareThumbnail = (photo: PhotoMeta) => {
            const link = useImage()(photo.image)
            return (
                h('div', { class: 'mb-4' }, [ // wrapper needed for rounded corners, wrapper has more height in grid
                    h('a', { href: link, class: 'block rounded-lg overflow-hidden hover:opacity-80', target: '_blank' }, [
                        h(NuxtImg, {
                            class: "",
                            src: photo.image,
                            alt: photo.title,
                            sizes: "sm:300px md:340px lg:1280px lx:1920px",
                            width: photo.width,
                            height: photo.height,
                            loading: "lazy",
                        })
                    ])
                ])
            );
        };

        return () => (
            <div class="p-4  bg-stone-800 rounded-lg overflow-hidden">
                <h2 class="text-2xl font-bold mb-4">{title}</h2>
                <div class="columns-1 tablet:columns-3 desktop:columns-4">
                    {photos.map((photo) => generatePictureSquareThumbnail(photo))}
                </div>
            </div>
        )
    })
}

const FranceGallery = () => {
    const photos = useGalleries().map((photo) => {
        return {
            title: photo.filename,
            image: `/galleries/2023_France/${photo.filename}`,
            width: photo.width,
            height: photo.height,
        }
    })

    return Gallery('Francie', photos);
}

export default defineComponent({
    setup() {
        return () => (
            <div>
                <HeaderBar header="Fotografie" />

                <div class="p-4 flex flex-col space-y-4">
                    <div class="max-w-5xl mx-auto p-4 bg-stone-800 rounded-lg">
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
            </div>
        )
    }
});
