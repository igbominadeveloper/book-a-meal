import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MenuMeal from './MenuMeal';


const ConnectedMealList = ({ meals, link }) => {
  const mealList = meals.map(meal => <MenuMeal key={meal.id} meal={meal} link={link} />);

  return (
    <section className="card user-menu text-left">
      {mealList}
    </section>
  );
};

ConnectedMealList.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  link: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  meals: state.menus.data.menu.meals,
});

const MealList = connect(mapStateToProps)(ConnectedMealList);

export default MealList;