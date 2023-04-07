import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import "./Chart.css";

const Charts = () => {
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
    markers: {
      size: 1,
      shape: "circle",
      radius: 2,
    },
    toolbar: {
      enabled: true,
    },
  });
  return (
    <div className="Chart">
      <Chart
        type="line"
        width={1450}
        height={550}
        series={product}
        options={option}
      ></Chart>
    </div>
  );
};

export default Charts;
