import { useState } from "react";

export default function PopUp({ machine, onClose, onSave }) {

    const [status, setStatus] = useState(machine.status);

     function handlerSave(){
        onSave(status)
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-96">

                <h2 className="text-xl font-bold mb-4">
                    Edit : {machine.name}
                </h2>

                <form>
                    <select
                        name="status"
                        defaultValue={machine.status} value={status} onChange={(e) => setStatus(e.target.value)}
                        className="border-2 p-2 border-blue-700 rounded-2xl w-full"
                    >
                        <option value="En fonctionnement">
                            En fonctionnement
                        </option>
                        <option value="En panne">
                            En panne
                        </option>
                        <option value="À l'arrêt">
                            À l'arrêt
                        </option>
                    </select>
                    <div className="flex gap-3">
                        <button type="button" onClick={onClose} className="bg-red-500 text-white p-2 rounded-xl mt-4 cursor-pointer">
                            Cancel
                        </button>
                        <button type="button" className="bg-blue-700 text-amber-50 p-2 rounded-xl mt-4 cursor-pointer" onClick={handlerSave}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
