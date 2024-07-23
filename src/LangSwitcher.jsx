import { useDispatch, useSelector } from "react-redux"
import { changeLang } from "./redux/localeSlice";

export default function LangSwitcher() {
    const lang = useSelector((state) => state.locale.lang)

    const dispatch = useDispatch()
    
    const handleChange = (e) => {
        dispatch(changeLang(e.target.value))
    }

    return (
        <div>
            <select value={lang} onChange={handleChange}>
                <option value="en">EN</option>
                <option value="uk">UK</option>
                <option value="pl">PL</option>
            </select>
        </div>
    )
}