import HeaderBar from "~/components/HeaderBar";


export default defineComponent({
    render() {
        return (
            <>
                <HeaderBar header="Personal Knowledge Management (PKM)" subheader="" />

                <div class="p-4">
                    {/* TODO Fix. Update this GPT generated text! */}
                    <div class="p-4 flex flex-col gap-4 w-full max-w-5xl mx-auto bg-stone-800 rounded-lg text-gray-100">
                        <p>
                            Personal Knowledge Management (PKM) je proces správy, organizace a sdílení informací v rámci jednotlivce. Existuje mnoho nástrojů a metod, které mohou být použity pro PKM, včetně Zettelkasten, Logseq a Obsidian.
                        </p>
                        <p>
                            Zettelkasten je systém poznámek, který byl poprvé navržen v roce 1980 a v posledních letech se stal velmi populárním v oblasti PKM. Jeho základem je rozdělení poznámek do malých samostatných jednotek, zvaných zettely. Tyto zettely jsou propojeny navzájem pomocí tagů a odkazů a tvoří tak velkou síť informací.
                        </p>
                        <p>
                            Logseq je další nástroj pro PKM, který kombinuje funkce zettely a wiki. Umožňuje ukládání poznámek v Markdown formátu a automatické vytváření odkazů mezi nimi. Logseq také umožňuje ukládat a organizovat další typy informací, jako jsou úkoly, kalendář a plány.
                        </p>
                        <p>
                            Obsidian je další nástroj pro PKM, který je založen na konceptu rozsáhlého grafu poznámek. Umožňuje ukládat a organizovat poznámky v Markdown formátu a propojovat je pomocí odkazů. Obsidian také nabízí funkce jako tematické mapy a grafy, které pomáhají uživatelům lépe vizualizovat a porozumět propojenosti svých poznámek.
                        </p>
                    </div>
                </div>
            </>
        )
    }
});

