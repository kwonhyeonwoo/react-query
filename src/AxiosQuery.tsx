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
  const { data, isError, error, isLoading, isFetching } = useQuery<
    string[],
    Error
  >(
    ["axios-query"],
    async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    },
    {
      onSuccess: (data) => {
        console.log("데이터 요청 성공:", data);
      },
      select: (data) => {
        const filter = data.map(({name}) => name); // ✅ 이것도 OK
        return filter;
      },
    }
  );
  if (isLoading) {
    <div>Loading..</div>;
  }
  if (isError) {
    <div>{error.message}</div>;
  }

  return (
    <div>
      <div>
        1
      </div>
      {data?.map((item, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            flexDirection: "column",
            borderBottom: "1px solid blue",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default AxiosQuery;
