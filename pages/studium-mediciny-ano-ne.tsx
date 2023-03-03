import { Menu } from "#components"


export default defineComponent({
    render() {
        return <div class="flex flex-col snap-y snap-mandatory overflow-scroll bg-stone-900 text-white">
            <Menu />
            <div class="snap-center w-full h-screen grid place-items-center">
                <div class="flex flex-col flex-nowrap w-full">
                    <div class="grid place-items-center">
                        <div>
                            <h2 class="font-bold text-white text-5xl">Proč studovat medicínu</h2>
                            <div class="text-rose-500">Programmer, medicus...</div>
                        </div>
                        <h2>Ano</h2>
                        <ul class="grid place-items-start">
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                        </ul>
                        <h2>Ne</h2>
                        <ul class="grid place-items-start">
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    }
})

