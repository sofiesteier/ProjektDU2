
// G
// CODE According to specification
function click_filter_element (event) {

  /*
    ARGUMENTS
      event: event-object created when user clicks on one of the filter elements.

    SIDE-EFFECTS
      Marks the clicked filter element as selected / unselected.
      Since a filter element will have changed after the click, the list of
      programmes must be updated.

      Attention VG
        Careful with the propagation of the click-event

    NO RETURN VALUE

  */
  event.target.classList.toggle("selected");
  update_programmes();
}


// G
// CODE according to specification
function create_filter_element (data) {

  /*
    ARGUMENTS
      data: object that contains the following keys:
        class (string): a class-name given to the created element
        textContent (string): the text that the element contains
        parent (reference to HTML-element): the HTML-element that is the parent of the created element

      No control of arguments.

    SIDE-EFFECTS
      Creates a new dom-element with the tag "li".
      Gives the new dom-element the class contained in data.class
      Appends the new dom-element to the element referenced in data.parent
      Sets the text content of the new dom-element to data.textContent
      Sets the function click_filter_element as a listener to "click" for the new dom-element

    RETURN VALUE
      Returns a reference to the new dom-element
  */

  parent = data.parent;
  klass = data.class;
  textContent = data.textContent;

  const dom_element = document.createElement("li");
  dom_element.classList.add("selected");
  dom_element.textContent = textContent;
  dom_element.addEventListener("click", click_filter_element);
  parent.appendChild(dom_element);

  return dom_element;


}


// VG
// CODE according to specification
function add_group_toggling (filter_container_dom) {

  /*
    ARGUMENT
      filter_container_dom: reference to a HTML-element that contains a set of fliter_elements
            Exempel: the <ul> that contains the filters for Language.

    SIDE EFFECTS
      The function makes sure that when the user clicks on filter_container_dom, all the
      filter_elements that it contains are selected / unselected.
      Since some filter elements will have changed after the click, the list of
      programmes must be updated.

    NO RETURN VALUE

  */
  
}


// VG
// CODE according to specifications
function toggle_cities (event) {

  /*

    ARGUMENTS
      This function does not take any arguments

    SIDE EFFECTS
      This function checks the state of the first city-filter-element (Madrid).
      If it is selected then it de-selects ALL city-filter-elements
      If it is de-selected then it selects ALL city-filter-elements 

    NO RETURN VALUE

  */

}


// WRITE SPECIFICATION
// ATTENTION: You need to write the specification of all three functions:
//            create_countries_cities_filters, create_country and create_city
function create_countries_cities_filters () {
  
  /*
  create_countries_cities_filters:
  ARGUMENT:
    Den tar inte emot n??got argument.

  SIDEEFFECTS:
    Skapar de olika filterknapparna med l??nder och deras st??der.

  RETURN:
    Inget.

  create_country:
    ARGUMENT:
    Tar emot ett objekt (country) fr??n arrayen COUNTRIES som inneh??ller f??ljande nycklarna:
      id: Landets v??rde i form av ett id-nummer. 
      name: en str??ng med Landets namn. 
    Ingen kontroll av argumentet beh??ver g??ras.

  SIDE EFFECTS:
    Skapar ett nytt dom_element f??r varje land och appendar det och ger det en text-content och en klass f??r den befintliga css-koden. 
    Sedan filtreras varje city som har ett "country" ID som matchar med landet. 
    Sedan anropas funktionen create_city f??r varje objekt i arrayen d??r varje city har blivit filtrerad. 

  RETURN:
    Inget. 

  create_city:
  ARGUMENT:
    Tar emot ett objekt (city) fr??n arrayen CITIES som inneh??ller f??ljande nycklar:
      id: Stadens v??rde i form av ett id-nummer.
      name: en str??ng med namnet p?? staden.
      countryID: Id-nummer som visar i vilket land staden befinner sig i. 
    Ingen kontroll av argumentet beh??ver g??ras. 

  SIDE EFFECTS:
    Skapar ett nytt dom_element f??r varje stad. 
    L??gger till det i det nyskapande landet och ger det en klass s?? det kommer att v??ljas som standard. 
    Den f??r ??ven en text-content med namnet p?? staden, den lagrar stads id:et i dom_elementets dataset.
    
  RETURN
    Inget.
  */

  function create_country (country) {
    const dom = document.createElement("div");
    dom.classList.add("country");
    dom.classList.add("filter_container");
    dom.id = "country_" + country.id;
    document.querySelector("#country_filter > ul").append(dom);
    
    dom.innerHTML = `
      <h1>${country.name}</h1>
      <ul class="filter_list"></ul>
    `;
    
    const cities = array_filter(CITIES, test_function);
    function test_function (city) {
      return city.countryID === country.id;
    }

    array_each(cities, create_city);
  }
  function create_city (city) {

    const dom = create_filter_element({
      parent: document.querySelector(`#country_${city.countryID} > ul`),
      class: "selected",
      textContent: city.name,
    });
    dom.dataset.id = city.id;

  }

  array_each(COUNTRIES, create_country);
}


// G
// ABSTRACT AND WRITE SPECIFICATION
//    As you can see, all three functions below do basically the same thing.
//    Abstract them to one function, and write the specification of that function


function create_levels_subjects_languages_filters (array, type) {
  //Specifikation f??r den sammanst??llda funktionen.
    //ARGUMENTS:
    //Funktionen tar emot tv?? argumnet. 
    // En array som inneh??ller objekten av relevant information till filter typerna (levels, subjects, launguages).

    //SIDE-EFFECTS:
    // Funktionen skapar ett li element f??r varje objekt i arrayen genom att anv??nda create_filter_element funktionen inuti funktionen create.
    // Type parametern anv??nds f??r dynamiskt s??tta in en str??ng som motsvarar r??tt filter.
    // Sedan f??r den klassen "selected" och en textcontent med objektets namn samt ett dataset id av objektets id. 

    //RETURN:
  function create (objekt) {
    const dom = create_filter_element ({
      parent: document.querySelector(`#${type}_filter > ul`),
      class: "selected",
      textContent: objekt.name,
    }); 
    dom.dataset.id = objekt.id;
  }

  array_each(array, create)
}

//Specifikation f??r den sammanst??llda funktionen.
  //ARGUMENT:
  //Funktionen tar emot 

  //SIDE-EFFECTS:

  //RETURN:
function create_levels_subjects_languages_filters (type, array) {
  function create (objekt) {
    const dom = create_filter_element ({
      parent: document.querySelector(`#${type}_filter > ul`),
      class: "selected",
      textContent: objekt.name,
    }); 
    dom.dataset.id = objekt.id;
  }

  array_each(array, create)
}


// G / VG (see details in specification)
// CODE according to specifications
function create_programme (programme) {
  
  /*

    ARGUMENT
      programme (object): One of the objects from PROGRAMMES

    SIDE-EFFECTS
      This function creates the HTML-element that contains all the information
      about one programme, as seen in the video / image.
      
      VG: The background image is a random image from among the images of the city
          in which the programme is (via the university)
      G:  No background image required.


      VG: The "see more" interaction must be included.
      G:  The "see more" element is not required. And that information needs not be in place.

    NO RETURN VALUE

  */  
  const p_uniID = programme.universityID;
  const p_cityID = UNIVERSITIES[p_uniID].cityID;
  const p_countryID = CITIES[p_cityID].countryID;
  const p_levelID = programme.levelID - 1;
  const p_subjectID = programme.subjectID; 
  const p_languageID = programme.languageID;

  let new_programme_dom = document.createElement("li");
  new_programme_dom.classList.add("programme");
  new_programme_dom.setAttribute("id", `programme${programme.id}`);

  new_programme_dom.innerHTML = `
  <div class="top">
    <h2>${programme.name}</h2>
    <p>${UNIVERSITIES[p_uniID].name}</p>
    <p>${CITIES[p_cityID].name}, ${COUNTRIES[p_countryID].name}</p>
    <p>${LEVELS[p_levelID].name}, ${SUBJECTS[p_subjectID].name}, ${LANGUAGES[p_languageID].name}</p>
  </div>`

  document.querySelector("#programmes > ul").appendChild(new_programme_dom);
}
array_each(PROGRAMMES, create_programme);


// G
// CODE according to the specification
function update_programmes () {

  /*
      NO ARGUMENTS

      SIDE EFFECTS
        This function updates the programmes shown on the page according to
        the current filter status (which filter elements are selected / unselected).
        It uses the function read_filters to know which programmes need to be included.

        VG: The top images (header) need to be updated here

      NO RETURN VALUE

  */
  const programme_container = document.querySelector("#programmes > ul");
  const programme_p = document.querySelector("p");
  programme_container.innerHTML = "";

  const right_programmes = read_filters();
  array_each(right_programmes, create_programme);

  if (right_programmes.length > 0) {
    programme_p.textContent = "";
  } else {
    programme_p.textContent = "Inga program uppfyller nuvarande filter"
  };
  
}


// G
// WRITE SPECIFICATION
// You must understand how this function works. There will be questions about it
// in the code review (kodredovisning)

// Optional VG: Which parts of the function's code could be abstracted?
//              Implement it

// ARGUMENTS:
  // Tar inte emot n??gra argument.

// SIDE-EFFECTS:
  // Funktionen kontrollerar vilka filter_element som ??r selected.
  // Den kontrollerar/filtrerar st??derna som finns, vilka univeristet som finns i st??derna och vilka program som finns i universiteten.
  // Sedan kontrollerar/filtreras niv??n, spr??ket och ??mnet i det valde programmet som finns i universiteten.
  // Sedan kontrollerar funktionen om s??kf??ltet inte ??r tomt.
  // ??r s??kf??ltet inte tomt, filtreras programmen och ser om ordet som ??r skrivet i s??kf??ltet matchar. Matchar ordet kommer informationen att visas.
  // Matchar inte ordet h??nder inget. 
  
// RETURN:
  // Funktionen returnerar en array med det valda programmet som matchar de filter_element som ??r selected.
function read_filters () {
  
  const city_selected_dom = document.querySelectorAll("#country_filter li.selected");

  const city_id_selected = [];
  function callback_add_cityID (dom_element) {
    const id_as_integer = parseInt(dom_element.dataset.id);
    city_id_selected.push(id_as_integer);
  }
  array_each(city_selected_dom, callback_add_cityID);

  const universities = [];
  for (let i = 0; i < city_id_selected.length; i++) {
    const city_id = city_id_selected[i];
    for (let ii = 0; ii < UNIVERSITIES.length; ii++) {
      const university = UNIVERSITIES[ii];
      if (university.cityID === city_id) {
        universities.push(university);
      }
    }
  }

  let programmes = [];
  function callback_add_programmes (university) {
    const university_id = university.id;
    for (let i = 0; i < PROGRAMMES.length; i++) {
      const programme = PROGRAMMES[i];
      if (programme.universityID === university_id) {
        programmes.push(programme);
      }
    }
  }
  array_each(universities, callback_add_programmes);



  const level_selected_dom = document.querySelectorAll("#level_filter li.selected");
  const level_id_selected = [];
  function callback_add_levelID (dom_element) {
    const id_as_integer = parseInt(dom_element.dataset.id);
    level_id_selected.push(id_as_integer);
  }
  array_each(level_selected_dom, callback_add_levelID);

  function test_function_level (programme) {
    return level_id_selected.includes(programme.levelID);
  }
  programmes = array_filter(programmes, test_function_level);



  const language_selected_dom = document.querySelectorAll("#language_filter li.selected");
  const language_id_selected = [];
  function callback_add_languageID (dom_element) {
    const id_as_integer = parseInt(dom_element.dataset.id);
    language_id_selected.push(id_as_integer);
  }
  array_each(language_selected_dom, callback_add_languageID);



  function test_function_language (programme) {
    return language_id_selected.includes(programme.languageID);
  }
  programmes = array_filter(programmes, test_function_language);



  const subject_selected_dom = document.querySelectorAll("#subject_filter li.selected");
  const subject_id_selected = [];
  function callback_add_subjectID (dom_element) {
    const id_as_integer = parseInt(dom_element.dataset.id);
    subject_id_selected.push(id_as_integer);
  }
  array_each(subject_selected_dom, callback_add_subjectID);



  function test_function_subject (programme) {
    return subject_id_selected.includes(programme.subjectID);
  }
  programmes = array_filter(programmes, test_function_subject);



  const search_string = document.querySelector("#search_field input").value;
  if (search_string !== "") {
    function test_function (programme) {
      return programme.name.includes(search_string);
    }
    programmes = array_filter(programmes, test_function);
  }

  return programmes;
}
