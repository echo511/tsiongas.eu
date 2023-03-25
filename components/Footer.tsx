

export default defineComponent({
    render() {
        return <>
            <footer class="bg-stone-800 py-8 mt-auto">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center">
                        <div class="text-gray-400 font-medium text-sm">&copy; 2023 <span class="text-white">Nikolas Tsiongas</span>. All rights reserved.</div>
                        <ul class="flex space-x-4">
                            <li>
                                <a target="_blank" href="#email" onclick="document.location='mailto:'+'ntsiongas'+'@'+'gmail.com'" class="text-gray-400 hover:text-gray-100 transition duration-200">Email</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://github.com/echo511/" class="text-gray-400 hover:text-gray-100 transition duration-200">Github</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://twitter.com/ntsiongas/" class="text-gray-400 hover:text-gray-100 transition duration-200">Twitter</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.linkedin.com/in/nikolas-tsiongas-52896887/" class="text-gray-400 hover:text-gray-100 transition duration-200">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    }
})

