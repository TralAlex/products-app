import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const YourComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('file:///android_asset/data.json'); // Adjust the path accordingly
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Data:</Text>
      {data.map((item, index) => (
        <Text key={index}>{JSON.stringify(item)}</Text>
      ))}
    </View>
  );
};

export default YourComponent;