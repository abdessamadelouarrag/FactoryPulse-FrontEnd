
import CartMachine from "../components/CartMachine";
import { useEffect, useState } from "react";

export function SearchBar({ setSearch, setFilter }) {
    return (
        <div className="flex justify-around mb-5">
            <div className="flex justify-center items-center gap-5">
                <h3>Filter Par Nom</h3>
                <input type="text" placeholder="entre machine you need" className="text-sm border-2 border-blue-700 p-2 rounded-2xl" onChange={(e) => setSearch(e.target.value)} />
                <button className="bg-blue-700 text-amber-50 p-2 rounded-xl cursor-pointer">Réinitialiser</button>
            </div>
            <div className="flex justify-center items-center gap-5">
                <h3>Filer Par Status</h3>
                <select name="status" id="" className="border-2 p-2 border-blue-700 rounded-2xl" onChange={(e)=> setFilter(e.target.value)}>
                    <option value="">--acune--</option>
                    <option value="En fonctionnement">En fonctionnement</option>
                    <option value="En panne">En panne</option>
                    <option value="À l'arrêt">À l'arrêt</option>
                </select>
            </div>
        </div>
    )
}
export default function Machines() {
    const [machines, setMachines] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("")

    useEffect(() => {
        const saveData = localStorage.getItem("machines");

        if(saveData !== null){
            setMachines(JSON.parse(saveData))
        }
        else{
            fetch("/machines.json")
                .then((response) => response.json())
                .then((data) => {
                    setMachines(data);
                    localStorage.setItem("machines", JSON.stringify(data))
                })
                .catch((error) => console.error(error));
        }
    }, []);

    const filterMachines = machines.filter((machine) => {
       const filerName =  machine.name.toLowerCase().includes(search.toLowerCase())
       const filterStatus = filter == "" || machine.status === filter

       return filerName && filterStatus 
    })

    // let colorBorder = "";

    // if(filterMachines.filterStatus == "En fonctionnement"){
    //     colorBorder = "#ff0000"
    // }
    return (
        <>
            <div className="rounded-x p-6 m-6 rounded-2xl shadow-xl border-b-4 border-b-blue-600">
                <h1 className="text-3xl font-bold text-blue-700">
                    List Machines
                </h1>

                <p className="mt-2 font-ex text-blue-700/70">
                    total des machine dans platform
                </p>
            </div>
            <SearchBar  setSearch={setSearch} setFilter={setFilter}/>

            {filterMachines.length == 0 && (<h2 className="flex justify-center text-red-600">Aucun Resultat !</h2>)}


            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 p-5">
                {
                    filterMachines.map((machine) => {
                        let colorBorder = "";

                        if (machine.status === "En fonctionnement") {
                            colorBorder = "border-green-500";
                        } else if (machine.status === "En panne") {
                            colorBorder = "border-red-500";
                        } else if (machine.status === "À l'arrêt") {
                            colorBorder = "border-yellow-500";
                        }
                        return <CartMachine key={machine.id} machine={machine} className={`${colorBorder}`} />
                    })
                }
            </div>
        </>
    );
}
