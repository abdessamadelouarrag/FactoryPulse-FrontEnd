export default function PopUpDelete({machine, deleteMachine}){
    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-auto">
                <h3 className="text-xl">You Want Delete This Machine "{machine.name}" ?</h3>
                <div className="flex gap-4 justify-end mt-6 text-amber-50">
                    <button className="bg-blue-700 px-5 py-3 rounded-xl cursor-pointer" onClick={() => deleteMachine(machine.id)} >Yes, Delete</button>
                    <button className="bg-red-700 px-5 py-3 rounded-xl">No</button>
                </div>
            </div>
        </div>
    )
}