export default function TabButton({children}) {
    function handleClick() {
        console.log(children)
    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}