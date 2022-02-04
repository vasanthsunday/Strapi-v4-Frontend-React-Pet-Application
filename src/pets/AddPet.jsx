import React, { Component } from "react";
import { connect } from "react-redux";
import { createPet } from "./actions";
import { Navigate } from "react-router-dom";

class AddPet extends Component {
 constructor(props) {
   super(props);
   this.onChangeName = this.onChangeName.bind(this);
   this.onChangeAnimal = this.onChangeAnimal.bind(this);
   this.onChangeBreed = this.onChangeBreed.bind(this);
   this.onChangeLocation = this.onChangeLocation.bind(this);
   this.onChangeAge = this.onChangeAge.bind(this);
   this.onChangeSex = this.onChangeSex.bind(this);
   this.savePet = this.savePet.bind(this);

   this.state = {
     name: "",
     animal: "",
     breed: "",
     location: "",
     age: "",
     sex: "",
     redirect: false,
   };
 }

 onChangeName(e) {
   this.setState({
     name: e.target.value,
   });
 }

 onChangeAnimal(e) {
   this.setState({
     animal: e.target.value,
   });
 }

 onChangeBreed(e) {
   this.setState({
     breed: e.target.value,
   });
 }

 onChangeLocation(e) {
   this.setState({
     location: e.target.value,
   });
 }

 onChangeAge(e) {
   this.setState({
     age: e.target.value,
   });
 }

 onChangeSex(e) {
   this.setState({
     sex: e.target.value,
   });
 }

 savePet() {
   const { name, animal, breed, location, age, sex } = this.state;
   this.props.createPet(name, animal, breed, location, age, sex).then(() => {
     this.setState({
       redirect: true,
     });
   });
 }

 render() {
   const { redirect } = this.state;
   if (redirect) {
     return <Navigate to="/" />;
   }

   return (
     <div className="submit-form">
       <div>
         <div className="form-group">
           <label htmlFor="name">Name</label>
           <input
             type="text"
             className="form-control"
             id="name"
             required
             value={this.state.name}
             onChange={this.onChangeName}
             name="name"
           />
         </div>
         <div className="form-group">
           <label htmlFor="animal">Animal</label>
           <input
             type="text"
             className="form-control"
             id="animal"
             required
             value={this.state.animal}
             onChange={this.onChangeAnimal}
             name="animal"
           />
         </div>

         <div className="form-group">
           <label htmlFor="breed">Breed</label>
           <input
             type="text"
             className="form-control"
             id="breed"
             required
             value={this.state.breed}
             onChange={this.onChangeBreed}
             name="breed"
           />
         </div>

         <div className="form-group">
           <label htmlFor="location">Location</label>
           <input
             type="text"
             className="form-control"
             id="location"
             required
             value={this.state.location}
             onChange={this.onChangeLocation}
             name="location"
           />
         </div>

         <div className="form-group">
           <label htmlFor="age">Age</label>
           <input
             type="text"
             className="form-control"
             id="age"
             required
             value={this.state.age}
             onChange={this.onChangeAge}
             name="age"
           />
         </div>

         <div className="form-group">
           <label htmlFor="sex">Sex</label>
           <input
             type="text"
             className="form-control"
             id="sex"
             required
             value={this.state.sex}
             onChange={this.onChangeSex}
             name="sex"
           />
         </div>

         <button onClick={this.savePet} className="btn btn-success">
           Submit
         </button>

       </div>
     </div>
   );
 }
}
export default connect(null, { createPet })(AddPet);