import { Footer, Menu, NuxtImg } from "#components";


export default defineComponent({
    setup() {
        return () =>
            <>
                <div class="bg-stone-900 min-w-screen min-h-screen pb-10">
                    <Menu />

                    <div class="mt-10 mb-10 w-full max-w-5xl mx-auto p-4 bg-stone-800 rounded-lg text-gray-100">
                        <h1 class="text-2xl font-bold mb-4">Proč jsem vytvořil tento web?</h1>
                        <p class="mb-4">
                            Rozhodl jsem se vytvořit tento web z několika důvodů:
                        </p>

                        <ul class="my-10">
                            <li class="text-gray-300 mb-2 flex">
                                <span class="bg-rose-500 text-gray-100 px-2 py-1 rounded-lg font-medium mr-2 inline-block">1.</span>
                                <span class="pl-2 first-letter:inline-block">
                                    Za prvé, chtěl jsem mít osobní web vizitku, kde bych mohl prezentovat své zkušenosti, dovednosti a projekty, na kterých jsem pracoval. Dále jsem chtěl mít rychlý a bezpečný kontaktní formulář, který by mi umožnil snadno komunikovat s návštěvníky webu.
                                </span>
                            </li>
                            <li class="text-gray-300 mb-2 flex">
                                <span class="bg-rose-500 text-gray-100 px-2 py-1 rounded-lg font-medium mr-2 inline-block">1.</span>
                                <span class="pl-2 first-letter:inline-block">
                                    Dalším důvodem bylo, že jsem chtěl sem tam publikovat články na různá témata, která mě zajímají a která by mohla být pro ostatní užitečná.
                                </span>
                            </li>
                            <li class="text-gray-300 mb-2 flex">
                                <span class="bg-rose-500 text-gray-100 px-2 py-1 rounded-lg font-medium mr-2 inline-block">1.</span>
                                <span class="pl-2 first-letter:inline-block">
                                    A konečně, důležitou motivací pro vytvoření tohoto webu byly 3&nbsp;Cčkové kredity, které potřebuji pro dokončení svého studia.
                                </span>
                            </li>
                        </ul>

                        <p class="mb-4">
                            Doufám, že tento web bude užitečný pro návštěvníky a splní svůj účel v prezentaci mého profesního profilu a mojí práce.
                        </p>
                    </div>


                    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-white">
                        <h2 class="text-2xl font-bold mb-4">Technologický rozbor webu</h2>
                        <div class="flex flex-row justify-center items-center">
                            {[
                                '/o-webu/nuxt3.svg',
                                '/o-webu/typescript.svg',
                            ].map((item) => {
                                return h(NuxtImg, { src: item, class: "w-1/3 max-h-20" })
                            })}
                        </div>
                        <div class="mt-10 mb-10 w-full p-4 bg-stone-800 rounded-lg">
                        </div>
                    </div>

                    <Footer />
                </div>
            </>
    }
});

