import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Preloader } from 'react-materialize';
import Loading from '../util/Loading';
import MealsCheckBoxForm from './MealsCheckBoxForm';
import { fetchMeals } from '../../actions/mealActions';
import { updateMenu, fetchMenu } from '../../actions/menuActions';
import { getMeals } from '../../reducers/mealReducer';

class ConnectedUpdateMenu extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchMeals();
  }

  async handleSubmit(values) {
    await this.props.modifyMenu(values, this.props.menuId);
    this.props.fetchMenu();
    return this.props.closeModal();
  }

  render() {
    const {
      meals, error, isUpdating, isFetching,
    } = this.props;

    return (
      <section>
        <h2 className="text-center">Update Menu</h2>
        {isFetching
        ?
          <Loading text="Fetching meals . . .">
            <Preloader />
          </Loading>
        :
          <MealsCheckBoxForm
            error={error}
            handleSubmit={this.handleSubmit}
            meals={meals}
            action="Set"
            isSubmitting={isUpdating}
          />}
      </section>
    );
  }
}

ConnectedUpdateMenu.propTypes = {
  modifyMenu: PropTypes.func.isRequired,
  fetchMeals: PropTypes.func.isRequired,
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  isUpdating: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  menuId: PropTypes.number.isRequired,
  /* eslint react/require-default-props: 0 */
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
  ]),
  closeModal: PropTypes.func.isRequired,
  fetchMenu: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: state.menu.saveError,
  meals: getMeals(state.meals),
  isUpdating: state.menu.isUpdating,
  isFetching: state.meals.isFetching,
  menuId: state.menu.menuId,
});

const mapDispatchToProps = dispatch => ({
  modifyMenu(values, menuId) { dispatch(updateMenu(values, menuId)); },
  fetchMeals() { dispatch(fetchMeals()); },
  fetchMenu() { dispatch(fetchMenu()); },
});

const UpdateMenu = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedUpdateMenu);

export default UpdateMenu;
