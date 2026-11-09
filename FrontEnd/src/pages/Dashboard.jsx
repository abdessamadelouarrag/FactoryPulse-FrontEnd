export default function Dashboard() {
    return (
        <>
            <div className="rounded-x p-6 m-6 rounded-2xl bg-blue-700 shadow-xl">
                <h1 className="text-3xl font-bold text-white">
                    Dashboard
                </h1>

                <p className="mt-2 font-ex text-blue-200">
                    Statistiques de la plateforme
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-5">
                <div className="bg-white shadow-md rounded-xl p-6 border-b-4 border-amber-500">
                    <h2 className="text-gray-500 text-sm">
                        Le nombre total de machines
                    </h2>
                    <h3 className="text-3xl font-bold mt-3">120</h3>
                </div>

                <div className="bg-white shadow-md rounded-xl p-6 border-b-4 border-green-500">
                    <h2 className="text-gray-500 text-sm">
                        Machines en fonctionnement
                    </h2>
                    <h3 className="text-3xl font-bold mt-3">46</h3>
                </div>

                <div className="bg-white shadow-md rounded-xl p-6 border-b-4 border-red-500">
                    <h2 className="text-gray-500 text-sm">
                        Machines en panne
                    </h2>
                    <h3 className="text-3xl font-bold mt-3">23</h3>
                </div>
            </div>
        </>

    );
}