import axios from "axios";
import { useQuery } from "react-query";

interface DataType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const AxiosQuery = () => {
  const {data,isError,error,isLoading} = useQuery<DataType[], Error>("axios-query",async()=>{
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data 
  })
  if(isLoading){
    <div>Loading..</div>
  }
  if(isError){
    <div>{error.message}</div>
  }
  return (
    <div>
      {data?.map((item, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            flexDirection: "column",
            borderBottom: "1px solid blue",
          }}
        >
          <p>{item.name}</p>
          <p>{item.username}</p>
          <p>{item.email}</p>
          <p>{item.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default AxiosQuery;
