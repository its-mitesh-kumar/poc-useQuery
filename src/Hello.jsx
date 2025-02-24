import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

const fetchData = async (page,title,body) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: title,
    body: body,
    userId: page,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const MyComponent = ({page,title,body}) => {
    console.log('page',page,title,body)
    useEffect(()=>{
        console.log("rerendering",page)
    })
  const { data, isLoading, error } = useQuery({
    queryKey: ['post', page,title,body], // Unique key for caching
    queryFn: ()=>fetchData(page,title,body),    // Function to fetch data
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>{data.title}</div>;
};

export default MyComponent