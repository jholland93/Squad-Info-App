import React from "react";
import axios from "axios";
import userIcon from '../images/userIcon.png' 

export class EditPlayer extends React.Component {
  constructor() {
    super();

    //bind all events
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
    this.onChangeNationality = this.onChangeNationality.bind(this);
    this.onChangePosition = this.onChangePosition.bind(this);
    this.onChangeSquadNumber = this.onChangeSquadNumber.bind(this);
    this.onChangeGoals = this.onChangeGoals.bind(this);
    this.onChangeAssists = this.onChangeAssists.bind(this);

    this.state = {
      
      Name: " ",
      DateOfBirth: " ",
      Nationality: " ",
      Position: " ",
      SquadNumber: " ",
      Goals: 0,
      Assists: 0,
    };
  } //end constructor

  //pull id parameter out
  componentDidMount() {
    console.log(this.props.match.params.id);

    axios
      .get("http://localhost:4000/api/players/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          _id: response.data._id,
         Name: response.data.name,
          DateOfBirth: response.data.dateOfBirth,
          Nationality: response.data.nationality,
          Position: response.data.position,
          SquadNumber: response.data.squadNumber,
          Goals: response.data.goals,
          Assists: response.data.assists,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //onChange functions for updating state
  onChangeName(e) {
    this.setState({
      Name: e.target.value,
    });
  }


  onChangeDateOfBirth(e) {
    this.setState({
      DateOfBirth: e.target.value,
    });
  }

  onChangeNationality(e) {
    this.setState({
      Nationality: e.target.value,
    });
  }

  onChangePosition(e) {
    this.setState({
      Position: e.target.value,
    });
  }

  onChangeSquadNumber(e) {
    this.setState({
      SquadNumber: e.target.value,
    });
  }

  onChangeGoals(e) {
    this.setState({
      Goals: e.target.value,
    });
  }
  onChangeAssists(e) {
    this.setState({
      Assists: e.target.value,
    });
  }

  //submit button
  onSubmit(e) {
    //stop calling of functioon multiple times
    e.preventDefault();
    alert(
      "Player: " +
        this.state.Name +
        " " +

        this.state.DateOfBirth +
        " " +
        this.state.Nationality +
        " " +
        this.state.Position +
        " " +
        this.state.SquadNumber +
        " " +
        this.state.Goals +
        " " +
        this.state.Assists
    );

    const newPlayer = {
    name: this.state.Name,
      dateOfBirth: this.state.DateOfBirth,
      nationality: this.state.Nationality,
      position: this.state.Position,
      squadNumber: this.state.SquadNumber,
      goals: this.state.Goals,
      assists: this.state.Assists,
      _id: this.state._id,
    };

    axios
      .put("http://localhost:4000/api/players/" + this.state._id, newPlayer)
      .then((res) => {
        console.log(res.data);
      })
      .catch();
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.Name}
              onChange={this.onChangeName}
            ></input>
          </div>


          <div className="form-group">
            <label>Date Of Birth: </label>
            <input
              type="date"
              className="form-control"
              value={this.state.DateOfBirth}
              onChange={this.onChangeDateOfBirth}
            ></input>
          </div>

          <div className="form-group">
            <label>Nationality: </label>
            <select
              name="nationality"
              className="form-control"
              value={this.state.Nationality}
              onChange={this.onChangeNationality}
            >
              <option value="">-- select one --</option>
              <option value="Afghan">Afghan</option>
              <option value="Albanian">Albanian</option>
              <option value="Algerian">Algerian</option>
              <option value="American">American</option>
              <option value="Andorran">Andorran</option>
              <option value="Angolan">Angolan</option>
              <option value="Antiguans">Antiguans</option>
              <option value="Argentinean">Argentinean</option>
              <option value="Armenian">Armenian</option>
              <option value="Australian">Australian</option>
              <option value="Austrian">Austrian</option>
              <option value="Azerbaijani">Azerbaijani</option>
              <option value="Bahamian">Bahamian</option>
              <option value="Bahraini">Bahraini</option>
              <option value="Bangladeshi">Bangladeshi</option>
              <option value="Barbadian">Barbadian</option>
              <option value="Barbudans">Barbudans</option>
              <option value="Batswana">Batswana</option>
              <option value="Belarusian">Belarusian</option>
              <option value="Belgian">Belgian</option>
              <option value="Belizean">Belizean</option>
              <option value="Beninese">Beninese</option>
              <option value="Bhutanese">Bhutanese</option>
              <option value="Bolivian">Bolivian</option>
              <option value="Bosnian">Bosnian</option>
              <option value="Brazilian">Brazilian</option>
              <option value="British">British</option>
              <option value="Bruneian">Bruneian</option>
              <option value="Bulgarian">Bulgarian</option>
              <option value="Burkinabe">Burkinabe</option>
              <option value="Burmese">Burmese</option>
              <option value="Burundian">Burundian</option>
              <option value="Cambodian">Cambodian</option>
              <option value="Cameroonian">Cameroonian</option>
              <option value="Canadian">Canadian</option>
              <option value="Cape Verdean">Cape Verdean</option>
              <option value="Central African">Central African</option>
              <option value="Chadian">Chadian</option>
              <option value="Chilean">Chilean</option>
              <option value="Chinese">Chinese</option>
              <option value="Colombian">Colombian</option>
              <option value="Comoran">Comoran</option>
              <option value="Congolese">Congolese</option>
              <option value="Costa Rican">Costa Rican</option>
              <option value="Croatian">Croatian</option>
              <option value="Cuban">Cuban</option>
              <option value="Cypriot">Cypriot</option>
              <option value="Czech">Czech</option>
              <option value="Danish">Danish</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominican">Dominican</option>
              <option value="Dutch">Dutch</option>
              <option value="East timorese">East Timorese</option>
              <option value="Ecuadorean">Ecuadorean</option>
              <option value="Egyptian">Egyptian</option>
              <option value="Emirian">Emirian</option>
              <option value="Equatorial Guinean">Equatorial Guinean</option>
              <option value="Eritrean">Eritrean</option>
              <option value="Estonian">Estonian</option>
              <option value="Ethiopian">Ethiopian</option>
              <option value="Fijian">Fijian</option>
              <option value="Filipino">Filipino</option>
              <option value="Finnish">Finnish</option>
              <option value="French">French</option>
              <option value="Fabonese">Gabonese</option>
              <option value="Gambian">Gambian</option>
              <option value="Georgian">Georgian</option>
              <option value="German">German</option>
              <option value="Ghanaian">Ghanaian</option>
              <option value="Greek">Greek</option>
              <option value="Grenadian">Grenadian</option>
              <option value="Guatemalan">Guatemalan</option>
              <option value="Guinea-bissauan">Guinea-Bissauan</option>
              <option value="Guinean">Guinean</option>
              <option value="Guyanese">Guyanese</option>
              <option value="Gaitian">Haitian</option>
              <option value="Herzegovinian">Herzegovinian</option>
              <option value="Honduran">Honduran</option>
              <option value="Hungarian">Hungarian</option>
              <option value="Icelander">Icelander</option>
              <option value="Indian">Indian</option>
              <option value="Indonesian">Indonesian</option>
              <option value="Iranian">Iranian</option>
              <option value="Iraqi">Iraqi</option>
              <option value="Irish">Irish</option>
              <option value="Israeli">Israeli</option>
              <option value="Italian">Italian</option>
              <option value="Ivorian">Ivorian</option>
              <option value="Jamaican">Jamaican</option>
              <option value="Japanese">Japanese</option>
              <option value="Jordanian">Jordanian</option>
              <option value="Kazakhstani">Kazakhstani</option>
              <option value="Kenyan">Kenyan</option>
              <option value="Kittian and Nevisian">Kittian and Nevisian</option>
              <option value="Kuwaiti">Kuwaiti</option>
              <option value="Kyrgyz">Kyrgyz</option>
              <option value="Laotian">Laotian</option>
              <option value="Latvian">Latvian</option>
              <option value="Lebanese">Lebanese</option>
              <option value="Liberian">Liberian</option>
              <option value="Libyan">Libyan</option>
              <option value="Liechtensteiner">Liechtensteiner</option>
              <option value="Lithuanian">Lithuanian</option>
              <option value="Luxembourger">Luxembourger</option>
              <option value="Macedonian">Macedonian</option>
              <option value="Malagasy">Malagasy</option>
              <option value="Malawian">Malawian</option>
              <option value="Malaysian">Malaysian</option>
              <option value="Maldivan">Maldivan</option>
              <option value="Malian">Malian</option>
              <option value="Maltese">Maltese</option>
              <option value="Marshallese">Marshallese</option>
              <option value="Mauritanian">Mauritanian</option>
              <option value="Mauritian">Mauritian</option>
              <option value="Mexican">Mexican</option>
              <option value="Micronesian">Micronesian</option>
              <option value="Moldovan">Moldovan</option>
              <option value="Monacan">Monacan</option>
              <option value="Mongolian">Mongolian</option>
              <option value="Moroccan">Moroccan</option>
              <option value="Mosotho">Mosotho</option>
              <option value="Motswana">Motswana</option>
              <option value="Mozambican">Mozambican</option>
              <option value="Namibian">Namibian</option>
              <option value="Nauruan">Nauruan</option>
              <option value="Nepalese">Nepalese</option>
              <option value="New Zealander">New Zealander</option>
              <option value="Ni-Vanuatu">Ni-Vanuatu</option>
              <option value="Nicaraguan">Nicaraguan</option>
              <option value="Nigerien">Nigerien</option>
              <option value="North Korean">North Korean</option>
              <option value="Northern Irish">Northern Irish</option>
              <option value="Norwegian">Norwegian</option>
              <option value="Omani">Omani</option>
              <option value="Pakistani">Pakistani</option>
              <option value="Palauan">Palauan</option>
              <option value="Panamanian">Panamanian</option>
              <option value="Papua New Guinean">Papua New Guinean</option>
              <option value="Paraguayan">Paraguayan</option>
              <option value="Peruvian">Peruvian</option>
              <option value="Polish">Polish</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Qatari">Qatari</option>
              <option value="Romanian">Romanian</option>
              <option value="Russian">Russian</option>
              <option value="Rwandan">Rwandan</option>
              <option value="Saint Lucian">Saint Lucian</option>
              <option value="Salvadoran">Salvadoran</option>
              <option value="Samoan">Samoan</option>
              <option value="San Marinese">San Marinese</option>
              <option value="Sao Tomean">Sao Tomean</option>
              <option value="Saudi">Saudi</option>
              <option value="Scottish">Scottish</option>
              <option value="Senegalese">Senegalese</option>
              <option value="Serbian">Serbian</option>
              <option value="Seychellois">Seychellois</option>
              <option value="Sierra Leonean">Sierra Leonean</option>
              <option value="Singaporean">Singaporean</option>
              <option value="Slovakian">Slovakian</option>
              <option value="Slovenian">Slovenian</option>
              <option value="Solomon Islander">Solomon Islander</option>
              <option value="Somali">Somali</option>
              <option value="South African">South African</option>
              <option value="South Korean">South Korean</option>
              <option value="Spanish">Spanish</option>
              <option value="Sri Lankan">Sri Lankan</option>
              <option value="Sudanese">Sudanese</option>
              <option value="Surinamer">Surinamer</option>
              <option value="Swazi">Swazi</option>
              <option value="Swedish">Swedish</option>
              <option value="Swiss">Swiss</option>
              <option value="Syrian">Syrian</option>
              <option value="Taiwanese">Taiwanese</option>
              <option value="Tajik">Tajik</option>
              <option value="Tanzanian">Tanzanian</option>
              <option value="Thai">Thai</option>
              <option value="Togolese">Togolese</option>
              <option value="Tongan">Tongan</option>
              <option value="Trinidadian or Tobagonian">
                Trinidadian or Tobagonian
              </option>
              <option value="Tunisian">Tunisian</option>
              <option value="Turkish">Turkish</option>
              <option value="Tuvaluan">Tuvaluan</option>
              <option value="Ugandan">Ugandan</option>
              <option value="Ukrainian">Ukrainian</option>
              <option value="Uruguayan">Uruguayan</option>
              <option value="Uzbekistani">Uzbekistani</option>
              <option value="Venezuelan">Venezuelan</option>
              <option value="Vietnamese">Vietnamese</option>
              <option value="Welsh">Welsh</option>
              <option value="Yemenite">Yemenite</option>
              <option value="Zambian">Zambian</option>
              <option value="Zimbabwean">Zimbabwean</option>
            </select>
          </div>

          <div className="form-group">
            <label>Position: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.Position}
              onChange={this.onChangePosition}
            ></input>
          </div>

          <div className="form-group">
            <label>Squad Number: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.SquadNumber}
              onChange={this.onChangeSquadNumber}
            ></input>
          </div>

          <div className="form-group">
            <label>Goals: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.Goals}
              onChange={this.onChangeGoals}
            ></input>
          </div>

          <div className="form-group">
            <label>Assists: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.Assists}
              onChange={this.onChangeAssists}
            ></input>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Update"
              className="btn btn-primary"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
