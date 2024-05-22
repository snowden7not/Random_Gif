import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App(){
    return (
        <div>
            <div className="ripple-background fixed z-[-10]"> {/*background*/}
                <circle className="circle xxlarge shade1 " />
                <circle className="circle xlarge shade2" />
                <circle className="circle large shade3" />
                <circle className="circle medium shade4" />
                <circle className="circle small shade5" />
            </div> {/*background*/}

            <div className="w-full h-screen flex flex-col overflow-x-hidden items-center z-[10] relative"> {/*wrapper*/}
                <h1 className="bg-[#d9efff] rounded-lg w-11/12 text-center px-10 py-2 text-2xl sm:text-4xl font-bold mt-[22px]" >
                    RANDOM GIFS
                </h1>
            
                <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]"> 
                    <Random/>
                    <Tag/>
                </div>
            </div> {/*wrapper*/}
        </div>
    );
}