import { Footer, Menu, NuxtPage } from "#components";
import { defaultMeta } from "./@common";


export default defineComponent({
    setup() {
        useHead(defaultMeta)
        useHead({ bodyAttrs: { class: 'bg-stone-900' } })

        return () =>
            <div>
                <Menu />
                <div class="bg-stone-900 text-white">
                    <NuxtPage />
                </div>
                <Footer />
            </div>
    }
});

