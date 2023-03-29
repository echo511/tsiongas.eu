import { Arrow, NuxtImg, NuxtLink } from "#components";

// Keep homepage assets small! Import on demand!
const importPgp = async () => (await import('../utils/usePgp')).default

// Setup contact form that uses PGP encryption
// It will take subject and message, encrypt message and open email client with pasted data
const ContactForm = defineComponent({
    setup() {
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
                <label class="text-white block font-bold">
                    <span class="block mb-2">Předmět:</span>
                    <input v-model={subjectRef.value} type="text" class="w-full px-4 py-2 font-mono text-rose-900 bg-white opacity-00 text-gray-900 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500" rows="15" />
                </label>
                <label class="text-white block font-bold">
                    <span class="block mb-2">Text k zašifrování:</span>
                    <textarea onFocus={importPgp} v-model={messageRef.value} class="w-full px-4 py-2 font-mono bg-white opacity-90 text-gray-900 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500" rows="15"></textarea>
                </label>
                <div class=" ml-auto">
                    <button onClick={sendMail} class="hover:bg-rose-500 bg-rose-900 text-white font-bold px-4 py-2 rounded">
                        Zašifrovat a odeslat e-mailem
                    </button>
                </div>
            </>
    }
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
            title: 'Programming',
            link: '/',
            image: '/programming.jpg',
        },
        {
            title: 'PKM',
            link: '/pkm/',
            image: '/pkm.png',
        },
        {
            title: 'Medical',
            link: '/medical/koagulace/',
            image: '/medical.jpg',
        },
        {
            title: 'Foto',
            link: '/foto/',
            image: '/photo.jpeg',
        },
        {
            title: 'Weby',
            link: '/o-webu/',
            image: '/photo.jpeg',
        },
    ].map((zajem) => [zajem, ref(false)]);

    return () =>
        <div class="flex flex-col">
            <div class="snap-center w-full h-screen grid place-items-center bg-stone-900">
                <div class="flex flex-col flex-nowrap  w-full bg-stone-900">
                    <Vizitka class="h-screen grid place-items-center">
                        <div>
                            <div class="my-20">
                                <h1 class="font-bold text-white text-5xl">Nikolas Tsiongas</h1>
                                <div class="text-rose-500">Programmer, medicus...</div>
                            </div>
                            <ul class="mt-10 flex justify-center space-x-4">
                                <li>
                                    <a target="_blank" href="https://github.com/echo511/" class="bg-gray-900 hover:bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium">Github</a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://twitter.com/ntsiongas/" class="bg-[#00acee] hover:bg-blue-500 text-white px-3 py-2 rounded-md text-sm font-medium">Twitter</a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://www.linkedin.com/in/nikolas-tsiongas-52896887/" class="bg-blue-800 hover:bg-blue-900 text-white px-3 py-2 rounded-md text-sm font-medium">LinkedIn</a>
                                </li>
                            </ul>
                            <ul class="mt-10 flex justify-center space-x-4">
                                <li>
                                    <a target="_blank" href="/" onclick="document.location='mailto:'+'ntsiongas'+'@'+'gmail.com'" class="bg-rose-900 hover:bg-rose-500 text-white px-3 py-2 rounded-md text-sm font-medium">Email</a>
                                </li>
                                <li>
                                    <a target="_blank" href="#kontakt" onClick={scroll.toAnchor('Kontakt')} class="bg-rose-900 hover:bg-rose-500 text-white px-3 py-2 rounded-md text-sm font-medium">Poslat tajnosti (Bezpečný kontakt)</a>
                                </li>
                            </ul>
                            <button onClick={scroll.toAnchor('Zajmy')} aria-label="Zájmy" class="block mt-10 mx-auto w-24 h-24">
                                <Arrow />
                            </button>
                        </div>
                    </Vizitka>
                    <Zajmy class="h-screen grid place-items-center">
                        <div class="flex flex-col space-y-10">
                            <h2 class="font-bold text-white text-5xl text-center">Zájmy</h2>
                            <div class="flex flex-col md:flex-row flex-nowrap place-content-center gap-8">
                                {zajmy.map(([image, ref]) => {
                                    let classes = 'mx-auto md:m-0 w-32 h-32 rounded-xl transition duration-200'
                                    const passiveClasses = ' opacity-50 rotate-0 scale-95 transition'
                                    const activeClasses = ' opacity-100 rotate-45 scale-[0.6] transition'

                                    if (ref.value) {
                                        classes += activeClasses
                                    } else {
                                        classes += passiveClasses
                                    }

                                    const setActive = () => ref.value = true
                                    const setPassive = () => ref.value = false

                                    return <div onMouseenter={setActive} onMouseleave={setPassive} class='flex flex-col text-stone-800 hover:text-white'>
                                        <NuxtLink href={image.link} >
                                            <NuxtImg src={image.image} width={176} height={176} alt={image.title} class={classes} />
                                            <div class='block my-5 text-1xl font-italic font-sans text-center text-white'>
                                                {image.title}
                                            </div>
                                        </NuxtLink>
                                    </div>
                                })}
                            </div>
                            <button onClick={scroll.toAnchor('Kontakt')} aria-label="Zájmy" class="block mx-auto w-24 h-24">
                                <Arrow />
                            </button>
                        </div>
                    </Zajmy>
                    <Kontakt class="h-screen grid place-items-center">
                        <div class="flex flex-col space-y-10 w-4/6">
                            <h2 class="font-bold text-white text-5xl text-center">Bezpečný kontakt</h2>
                            <ContactForm />
                        </div>
                    </Kontakt>
                </div>
            </div>
        </div>
});
