import { useState } from "react";

export default function AddMachine() {

    const [newMachine, setNewMachine] = useState({
        name: "",
        zone: "",
        status: "",
        dailyProduction: null
    })

    return (
        <>
            <div className="rounded-x p-6 m-6 rounded-2xl bg-blue-700 shadow-xl">
                <h1 className="text-3xl font-bold text-white">
                    Ajouter Une Machine
                </h1>

                <p className="mt-2 font-ex text-white/50">
                    formulaire d'ajouter un nouvelle machine
                </p>
            </div>
            <div className="">
                <form action="" className="grid justify-center">
                    <label htmlFor="NameMachine">Le Nom De Machine</label>
                    <input type="text" name="name" required className="border-2 border-blue-700 rounded-xl p-2 w-80 mt-1 mb-3" placeholder="enter le nom de machine" onChange={(e) => setNewMachine({ ...newMachine, name: e.target.value })} />

                    <label htmlFor="ZoneMachine">La Zone De Machine</label>
                    <input type="text" name="zone" required className="border-2 border-blue-700 rounded-xl p-2 w-80 mt-1 mb-3" placeholder="enter le nom de machine" onChange={(e) => setNewMachine({ ...newMachine, zone: e.target.value })} />


                    <label htmlFor="StatusMachine">Le Status De Machine</label>
                    <select name="status" required className="border-2 p-2 mt-1 mb-3 border-blue-700 rounded-xl" onChange={(e) => setNewMachine({ ...newMachine, status: e.target.value })}>
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

                    <label htmlFor="dailyProduction">Production Journalière</label>
                    <input type="number" name="dailyProduction" required className="border-2 p-2 border-blue-700 rounded-xl w-80 mt-1 mb-3" placeholder="enter le nom de machine" onChange={(e) => setNewMachine({ ...newMachine, dailyProduction: e.target.value })} />

                    <button className="bg-blue-700 rounded-xl text-amber-50 p-3 cursor-pointer" type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}