// import { useQuery } from '@tanstack/react-query'

// function Users() {
//     const { data, isPending, error } = useQuery({
//         queryKey: ['users'],
//         queryFn: () => fetch('/api/users').then(r => r.json()),
//     })

//     if (isPending) return <span>Loading...</span>
//     if (error) return <span>Oops!</span>

//     return <ul>{data.map(t => <li key={t.id}>{t.title}</li>)}</ul>
// }

// export default Users