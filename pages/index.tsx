import { NuxtImg, NuxtLink } from "#components";


export default defineComponent({
    setup() {
        definePageMeta({
            layout: 'none'
        })

        useHead({
            meta: [
                { name: 'description', content: 'Programmer, medicus...' },
            ]
        })

        type MenuItem = {
            title: string,
            link: string,
            image: string,
        }

        const images: MenuItem[] = [
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
        ]

        const scrollTo = (id: string) => (event: Event) => {
            event.preventDefault();

            const element = document.getElementById(id)
            if (!element) {
                console.error(`Element with id ${id} not found! Update anchor or invoke scrollTo() with correct anchor id.`);
                return;
            }

            // Create observer that will fire provided callback when element is visible in viewport => when scrolling is finished
            const observerFactory = (callback: (element: Element) => void) => new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        observer.unobserve(entry.target);
                        callback(entry.target);
                    }
                });
            }, {
                threshold: 1.0  // 1.0 = fully visible in viewport
            });

            // Update URL #hash after scroll is done!
            observerFactory((element) => window.location.hash = element.id).observe(element)

            document.getElementById(id)?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            });
        }

        const subjectRef = ref('');
        const messageRef = ref('');
        const sendMail = () => {
            const mail = 'ntsiongas' + '@' + 'gmail.com';
            const subjectEncoded = encodeURIComponent(subjectRef.value); // encode subject
            const messageEncoded = encodeURIComponent(messageRef.value); // encode message
            const mailtoLink = `mailto:${mail}?subject=${subjectEncoded}&body=${messageEncoded}`;
            window.open(mailtoLink); // open email client
        }

        return () =>
            <div class="flex flex-col">
                <div class="snap-center w-full h-screen grid place-items-center bg-stone-900">
                    <div class="flex flex-col flex-nowrap  w-full bg-stone-900">
                        <div class="h-screen grid place-items-center">
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
                                        <a target="_blank" href="#kontakt" onClick={scrollTo('kontakt')} class="bg-rose-900 hover:bg-rose-500 text-white px-3 py-2 rounded-md text-sm font-medium">Poslat tajnosti (Bezpečný kontakt)</a>
                                    </li>
                                </ul>
                                <button onClick={scrollTo('zajmy')} aria-label="Zájmy" class="block mt-20 mx-auto w-24 h-24">
                                    <svg class="w-16 mx-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffffb2" version="1.1" id="Capa_1" viewBox="0 0 587.91 587.91" xml:space="preserve">
                                        <g>
                                            <g>
                                                <g>
                                                    <path d="M86.451,501.46c26.937,26.936,58.315,48.088,93.265,62.871c36.207,15.314,74.642,23.078,114.239,23.078     c39.596,0,78.032-7.764,114.239-23.078c34.949-14.783,66.328-35.936,93.266-62.871c26.936-26.938,48.09-58.316,62.871-93.266     c15.314-36.207,23.08-74.643,23.08-114.238c0-39.598-7.766-78.033-23.08-114.239c-14.781-34.95-35.936-66.328-62.871-93.265     c-26.938-26.937-58.316-48.09-93.266-62.872C371.986,8.265,333.551,0.501,293.955,0.501c-39.597,0-78.032,7.765-114.239,23.079     c-34.95,14.782-66.328,35.936-93.265,62.872s-48.09,58.315-62.873,93.264C8.265,215.923,0.5,254.358,0.5,293.956     c0,39.596,7.765,78.031,23.079,114.238C38.361,443.144,59.515,474.522,86.451,501.46z M293.955,43.341     c138.411,0,250.614,112.204,250.614,250.615c0,138.41-112.203,250.613-250.614,250.613S43.34,432.366,43.34,293.956     C43.34,155.545,155.544,43.341,293.955,43.341z" />
                                                    <path d="M293.955,587.909c-39.667,0-78.167-7.778-114.434-23.117c-35.01-14.809-66.442-35.998-93.423-62.979     c-26.983-26.984-48.172-58.417-62.979-93.425C7.778,372.119,0,333.618,0,293.956c0-39.663,7.778-78.165,23.118-114.435     c14.807-35.008,35.997-66.44,62.979-93.423c26.982-26.983,58.415-48.172,93.423-62.979c36.27-15.34,74.771-23.118,114.434-23.118     c39.666,0,78.167,7.778,114.433,23.119c35.009,14.807,66.441,35.997,93.425,62.979c26.984,26.985,48.173,58.417,62.979,93.423     c15.341,36.27,23.119,74.771,23.119,114.434c0,39.662-7.778,78.163-23.119,114.433c-14.806,35.007-35.994,66.439-62.979,93.425     c-26.982,26.98-58.415,48.169-93.425,62.979C372.121,580.131,333.62,587.909,293.955,587.909z M293.955,1.001     c-39.529,0-77.898,7.751-114.044,23.039c-34.889,14.757-66.215,35.874-93.106,62.765c-26.892,26.892-48.009,58.217-62.766,93.105     C8.751,216.057,1,254.427,1,293.956C1,333.483,8.751,371.854,24.039,408c14.757,34.889,35.874,66.214,62.766,93.106     c26.89,26.889,58.215,48.006,93.106,62.765c36.142,15.287,74.512,23.038,114.044,23.038s77.901-7.751,114.044-23.039     c34.89-14.758,66.216-35.875,93.106-62.764c26.893-26.895,48.009-58.22,62.764-93.106     c15.289-36.146,23.041-74.516,23.041-114.044c0-39.529-7.752-77.899-23.041-114.044c-14.754-34.887-35.871-66.212-62.764-93.106     c-26.892-26.891-58.218-48.008-93.106-62.765C371.855,8.752,333.485,1.001,293.955,1.001z M293.955,545.069     c-67.075,0-130.136-26.12-177.565-73.549c-47.429-47.43-73.55-110.489-73.55-177.564S68.96,163.82,116.39,116.391     c47.429-47.429,110.49-73.55,177.565-73.55c67.075,0,130.135,26.121,177.564,73.55c47.43,47.43,73.55,110.49,73.55,177.565     s-26.12,130.135-73.55,177.564C424.09,518.949,361.029,545.069,293.955,545.069z M293.955,43.841     c-66.808,0-129.617,26.017-176.858,73.257c-47.24,47.241-73.257,110.05-73.257,176.858c0,66.808,26.017,129.617,73.257,176.856     c47.24,47.24,110.05,73.257,176.858,73.257s129.617-26.017,176.857-73.257c47.24-47.239,73.257-110.049,73.257-176.856     c0-66.808-26.017-129.618-73.257-176.858C423.571,69.857,360.763,43.841,293.955,43.841z" />
                                                </g>
                                                <g>
                                                    <path d="M251,472.419c10.991,12.049,26.647,18.959,42.955,18.959s31.963-6.91,42.954-18.957l121.945-133.688     c7.975-8.742,13.045-19.498,14.664-31.102c1.49-10.701-0.039-21.615-4.428-31.557c-4.389-9.942-11.418-18.427-20.332-24.537     c-9.518-6.526-20.686-10.021-32.326-10.125v-64.02c0-32.059-26.082-58.14-58.141-58.14H229.618     c-32.059,0-58.14,26.082-58.14,58.14v64.02c-11.641,0.103-22.809,3.599-32.327,10.124c-8.913,6.11-15.942,14.595-20.331,24.538     c-4.388,9.942-5.919,20.854-4.427,31.557c1.618,11.604,6.688,22.357,14.663,31.1L251,472.419z M172.009,284.25h27.008     c8.45,0,15.3-6.85,15.3-15.3v-91.557c0-8.45,6.85-15.3,15.3-15.3h128.675c8.449,0,15.299,6.85,15.299,15.3v91.557     c0,8.45,6.852,15.3,15.301,15.3H415.9c13.295,0,20.264,15.788,11.305,25.612L305.258,443.548     c-3.033,3.326-7.168,4.988-11.303,4.988c-4.135,0-8.27-1.662-11.304-4.988L160.705,309.862     C151.746,300.038,158.714,284.25,172.009,284.25z" />
                                                    <path d="M293.955,491.878c-16.447,0-32.238-6.97-43.324-19.122L128.686,339.068c-8.042-8.816-13.156-19.664-14.789-31.367     c-1.505-10.796,0.039-21.801,4.464-31.828c4.426-10.028,11.517-18.586,20.506-24.749c9.459-6.484,20.552-10.007,32.11-10.205     v-63.526c0-32.334,26.306-58.64,58.64-58.64h128.673c32.335,0,58.641,26.306,58.641,58.64v63.526     c11.56,0.198,22.652,3.722,32.109,10.206c8.988,6.161,16.079,14.719,20.506,24.748c4.426,10.024,5.97,21.03,4.466,31.828     c-1.633,11.705-6.748,22.553-14.79,31.369L337.277,472.758C326.192,484.909,310.401,491.878,293.955,491.878z M229.618,119.753     c-31.783,0-57.64,25.857-57.64,57.64v64.515l-0.496,0.004c-11.537,0.102-22.62,3.573-32.049,10.037     c-8.835,6.057-15.805,14.469-20.156,24.327c-4.351,9.856-5.868,20.675-4.389,31.286c1.604,11.503,6.631,22.165,14.538,30.832     L251.37,472.082c10.896,11.945,26.418,18.796,42.585,18.796c16.167,0,31.688-6.851,42.584-18.794l121.945-133.688     c7.905-8.667,12.933-19.329,14.538-30.834c1.478-10.613-0.04-21.431-4.39-31.286c-4.353-9.858-11.322-18.271-20.157-24.326     c-9.428-6.464-20.509-9.935-32.049-10.037l-0.495-0.004v-64.516c0-31.783-25.857-57.64-57.641-57.64H229.618z M293.955,449.036     c-4.433,0-8.688-1.878-11.673-5.151L160.336,310.199c-4.281-4.693-5.346-11.219-2.781-17.029     c2.564-5.81,8.104-9.419,14.455-9.419h27.008c8.161,0,14.8-6.639,14.8-14.8v-91.557c0-8.712,7.088-15.8,15.8-15.8h128.675     c8.712,0,15.799,7.088,15.799,15.8v91.557c0,8.161,6.64,14.8,14.801,14.8H415.9c6.352,0,11.89,3.609,14.455,9.419     c2.564,5.811,1.499,12.336-2.781,17.029L305.627,443.885C302.642,447.158,298.388,449.036,293.955,449.036z M172.009,284.75     c-5.949,0-11.137,3.381-13.54,8.823c-2.402,5.443-1.404,11.556,2.605,15.952l121.946,133.686     c2.796,3.066,6.782,4.825,10.934,4.825s8.137-1.759,10.934-4.825l121.947-133.686c4.009-4.396,5.007-10.509,2.604-15.952     c-2.402-5.442-7.591-8.823-13.54-8.823h-27.008c-8.713,0-15.801-7.088-15.801-15.8v-91.557c0-8.161-6.639-14.8-14.799-14.8     H229.618c-8.161,0-14.8,6.64-14.8,14.8v91.557c0,8.712-7.088,15.8-15.8,15.8H172.009z" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div id="zajmy" class="h-screen grid place-items-center">
                            <div class="flex flex-col space-y-10">
                                <h2 class="font-bold text-white text-5xl text-center">Zájmy</h2>
                                <div class="flex flex-col md:flex-row flex-nowrap place-content-center gap-8">
                                    {images.map((image) => {
                                        return h(NuxtLink, {
                                            href: image.link,
                                            class: 'flex flex-col text-stone-800 hover:text-white'
                                        }, () => [
                                            h(NuxtImg, {
                                                src: image.image,
                                                width: 176,
                                                height: 176,
                                                alt: image.title,
                                                class: `mx-auto md:m-0 w-32 h-32 rounded-xl opacity-50 hover:opacity-100 hover:rotate-45 rotate-0 hover:scale-[0.6] scale-95 transition duration-200`,
                                            }),
                                            h('div', {
                                                class: 'block my-5 text-1xl font-italic font-sans text-center text-white'
                                            }, [
                                                image.title,
                                            ]),
                                        ])
                                    })}
                                </div>
                            </div>
                        </div>
                        <div id="kontakt" class="h-screen grid place-items-center">
                            <div class="flex flex-col space-y-10 w-4/6">
                                <h2 class="font-bold text-white text-5xl text-center">Bezpečný kontakt</h2>
                                <label class="text-white block font-bold">
                                    <span class="block mb-2">Předmět:</span>
                                    <input v-model={subjectRef.value} type="text" class="w-full px-4 py-2 font-mono text-rose-900 bg-white opacity-00 text-gray-900 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500" rows="15" />
                                </label>
                                <label class="text-white block font-bold">
                                    <span class="block mb-2">Text k zašifrování:</span>
                                    <textarea v-model={messageRef.value} class="w-full px-4 py-2 font-mono bg-white opacity-90 text-gray-900 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500" rows="15"></textarea>
                                </label>
                                <div class=" ml-auto">
                                    <button onClick={sendMail} class="hover:bg-rose-500 bg-rose-900 text-white font-bold px-4 py-2 rounded">
                                        Zašifrovat a odeslat e-mailem
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }
});

