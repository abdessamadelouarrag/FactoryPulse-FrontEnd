export default function CartMachine({ machine, className, onEdit }) {
    return (
        <div className={`border-b-4 ${className} shadow-sm p-3 rounded-xl`}>
            <div className="text-blue-600 text-sm flex justify-end line-clamp-1">
                <p className="pr-1">{machine.id}</p>
            </div>
            <h2><span className="text-blue-400">Name: </span>{machine.name}</h2>
            <h2><span className="text-blue-400">Zone: </span>{machine.zone}</h2>
            <h2><span className="text-blue-400">Status : </span>{machine.status}</h2>
            <div className="flex justify-end gap-3 text-sm mt-4">
                <button className="bg-blue-700 text-amber-50 px-5 rounded-2xl cursor-pointer" onClick={onEdit}>Edit</button>
            </div>
        </div>
    )
}