const Javascript=()=>{
    const name="suraj"
    function cli(){
        document.body.style.background="black"

    }
    function dbcli(){
        document.body.style.color="white"
        
    }
    return(
        <div>
            <h1>Javascript</h1>
            <button onClick={cli}>Click</button>
            <button onDoubleClick={dbcli}>DoubleClick</button>
            <h1>{`my name is ${name}`}</h1>
            <h1>my name is {name}</h1>

        </div>
    )
}
export default Javascript