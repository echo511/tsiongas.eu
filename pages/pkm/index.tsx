import { Footer, Menu } from "#components";


export default defineComponent({
    render() {
        return (
            <>
                <div class="bg-stone-900 min-w-screen min-h-screen pb-10">
                    <Menu />
                    <div class="bg-rose-600 text-white p-20">
                        <div class=" mx-auto my-5">
                            <h1 class="font-light text-5xl">Personal Knowledge Management (PKM)</h1>
                            <p>Proč se nelze naučit vnitřní a vnější cestu?</p>
                        </div>
                    </div>

                    {/* TODO Fix. Update this GPT generated text! */}
                    <div class="mt-10 mb-10 w-full max-w-5xl mx-auto p-4 bg-stone-800 rounded-lg text-gray-100">
                        <h1 class="text-2xl font-bold mb-4"></h1>
                        <p class="mb-4">
                            Personal Knowledge Management (PKM) je proces správy, organizace a sdílení informací v rámci jednotlivce. Existuje mnoho nástrojů a metod, které mohou být použity pro PKM, včetně Zettelkasten, Logseq a Obsidian.
                        </p>
                        <p class="mb-4">
                            Zettelkasten je systém poznámek, který byl poprvé navržen v roce 1980 a v posledních letech se stal velmi populárním v oblasti PKM. Jeho základem je rozdělení poznámek do malých samostatných jednotek, zvaných zettely. Tyto zettely jsou propojeny navzájem pomocí tagů a odkazů a tvoří tak velkou síť informací.
                        </p>
                        <p class="mb-4">
                            Logseq je další nástroj pro PKM, který kombinuje funkce zettely a wiki. Umožňuje ukládání poznámek v Markdown formátu a automatické vytváření odkazů mezi nimi. Logseq také umožňuje ukládat a organizovat další typy informací, jako jsou úkoly, kalendář a plány.
                        </p>
                        <p class="mb-4">
                            Obsidian je další nástroj pro PKM, který je založen na konceptu rozsáhlého grafu poznámek. Umožňuje ukládat a organizovat poznámky v Markdown formátu a propojovat je pomocí odkazů. Obsidian také nabízí funkce jako tematické mapy a grafy, které pomáhají uživatelům lépe vizualizovat a porozumět propojenosti svých poznámek.
                        </p>
                    </div>

                    <Footer />
                </div>
            </>
        )
    }
});

