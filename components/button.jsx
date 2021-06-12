import Link from 'next/link'
import { FiDownload } from "react-icons/fi";

const Buttondownload = (props) => {
    return (
        <Link className="bg-green-900" href={props.href} ><a><button className="flex bg-white"><FiDownload />Download</button></a></Link>
    )
}

export default Buttondownload
