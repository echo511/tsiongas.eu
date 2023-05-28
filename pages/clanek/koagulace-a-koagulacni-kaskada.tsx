import HeaderBar from "~/components/HeaderBar";


export default defineComponent({
    setup() {
        useSeoMeta({
            description: 'Koagulace a koagulační kaskáda jsou důležitými procesy v lidském těle, které zajišťují srážení krve. V tomto článku se dozvíte více o modelu iniciace a propagace koagulace. Zjistíte, jak tyto procesy probíhají a jaký mají vliv na zdraví člověka.',
        });
        useHead({
            link: [
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' },
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/fontawesome.min.css' },
            ],
        })

        return () =>
            <>
                <HeaderBar header="Koagulace a koagulační kaskáda" subheader="K čemu vnitřní a vnější cesta?" />
                <div class="bg-stone-800 text-white p-8">
                    <h2 class="text-2xl font-bold mb-4">Motivace</h2>
                    <p>
                        Rozhodl jsem se napsat článek o koagulační kaskádě, která je složitým procesem srážení krve v lidském těle. Článek je založen na novém modelu, který poskytuje logičtější náhled na koagulaci, než momentálně populárně vyučovaný model datovaný do šedesátých let 20. století. Mým cílem je tedy představit nový model koagulace a objasnit tento důležitý proces v těle člověka. Přestože nové poznatky nejsou mou vlastní prací, věřím, že nový model bude pro čtenáře zajímavý a přínosný.
                    </p>
                </div>
                <div class="w-full">
                    <object type="image/svg+xml" data="/koagulace-1.svg" class="w-full mx-auto"></object>
                    <a target="_blank" href="/koagulace-1.svg" class="block my-4 text-center hover:underline">Krok 1: Role extrinzní tenázy</a>
                </div>
            </>
    }
})

