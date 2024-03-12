'use client'


export const ScrollComponent = () => {

    const scrollToDescription = () => {
        const section = document.getElementById('description');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }

    const scrollToInformation = () => {
        const section = document.getElementById('information');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }

    return (
        <>
            <div className="flex w-full flex-row items-center gap-x-5 my-10">
                <button className="px-5 py-2 rounded-lg bg-[#47141e] text-xl text-white font-bold border-4 border-[#47141e]
                transition ease-in-out hover:bg-white hover:text-[#47141e]" onClick={()=>{
                    scrollToDescription();
                }
                }>Opis</button>
                <button className="px-5 py-2 rounded-lg bg-[#47141e] text-xl text-white font-bold border-4 border-[#47141e]
                transition ease-in-out hover:bg-white hover:text-[#47141e]" onClick={()=>{
                    scrollToInformation();
                }
                }>Informacje</button>
            </div>
        </>
    )
}