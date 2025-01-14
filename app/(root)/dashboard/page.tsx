import { User } from "@/lib/user";
import { ServerDataTable } from "@/app/components/table/data-table";
import { generateColumns } from "@/app/components/table/column";

async function fetchData(): Promise<User[]> {
    return [
        {
            id: "1",
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            phoneNumber: "",
            subscriptionEnd: "",
            subscriptionStart: "",
            subscriptionMonths: 0,
        },
        {
            id: "2",
            firstName: "Jane",
            lastName: "Doe",
            email: "jane@example.com",
            phoneNumber: "",
            subscriptionEnd: "",
            subscriptionStart: "",
            subscriptionMonths: 0,
        },
    ];
}

export default async function Page() {
    const data = await fetchData(); // Fetch-ul datelor de pe server

    const columns = generateColumns<User>(
        [
            {
                accessorKey: "firstName",
                header: "First Name",
            },
            {
                accessorKey: "lastName",
                header: "Last Name",
            },
            {
                accessorKey: "email",
                header: "Email",
            },
        ],
        {
            onEdit: (user) => console.log("Edit:", user),
            onDelete: (id) => console.log("Delete:", id),
        }
    );

    return (
        <>
            <p className="text-2xl font-bold">Dashboard</p>
            <ServerDataTable data={data} columns={columns} />
        </>
    );
}
