import { BsFillCloudUploadFill } from "react-icons/bs"

const Drop_file = () => {
    return <>
        <div className="my-4 rounded-lg border-4 border-dashed border-black w-3/4 py-16 mx-auto flex flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-center space-y-2">
                <BsFillCloudUploadFill  size="70" color="222" />
                <span className="text-lg font-bold ">Drag files here for upload</span>
                <button className="bg-white px-4 py-1 border-2 border-black capitalize rounded-md">upload</button>
            </div>
        </div>
    </>
}

export default Drop_file;