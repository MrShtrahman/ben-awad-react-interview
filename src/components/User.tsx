import { useUserData } from "./useUserData";

interface UserProps {
    pageIndex: number;
}

const User = ({ pageIndex }: UserProps) => {
    const { isLoading, error, data } = useUserData(pageIndex);

    if (isLoading) return <div>Loading...</div>;
    if (error) {
        console.error(
            `Something went wrong while fetching user number ${pageIndex}: ${(error as Error).message
            }`
        );
        return <p>Error: {(error as Error).message}</p>;
    }

    const { name, picture } = data.results[0];

    return <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '50vh',
            justifyContent: 'space-between',
            border: '1px black solid',
            margin: '10px'
        }}
    >
        <h1>{`${name.first} ${name.last}`}</h1>
        <img src={picture.large} height={300} />
    </div>
}

export default User;