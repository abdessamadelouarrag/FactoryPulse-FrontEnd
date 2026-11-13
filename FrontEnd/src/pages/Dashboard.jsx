export default function Dashboard() {

    const allMachines = localStorage.getItem("machines");
    //count total machines
    const machines = JSON.parse(allMachines);

    //count foncation machine
    const fonctionMachine = machines.filter((machine) => machine.status == "En fonctionnement")

    //count panne machine
    const penneMachine = machines.filter((machine) => machine.status == "En panne")

    return (
        <>
            <div className="rounded-x p-6 m-6 rounded-2xl bg-blue-700 shadow-xl">
                <h1 className="text-3xl font-bold text-white">
                    Dashboard
                </h1>

                <p className="mt-2 font-ex text-white/50">
                    Statistiques de la plateforme
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-5">
                <div className="relative overflow-hidden bg-white shadow-md rounded-xl p-6 min-h-44">

                    <div className="relative z-10">
                        <h2 className="text-gray-500 text-sm">
                            Le nombre total de machines
                        </h2>

                        <h3 className="text-5xl font-bold mt-3">
                            {machines.length}
                        </h3>
                    </div>

                    <div className="absolute bottom-0 right-0 bg-orange-500 w-32 h-28 rounded-tl-full" />

                </div>

                <div className="relative overflow-hidden bg-white shadow-md rounded-xl p-6 min-h-44">
                    <div className="relative z-10">
                        <h2 className="text-gray-500 text-sm">
                            Machines en fonctionnement
                        </h2>
                        <h3 className="text-5xl font-bold mt-3">{fonctionMachine.length}</h3>
                    </div>
                    <div className="absolute bottom-0 right-0 bg-blue-600 w-32 h-28 rounded-tl-full" />
                </div>

                <div className="relative overflow-hidden bg-white shadow-md rounded-xl p-6 min-h-44">
                    <div className="relative z-10">
                        <h2 className="text-gray-500 text-sm">
                            Machines en panne
                        </h2>
                        <h3 className="text-5xl font-bold mt-3">{penneMachine.length}</h3>
                    </div>
                    <div className="absolute bottom-0 right-0 bg-green-600 w-32 h-28 rounded-tl-full" />
                </div>
            </div>
        </>

    );
}