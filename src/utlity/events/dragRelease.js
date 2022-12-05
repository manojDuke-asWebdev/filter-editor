import { file, setfile } from '../../hooks/states'
// get the file 
function dragRelease (event) {
    setfile(event.target.file[0])
    console.log(file);
}

export default dragRelease;