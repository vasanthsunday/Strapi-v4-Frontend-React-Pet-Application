import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePet } from "./actions";
import { Navigate } from "react-router-dom";
import PetService from "../pets/petsService";

class EditPet extends Component {
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
     currentPet: {
       id:"", 
       name: "",
       animal: "",
       breed: "",
       location: "",
       age: "",
       sex: "",
     },
     redirect: false,
   };
 }

 componentDidMount() {
   this.getPet(window.location.pathname.replace("/edit-pet/", ""));
 }

 getPet(id) {   
  PetService.get(id).then((response) => {
    
    delete response.data.data.attributes.publishedAt;
    delete response.data.data.attributes.updatedAt;    
    this.setState({
      id:response.data.data.id,
      currentPet: response.data.data.attributes
    });
    
  });
}

savePet() {
  
  this.props
    .updatePet(this.state.id, this.state.currentPet)
    .then(() => {
      this.setState({
        redirect: true,
      });
    });
}

 onChangeName(e) {
   const name = e.target.value;
   this.setState(function (prevState) {
     return {
       currentPet: {
         ...prevState.currentPet,
         name: name,
       },
     };
   });
 }

 onChangeAnimal(e) {
   const animal = e.target.value;
   this.setState(function (prevState) {
     return {
       currentPet: {
         ...prevState.currentPet,
         animal: animal,
       },
     };
   });
 }

 onChangeBreed(e) {
   const breed = e.target.value;
   this.setState(function (prevState) {
     return {
       currentPet: {
         ...prevState.currentPet,
         breed: breed,
       },
     };
   });
 }

 onChangeLocation(e) {
   const location = e.target.value;
   this.setState(function (prevState) {
     return {
       currentPet: {
         ...prevState.currentPet,
         location: location,
       },
     };
   });
 }

 onChangeAge(e) {
   const age = e.target.value;
   this.setState(function (prevState) {
     return {
       currentPet: {
         ...prevState.currentPet,
         age: age,
       },
     };
   });
 }

 onChangeSex(e) {
   const sex = e.target.value;
   this.setState(function (prevState) {
     return {
       currentPet: {
         ...prevState.currentPet,
         sex: sex,
       },
     };
   });
 }



 render() {
   const { redirect, currentPet } = this.state;
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
             value={currentPet.name}
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
             value={currentPet.animal}
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
             value={currentPet.breed}
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
             value={currentPet.location}
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
             value={currentPet.age}
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
             value={currentPet.sex}
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

export default connect(null, { updatePet })(EditPet);