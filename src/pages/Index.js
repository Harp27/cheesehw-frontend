import Post from '../components/Post';
import {useLoaderData, Form} from 'react-router-dom';

function Index (props){

    // fetch the loaderdata using the useLoaderData hook
    const cheeses = useLoaderData()

    // map over the todos and create a Post component for each cheese
    return <>
    <div style={{textAlign: "center"}}>
        <h2>Create a Cheese</h2>
        <Form method="post" action="/create">
            <input type="text" name="name" placeholder="Name"/>
            <input type="text" name="origin_country" placeholder="Country"/>
            <button>Create a new Cheese</button>
        </Form>
    </div>
    {cheeses.map((cheese) => <Post key={cheese.id} post={cheese}/>)}
    </>

}

export default Index;