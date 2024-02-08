export default function Navbar(){
    return(
        <div class="absolute w-full">
        <div class="w-full flex flex-row justify-between px-8 py-4">
        <div class="text-xl">
                <div class="w-fit">
                    <div class="text-3xl font-bold">BIGUL</div>
                </div>

        </div>
        <div>
            <button class="px-2.5 py-2 bg-slate-900 text-gray-200 text-xl rounded-3xl hover:bg-green-500 hover:text-gray-900 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
            </button>
        </div>
    </div>
    </div>
    )
}