import { Footer, Menu } from "#components";


export default defineComponent({
    setup() {
        useSeoMeta({
            title: 'Koagulace a koagulační kaskáda',

        });
        useHead({
            link: [
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' },
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.min.css' },
            ],
        })
    },
    render() {
        return <>
            <Menu />
            <div class="bg-rose-600 text-white p-20">
                <div class=" mx-auto my-5">
                    <h1 class="font-light text-5xl">Koagulace a koagulační kaskáda</h1>
                    <p>Proč se nelze naučit vnitřní a vnější cestu?</p>
                </div>
            </div>
            <div class="bg-stone-800 text-white px-20 py-5">
                <h2 class="text-2xl font-bold mb-4">Motivace</h2>
                <p>
                    Rozhodl jsem se napsat článek o koagulační kaskádě, která je složitým procesem srážení krve v lidském těle. Článek je založen na novém modelu, který poskytuje logičtější náhled na koagulaci, než momentálně populárně vyučovaný model datovaný do šedesátých let 20. století. Mým cílem je tedy představit nový model koagulace a objasnit tento důležitý proces v těle člověka. Přestože nové poznatky nejsou mou vlastní prací, věřím, že nový model bude pro čtenáře zajímavý a přínosný.
                </p>
            </div>
            <div class="w-full py-5">
                <object type="image/svg+xml" data="/koagulace-1.svg" class="w-full mx-auto"></object>
                <a target="_blank" href="/koagulace-1.svg" class="block text-center hover:underline">Krok 1: Role extrinzní tenázy</a>
            </div>
            <Footer />
        </>
    }
})

