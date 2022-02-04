import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { retrievePets, deletePet } from "./actions";

class PetList extends Component {
    componentDidMount() {
        this.props.retrievePets();
    }

    removePet = (id) => {
        this.props.deletePet(id).then(() => {
            this.props.retrievePets();
        });
    };

    render() {
        const { pets } = this.props;
        
        return (
            <div className="list row">
                <div className="col-md-6">
                    <h4>Pet List</h4>
                    <div>
                        <Link to="/add-pet">
                            <button className="button-primary">Add pet</button>
                        </Link>
                    </div>

                    <table className="u-full-width">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Animal</th>
                                <th>Breed</th>
                                <th>Location</th>
                                <th>Age</th>
                                <th>Sex</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pets &&
                                pets.map(
                                    ({ id, attributes }, i) => (
                                        <tr key={i}>
                                            <td>{attributes.name}</td>
                                            <td>{attributes.animal}</td>
                                            <td>{attributes.breed}</td>
                                            <td>{attributes.location}</td>
                                            <td>{attributes.age}</td>
                                            <td>{attributes.sex}</td>
                                            <td>
                                                <button onClick={() => this.removePet(id)}>
                                                    Delete
                                                </button>
                                               
                                                <Link to={`/edit-pet/${id}`}>
                                                    <button>Edit</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pets: state.pets,
    };
};

export default connect(mapStateToProps, { retrievePets, deletePet })(PetList);