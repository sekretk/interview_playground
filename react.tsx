//what can cause rerender of FC?


const ShowArr = memo((params: {items: Array<number>}) => 
    <div>{params.items}</div>, () => items > items2);

const App = () => {
    const [val, setVal] = useState([1,2]);
    return <div>
        <ShowArr items={val}/>
        <button onClick={() => setVal([1,2])}></>
    </div>
}