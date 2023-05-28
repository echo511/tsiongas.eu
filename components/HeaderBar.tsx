
export default defineComponent({
    props: {
        header: {
            type: String,
        },
        subheader: {
            type: String,
        }
    },
    setup: (props) => {
        const { header, subheader } = props

        return () => (
            <div class="bg-rose-600 text-white p-8">
                <div class=" mx-auto">
                    <h1 class="text-5xl">{header}</h1>
                    <span class="block pt-4">{subheader}</span>
                </div>
            </div>
        )
    }
})
