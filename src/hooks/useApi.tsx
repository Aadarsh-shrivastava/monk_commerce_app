import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const useApi = (uri: string, method: string, key: string, page?: number) => {
  const [alert, setAlert] = useState<{ type: string; message: string } | null>(
    null
  );

  const fetchData = async () => {
    const url = "http://localhost:9000/api" + uri;

    const options = {
      method: method,
      credentials: "include",
      headers: {
        accept: "application/json",
      },
    };

    try {
      console.log("fetching " + url);
      const res = await fetch(url, options);

      // Capture the response message from the backend
      const responseData = await res.json();

      // Set alert message from backend regardless of status code
      setAlert({
        type: res.ok ? "success" : "danger", // You can customize the type based on your requirements
        message: responseData.message || "Operation completed", // Fallback message if none provided
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      return responseData;
    } catch (err) {
      console.log(err);
      // Set alert for error cases
      setAlert({
        type: "danger",
        message:
          (err as Error).message || "An error occurred while fetching data.",
      });
      throw err; // Rethrow the error to let React Query handle it
    }
  };

  const { data, isLoading, error } = useQuery({
    queryFn: fetchData,
    queryKey: [key],
    // staleTime: 3600 * 1000,
    // cacheTime: 3600 * 1000,
  });

  return { data, isLoading, error, alert };
};

export default useApi;
