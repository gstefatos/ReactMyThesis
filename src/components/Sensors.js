import React, { useState, useEffect } from 'react';
import {io,connect} from 'socket.io-client';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";

var Temp;
var Humidity;
var dataCh = [];


const SensorVisualization = () => {
    const [sensorData, setSensorData] = useState([]);
    var newSocket;
    newSocket = io.connect('http://192.168.1.18:5000');
    useEffect(() => {
        newSocket.on('saved_data', data => {
            Temp=(data.Temperature);
            Humidity = data.Humidity;
            if (!sensorData.find(d => d.timestamp === data.timestamp)) {
                dataCh.push(data)
              setSensorData([sensorData, data]);}
      });

      return () => {
        newSocket.off('connect');
        newSocket.off('saved_data'); 
        newSocket.close();
        console.log("Disconnected from server");
      };
    }, []);  
    // console.log(sensorData.Humidity);
    // const names = dataCh.map(({ Temperature }) => Temperature);
    console.log(sensorData.at(1));
  return (
    <ResponsiveContainer >
    <div >
    <LineChart width={500} height={300} data={sensorData}>
    <XAxis dataKey='sensorData.at(1).Temperature'/>
    <YAxis />
    <YAxis />
      <Line  ype="monotone" dataKey='sensorData.at(1)' stroke="#8884d8" dot={false} />
  </LineChart>
    </div>
    </ResponsiveContainer>
  );
};

export default SensorVisualization;
