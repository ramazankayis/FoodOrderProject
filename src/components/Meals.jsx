import React, { useEffect, useState } from "react";

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
        //...
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    };
    fetchMeals();
  }, []);

  return (
    <div>
      <ul id="meals">
        {loadedMeals.map((meal) => (
          <li key={meal.id}>{meal.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Meals;
