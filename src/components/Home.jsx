import Image from '../media/aimodel.png?jsx';

export default function Home() {

    return(
        <div>
            <div class="flex flex-col mb-12">

            <div class="mt-12 md:mt-4 w-full flex justify center"> 
                <h1 class="w-full flex justify center">
                    Classic Models
                </h1>
                
                </div>

                <div class="block md:hidden">
                <div class="relative w-full h-[100vh] overflow-hidden">
                <Image class="absolute inset-0 w-full h-full object-cover" />
                </div>
                </div>


                <div class="hidden md:block">
                <div class="w-full flex justify center"> 
                <Image style={{ width: '100vw'}} />
                </div>
                </div>


            </div>
        </div>
    )
}


