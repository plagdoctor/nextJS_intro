import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({params}) {
    console.log("Detail first!");
    const router = useRouter();

    console.log("Detail Second!");
    const [title,id] = params || [];
    return (
        <div>
            <Seo title ={title} />
            <h4>{title}</h4>
        </div>
    );
}

export function getServerSideProps({params: {params} }) {
    console.log("getServerSideProrps first!");
    return {
        props: {params},
    };
}