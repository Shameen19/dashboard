import React,{useState,useEffect} from "react";
import Chart from "react-apexcharts";


const CustomerReview = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/transactions");
      const data = await response.json();
      console.log("-------credits earned---------");
      console.log(data.creditsEarned);
      console.log("-------credits used---------");
      console.log(data.creditsUsed);
      setProduct([
        {
          name: "Credits Earned",
          data: data.creditsEarned,
        },
        {
          name: "Credits Used",
          data: data.creditsUsed,
        },
      ]);
    };
    fetchData();
  }, []);
  const [option, setOption] = useState({
    xaxis: {
      title: { text: "Credits Earned" },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      title: { text: "Your Credits" },
    },
  });
  return <div className="CustomerReview">
        <Chart
          type="line"
          series={product}
          options={option}
        ></Chart>
  </div>;
};

export default CustomerReview;
