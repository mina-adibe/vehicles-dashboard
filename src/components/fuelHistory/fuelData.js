import React, { useState, useEffect } from "react";
import styles from "./fuelData.module.scss";
import axios from "axios";

const FuelData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <table className={styles.blueTable}>
        <thead>
          <tr>
            <th>head2</th>
            <th>head2</th>
            <th>head3</th>
            <th>head4</th>
            <th>head5</th>
            <th>head6</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cell1_1</td>
            <td>cell2_1</td>
            <td>cell3_1</td>
            <td>cell4_1</td>
            <td>cell5_1</td>
            <td>cell6_1</td>
          </tr>
          <tr>
            <td>cell1_2</td>
            <td>cell2_2</td>
            <td>cell3_2</td>
            <td>cell4_2</td>
            <td>cell5_2</td>
            <td>cell6_2</td>
          </tr>
          <tr>
            <td>cell1_3</td>
            <td>cell2_3</td>
            <td>cell3_3</td>
            <td>cell4_3</td>
            <td>cell5_3</td>
            <td>cell6_3</td>
          </tr>
          <tr>
            <td>cell1_4</td>
            <td>cell2_4</td>
            <td>cell3_4</td>
            <td>cell4_4</td>
            <td>cell5_4</td>
            <td>cell6_4</td>
          </tr>
          <tr>
            <td>cell1_5</td>
            <td>cell2_5</td>
            <td>cell3_5</td>
            <td>cell4_5</td>
            <td>cell5_5</td>
            <td>cell6_5</td>
          </tr>
          <tr>
            <td>cell1_6</td>
            <td>cell2_6</td>
            <td>cell3_6</td>
            <td>cell4_6</td>
            <td>cell5_6</td>
            <td>cell6_6</td>
          </tr>
          <tr>
            <td>cell1_7</td>
            <td>cell2_7</td>
            <td>cell3_7</td>
            <td>cell4_7</td>
            <td>cell5_7</td>
            <td>cell6_7</td>
          </tr>
          <tr>
            <td>cell1_8</td>
            <td>cell2_8</td>
            <td>cell3_8</td>
            <td>cell4_8</td>
            <td>cell5_8</td>
            <td>cell6_8</td>
          </tr>
          <tr>
            <td>cell1_9</td>
            <td>cell2_9</td>
            <td>cell3_9</td>
            <td>cell4_9</td>
            <td>cell5_9</td>
            <td>cell6_9</td>
          </tr>
          <tr>
            <td>cell1_10</td>
            <td>cell2_10</td>
            <td>cell3_10</td>
            <td>cell4_10</td>
            <td>cell5_10</td>
            <td>cell6_10</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default FuelData;
