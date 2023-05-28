import { NuxtImg } from "#components";


export default defineComponent({
    setup() {
        return () =>
            <>
                <div class="p-4 flex flex-col space-y-4 items-start">
                    <div class="w-full max-w-5xl mx-auto px-7 py-5 bg-stone-800 rounded-lg text-gray-100">
                        <h1 class="text-2xl font-bold mb-4">Proč jsem vytvořil tento web?</h1>
                        <p>
                            Rozhodl jsem se vytvořit tento web z několika důvodů:
                        </p>

                        <ul class="my-4">
                            <li class="text-gray-300 mb-2 flex">
                                <span class="bg-rose-900 text-gray-100 px-2 py-1 rounded-lg font-medium mr-2 inline-block">1.</span>
                                <span class="pl-2 first-letter:inline-block">
                                    Za prvé, chtěl jsem mít osobní web vizitku, kde bych mohl prezentovat své zkušenosti, dovednosti a projekty, na kterých jsem pracoval. Dále jsem chtěl mít rychlý a bezpečný kontaktní formulář, který by mi umožnil snadno komunikovat s návštěvníky webu.
                                </span>
                            </li>
                            <li class="text-gray-300 mb-2 flex">
                                <span class="bg-rose-900 text-gray-100 px-2 py-1 rounded-lg font-medium mr-2 inline-block">2.</span>
                                <span class="pl-2 first-letter:inline-block">
                                    Dalším důvodem bylo, že jsem chtěl sem tam publikovat články na různá témata, která mě zajímají a která by mohla být pro ostatní užitečná.
                                </span>
                            </li>
                            <li class="text-gray-300 mb-2 flex">
                                <span class="bg-rose-900 text-gray-100 px-2 py-1 rounded-lg font-medium mr-2 inline-block">3.</span>
                                <span class="pl-2 first-letter:inline-block">
                                    A konečně, důležitou motivací pro vytvoření tohoto webu byly 3&nbsp;Cčkové kredity, které potřebuji pro dokončení svého studia.
                                </span>
                            </li>
                        </ul>

                        <p class="mb-4">
                            Doufám, že tento web bude užitečný pro návštěvníky a splní svůj účel v prezentaci mého profesního profilu a mojí práce.
                        </p>
                    </div>

                    <div class="w-full max-w-7xl mx-auto text-white">
                        <h2 class="text-4xl w-full pb-5 border-b-2 border-stone-800 font-bold mb-4 text-center">Použité technologie</h2>
                        <div class="my-8 flex flex-col tablet:flex-row gap-8 justify-center items-center">
                            {[
                                { src: '/images/o-webu/typescript.svg', alt: 'TypeScript', link: 'https://www.typescriptlang.org/' },
                                { src: '/images/o-webu/nuxt3.svg', alt: 'Nuxt 3', link: 'https://nuxtjs.org/' },
                                { src: '/images/o-webu/tailwind-css.svg', alt: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
                                { src: '/images/o-webu/chatgpt.svg', alt: 'ChatGPT', link: 'https://openai.com/' }
                            ].map((item) => {
                                return <a target="_blank" href={item.link} class="w-2/3">
                                    {h(NuxtImg, { src: item.src, alt: item.alt, title: item.alt, class: "w-full max-h-14" })}
                                </a>
                            })}
                        </div>
                        <div class="my-8 w-full p-4 bg-stone-800 rounded-lg">
                            <div class="flex flex-col space-y-5">
                                <p>
                                    <strong>TypeScript</strong>: Typování je jedním z největších problémů jazyka JavaScript. TypeScript je nadstavbou JavaScriptu, která dodává silné typování a umožňuje odhalit chyby v kódu vývojářům při psaní kódu. TypeScript je velmi populární v prostředí Node.js, ale také se často používá v moderních frameworkách, jako je například Angular.
                                </p>
                                <p>
                                    <strong>Nuxt 3</strong>: Nuxt.js je open-source framework pro Vue.js, který umožňuje snadnou tvorbu server-side rendered aplikací. Nuxt 3 je nová verze tohoto frameworku, která se zaměřuje na zvýšení výkonu a jednodušší použití. Nuxt 3 obsahuje mnoho nových funkcí, jako například nový modulární přístup k vývoji aplikací, novou architekturu a mnoho dalšího.
                                </p>
                                <p>
                                    <strong>Tailwind CSS</strong>: Tailwind CSS je CSS framework, který usnadňuje tvorbu webových stránek pomocí předdefinovaných tříd. Tailwind CSS umožňuje snadno a rychle psát kód, který je dobře čitelný a udržovatelný. Tailwind CSS se stává stále populárnějším mezi vývojáři kvůli jeho snadné použitelnosti a velké flexibilitě.
                                </p>
                                <p>
                                    <strong>ChatGPT</strong>: ChatGPT je chatbot vytvořený pomocí OpenAI technologie. Tento chatbot využívá umělou inteligenci pro odpovídání na uživatelské dotazy. ChatGPT se stává stále populárnějším mezi vývojáři, kteří potřebují vytvořit rychle a snadno chatboty, které mohou být použity v různých aplikacích, jako jsou například webové stránky a mobilní aplikace.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    }
});

