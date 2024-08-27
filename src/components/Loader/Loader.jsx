import { ThreeCircles} from "react-loader-spinner";
import css from './Loader.module.css';

export default function Loader() {
    return (
        <div className={css.loader}>
            <ThreeCircles color="aqua" height={70} width={70}/>
        </div>
    )
}