import { useSelector } from "react-redux";
import Balance from "./Balance";
import LangSwitcher from "./LangSwitcher";

export default function App() {
  const lang = useSelector((state) => state.locale.lang)

  return (
    <>
      <h1>Redux</h1>
      <Balance />
      <hr />
      <LangSwitcher />
      <p>Selected lang: { lang }</p>
    </>
  )
}
