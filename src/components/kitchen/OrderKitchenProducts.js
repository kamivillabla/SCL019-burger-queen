import React from "react";
import "../../App.css";
/* import { db } from "../../firebase/configfirebase";
import {
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js"; */

const OrderKitchenProducts = () => {
  /*  const fetchData = async () => {
    const docRef = doc(db, "order");

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };
 */
  return (
    <>
      <div className="d-flex justify-content-around mt-3">
        <p>
          <span className="circleIcons">
            <i className="fa-solid fa-circle"></i>
          </span>
          Pizza Vegetariana
        </p>
        <p>x65</p>
      </div>
    </>
  );
};

export default OrderKitchenProducts;
