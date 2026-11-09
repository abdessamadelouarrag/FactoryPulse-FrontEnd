export default function CartMachine({machine}){
    return(
        <div className="border-b-4 border-amber-400 shadow-sm p-3 rounded-xl">
            <h2><span className="text-blue-400">Name: </span>{machine.name}</h2>
            <h2><span className="text-blue-400">Zone: </span>{machine.zone}</h2>
            <h2><span className="text-blue-400">Status : </span>{machine.status}</h2>
        </div>
    )
}