import { NuxtPage } from "#components";
import { defaultMeta } from "./@common";


export default defineComponent({
    setup() {
        useHead(defaultMeta)

        return () =>
            <div>
                <slot>
                <NuxtPage/>
                </slot>
            </div>
    }
});

