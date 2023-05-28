import { Arrow, NuxtImg, NuxtLink } from "#components";

// Keep homepage assets small! Import on demand!
const importPgp = async () => (await import('../utils/usePgp')).default

// Setup contact form that uses PGP encryption
// It will take subject and message, encrypt message and open email client with pasted data
const ContactForm = defineComponent(() => {
    const subjectRef = ref('');
    const messageRef = ref('');

    const sendMail = async () => {
        const mail = 'ntsiongas' + '@' + 'gmail.com';
        const subjectEncoded = encodeURIComponent(subjectRef.value); // encode subject
        const message = await (await importPgp()).encrypt(messageRef.value);
        const messageEncoded = encodeURIComponent(message); // encode message
        const mailtoLink = `mailto:${mail}?subject=${subjectEncoded}&body=${messageEncoded}`;
        window.open(mailtoLink); // open email client
    }

    return () =>
        <>
            <label class="text-white">
                <span class="block mb-2">Předmět:</span>
                <input v-model={subjectRef.value} type="text" class="w-full px-4 py-2 font-mono text-rose-900 bg-white opacity-00 text-gray-900 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500" rows="15" />
            </label>
            <label class="text-white">
                <span class="block mb-2">Text k zašifrování:</span>
                <textarea onFocus={importPgp} v-model={messageRef.value} class="w-full font-mono bg-white opacity-90 text-gray-900 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500" rows="10"></textarea>
            </label>
            <div class=" ml-auto">
                <button onClick={sendMail} class="hover:bg-rose-500 bg-rose-900 text-white font-bold px-4 py-2 rounded">
                    Zašifrovat a odeslat e-mailem
                </button>
            </div>
        </>
});

// Setup anchors that will be used to scroll to specific section
const { anchors, scroll } = useAnchors({
    "Vizitka": { scrollLogicalPosition: "center" },
    "Zajmy": { scrollLogicalPosition: "center" },
    "Kontakt": { scrollLogicalPosition: "start" },
});
const { Vizitka, Zajmy, Kontakt } = anchors

export default defineComponent(() => {
    definePageMeta({
        layout: 'none'
    })

    useHead({
        meta: [
            { name: 'description', content: 'Programmer, medicus...' },
        ]
    })

    const zajmy: [{
        title: string,
        link: string,
        image: string,
    }, Ref<boolean>][] = [
        {
            title: 'Medical',
            link: '/medical/koagulace/',
            image: '/images/medical.jpg',
        },
        {
            title: 'Foto',
            link: '/foto/',
            image: '/images/photo.jpeg',
        },
        {
            title: 'PKM',
            link: '/pkm/',
            image: '/images/pkm.png',
        },
        {
            title: 'O webu',
            link: '/o-webu/',
            image: '/images/programming.jpg',
        },
    ].map((zajem) => [zajem, ref(false)]);

    return () =>
        <div class="flex flex-col bg-stone-900">
            <Vizitka class="min-h-screen flex flex-row">
                <div class="flex flex-col gap-x-32 my-auto mx-auto">
                    <div class="text-center">
                        <h1><span class="text-5xl font-bold text-rose-600 uppercase">Tsiongas</span> <span class="text-5xl text-white lowercase ml-2.5">Nikolas</span></h1>
                    </div>
                    <ul class="my-5 flex flex-col tablet:flex-row gap-4 text-center tablet:my-11">
                        <li>
                            <a target="_blank" href="https://github.com/echo511/" class="bg-gray-900 hover:bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium">Github</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://twitter.com/ntsiongas/" class="bg-[#00acee] hover:bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium">Twitter</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/nikolas-tsiongas-52896887/" class="bg-blue-800 hover:bg-blue-900 text-white px-3 py-2 rounded-md text-sm font-medium">LinkedIn</a>
                        </li>
                        <li>
                            <a target="_blank" href="#kontakt" onClick={scroll.toAnchor('Kontakt')} class="bg-rose-900 hover:bg-rose-500 text-white px-3 py-2 rounded-md text-sm font-medium">Bezpečný kontakt</a>
                        </li>
                    </ul>
                    <button onClick={scroll.toAnchor('Zajmy')} aria-label="Zájmy"><Arrow /></button>
                </div>
            </Vizitka>
            <Zajmy class="min-h-screen grid place-items-center">
                <div class="flex flex-col space-y-10">
                    <div class="flex flex-row flex-wrap place-content-center gap-8">
                        {() => {
                            let classes = 'mx-auto md:m-0 w-32 h-32 rounded-xl transition duration-200'
                            const passiveClasses = classes + ' opacity-50 rotate-0 scale-95'
                            const activeClasses = classes + ' opacity-100 rotate-45 scale-[0.6]'

                            return zajmy.map(([image, state]) => {
                                const resolvedClasses = state.value ? activeClasses : passiveClasses
                                const titleClasses = 'block my-2 text-center ' + (state.value ? ' font-bold text-rose-500' : ' font-normal text-white')
                                return <div onMouseenter={() => state.value = true} onMouseleave={() => state.value = false} class='flex flex-col text-stone-800 hover:text-white'>
                                    <NuxtLink href={image.link} >
                                        <NuxtImg src={image.image} width={176} height={176} alt={image.title} class={resolvedClasses} />
                                        <div class={titleClasses}>
                                            {image.title}
                                        </div>
                                    </NuxtLink>
                                </div>
                            })
                        }}
                    </div>
                    <button onClick={scroll.toAnchor('Kontakt')} aria-label="Zájmy" class=" mx-auto w-24 h-24">
                        <Arrow />
                    </button>
                </div>
            </Zajmy>
            <Kontakt class="min-h-screen grid place-items-center">
                <div class="tablet:w-2/3 flex flex-col space-y-4 p-4">
                    <h2 class="text-white text-5xl text-center">Bezpečný kontakt</h2>
                    <ContactForm />
                </div>
            </Kontakt>
        </div>
});
