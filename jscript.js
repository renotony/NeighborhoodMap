// viewmodel for school locations
var viewModel = {
  // List of school locations
  schools: [
    { schoolName: "Academy of Arts Careers and Technology", schoolLevel: "High School", schoolAddress: "380 Edison Way", schoolCity: "Reno", schoolState: "NV", schoolZip: "89502", location: {lat: 39.506851,  lng: -119.754551}},
    { schoolName: "Allen", schoolLevel: "Elementary School", schoolAddress: "5155 McGuffy Rd", schoolCity: "Sun Valley", schoolState: "NV", schoolZip: "89433", location: {lat: 39.579638,  lng: -119.786274}},
    { schoolName: "Anderson", schoolLevel: "Elementary School", schoolAddress: "1055 Berrum Ln", schoolCity: "Reno", schoolState: "NV", schoolZip: "89509", location: {lat: 39.494335,  lng: -119.80959}},
    { schoolName: "Beasley", schoolLevel: "Elementary School", schoolAddress: "2100 Canyon Pkwy", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89436", location: {lat: 39.580732,  lng: -119.707118}},
    { schoolName: "Beck", schoolLevel: "Elementary School", schoolAddress: "1900 Sharon Way", schoolCity: "Reno", schoolState: "NV", schoolZip: "89509", location: {lat: 39.504513,  lng: -119.826149}},
    { schoolName: "Bennett", schoolLevel: "Elementary School", schoolAddress: "5900 Sidehill Dr", schoolCity: "Sun Valley", schoolState: "NV", schoolZip: "89433", location: {lat: 39.607845,  lng: -119.783912}},
    { schoolName: "Billinghurst", schoolLevel: "Middle School", schoolAddress: "6685 Chesterfield Ln", schoolCity: "Reno", schoolState: "NV", schoolZip: "89523", location: {lat: 39.52236,  lng: -119.893756}},
    { schoolName: "Booth", schoolLevel: "Elementary School", schoolAddress: "1450 Stewart St", schoolCity: "Reno", schoolState: "NV", schoolZip: "89502", location: {lat: 39.520756,  lng: -119.794594}},
    { schoolName: "Brown", schoolLevel: "Elementary School", schoolAddress: "13815 Spelling Court", schoolCity: "Reno", schoolState: "NV", schoolZip: "89511", location: {lat: 39.40337,  lng: -119.726183}},
    { schoolName: "Cannan", schoolLevel: "Elementary School", schoolAddress: "2450 Cannan St", schoolCity: "Reno", schoolState: "NV", schoolZip: "89512", location: {lat: 39.55015,  lng: -119.784738}},
    { schoolName: "Caughlin Ranch", schoolLevel: "Elementary School", schoolAddress: "4885 Village Green Pkwy", schoolCity: "Reno", schoolState: "NV", schoolZip: "89519", location: {lat: 39.482469,  lng: -119.857376}},
    { schoolName: "Clayton", schoolLevel: "Middle School", schoolAddress: "1295 Wyoming Ave", schoolCity: "Reno", schoolState: "NV", schoolZip: "89503", location: {lat: 39.536677,  lng: -119.847837}},
    { schoolName: "Cold Springs", schoolLevel: "Middle School", schoolAddress: "18235 Cody Court", schoolCity: "Reno", schoolState: "NV", schoolZip: "89508", location: {lat: 39.692529,  lng: -119.962734}},
    { schoolName: "Corbett", schoolLevel: "Elementary School", schoolAddress: "1901 Villanova Dr", schoolCity: "Reno", schoolState: "NV", schoolZip: "89502", location: {lat: 39.509555,  lng: -119.784674}},
    { schoolName: "Damonte Ranch", schoolLevel: "High School", schoolAddress: "10500 Rio Wrangler Pkwy", schoolCity: "Reno", schoolState: "NV", schoolZip: "89521", location: {lat: 39.424327,  lng: -119.714212}},
    { schoolName: "Depoali", schoolLevel: "Middle School", schoolAddress: "9300 Wilbur May Pkwy", schoolCity: "Reno", schoolState: "NV", schoolZip: "89521", location: {lat: 39.448336,  lng: -119.735469}},
    { schoolName: "Desert Heights", schoolLevel: "Elementary School", schoolAddress: "13948 Mt Bismark St", schoolCity: "Reno", schoolState: "NV", schoolZip: "89506", location: {lat: 39.653645,  lng: -119.882526}},
    { schoolName: "Diedrichsen", schoolLevel: "Elementary School", schoolAddress: "1735 Del Rosa Way", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89434", location: {lat: 39.552123,  lng: -119.711377}},
    { schoolName: "Dilworth", schoolLevel: "Middle School", schoolAddress: "255 Prater Way", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89431", location: {lat: 39.541118,  lng: -119.745591}},
    { schoolName: "Dodson", schoolLevel: "Elementary School", schoolAddress: "4355 Houston", schoolCity: "Reno", schoolState: "NV", schoolZip: "89502", location: {lat: 39.489796,  lng: -119.750951}},
    { schoolName: "Donner Springs", schoolLevel: "Elementary School", schoolAddress: "5125 Escuela Way", schoolCity: "Reno", schoolState: "NV", schoolZip: "89502", location: {lat: 39.476336,  lng: -119.744354}},
    { schoolName: "Double Diamond", schoolLevel: "Elementary School", schoolAddress: "S Meadows Pkwy", schoolCity: "Reno", schoolState: "NV", schoolZip: "89521", location: {lat: 39.442952,  lng: -119.746423}},
    { schoolName: "Drake", schoolLevel: "Elementary School", schoolAddress: "2755 4th St", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89431", location: {lat: 39.555005,  lng: -119.749085}},
    { schoolName: "Duncan", schoolLevel: "Elementary School", schoolAddress: "1200 Montello St", schoolCity: "Reno", schoolState: "NV", schoolZip: "89512", location: {lat: 39.540932,  lng: -119.794352}},
    { schoolName: "Dunn", schoolLevel: "Elementary School", schoolAddress: "1135 OCallaghan", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89434", location: {lat: 39.547435,  lng: -119.725855}},
    { schoolName: "Elmcrest", schoolLevel: "Elementary School", schoolAddress: "855 McDonald Dr", schoolCity: "Reno", schoolState: "NV", schoolZip: "89503", location: {lat: 39.532905,  lng: -119.842365}},
    { schoolName: "Galena", schoolLevel: "High School", schoolAddress: "3600 Butch Cassidy Way", schoolCity: "Reno", schoolState: "NV", schoolZip: "89511", location: {lat: 39.387824,  lng: -119.776309}},
    { schoolName: "Gerlach K-12", schoolLevel: "High School", schoolAddress: "555 E Sunset Blvd", schoolCity: "Gerlach", schoolState: "NV", schoolZip: "89412", location: {lat: 40.653748,  lng: -119.354243}},
    { schoolName: "Gomes", schoolLevel: "Elementary School", schoolAddress: "3870 Limkin St", schoolCity: "Reno", schoolState: "NV", schoolZip: "89508", location: {lat: 39.680111,  lng: -119.967845}},
    { schoolName: "Gomm", schoolLevel: "Elementary School", schoolAddress: "4000 Mayberry Dr", schoolCity: "Reno", schoolState: "NV", schoolZip: "89509", location: {lat: 39.507034,  lng: -119.860414}},
    { schoolName: "Greenbrae", schoolLevel: "Elementary School", schoolAddress: "1840 4th St", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89431", location: {lat: 39.548498,  lng: -119.747486}},
    { schoolName: "Hall", schoolLevel: "Elementary School", schoolAddress: "185 Shelby Dr", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89436", location: {lat: 39.63447,  lng: -119.73436}},
    { schoolName: "Hidden Valley", schoolLevel: "Elementary School", schoolAddress: "2115 Alphabet Dr", schoolCity: "Reno", schoolState: "NV", schoolZip: "89502", location: {lat: 39.500076,  lng: -119.716816}},
    { schoolName: "Huffaker", schoolLevel: "Elementary School", schoolAddress: "980 Wheatland Rd", schoolCity: "Reno", schoolState: "NV", schoolZip: "89511", location: {lat: 39.469987,  lng: -119.804595}},
    { schoolName: "Hug", schoolLevel: "High School", schoolAddress: "2880 Sutro St", schoolCity: "Reno", schoolState: "NV", schoolZip: "89512", location: {lat: 39.55516,  lng: -119.797275}},
    { schoolName: "Hunsberger", schoolLevel: "Elementary School", schoolAddress: "2505 Crossbow Court", schoolCity: "Reno", schoolState: "NV", schoolZip: "89511", location: {lat: 39.406423,  lng: -119.800885}},
    { schoolName: "Hunter Lake", schoolLevel: "Elementary School", schoolAddress: "909 Hunter Lake Dr", schoolCity: "Reno", schoolState: "NV", schoolZip: "89509", location: {lat: 39.511562,  lng: -119.836598}},
    { schoolName: "Incline ES", schoolLevel: "Elementary School", schoolAddress: "915 Northwood Blvd", schoolCity: "Incline Village", schoolState: "NV", schoolZip: "89451", location: {lat: 39.252008,  lng: -119.950253}},
    { schoolName: "Incline HS", schoolLevel: "High School", schoolAddress: "499 Village Blvd", schoolCity: "Incline Village", schoolState: "NV", schoolZip: "89451", location: {lat: 39.255136,  lng: -119.951499}},
    { schoolName: "Incline MS", schoolLevel: "Middle School", schoolAddress: "931 Southwood Blvd", schoolCity: "Incline Village", schoolState: "NV", schoolZip: "89451", location: {lat: 39.24682,  lng: -119.946799}},
    { schoolName: "Juniper", schoolLevel: "Elementary School", schoolAddress: "225 Queen Way", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89431", location: {lat: 39.560928,  lng: -119.745292}},
    { schoolName: "Lemelson", schoolLevel: "Elementary School", schoolAddress: "2001 Soaring Eagle Dr", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89512", location: {lat: 39.546169,  lng: -119.809126}},
    { schoolName: "Lemmon Valley", schoolLevel: "Elementary School", schoolAddress: "255 West Patrician Dr", schoolCity: "Reno", schoolState: "NV", schoolZip: "89506", location: {lat: 39.645201,  lng: -119.838529}},
    { schoolName: "Lenz", schoolLevel: "Elementary School", schoolAddress: "2500 Homeland Dr", schoolCity: "Reno", schoolState: "NV", schoolZip: "89511", location: {lat: 39.427475,  lng: -119.775728}},
    { schoolName: "Lincoln Park", schoolLevel: "Elementary School", schoolAddress: "201 Lincoln Way", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89431", location: {lat: 39.53806,  lng: -119.745858}},
    { schoolName: "Loder", schoolLevel: "Elementary School", schoolAddress: "600 Apple St", schoolCity: "Reno", schoolState: "NV", schoolZip: "89502", location: {lat: 39.503384,  lng: -119.792623}},
    { schoolName: "Mathews", schoolLevel: "Elementary School", schoolAddress: "2750 Elementary Dr", schoolCity: "Reno", schoolState: "NV", schoolZip: "89512", location: {lat: 39.541768,  lng: -119.778955}},
    { schoolName: "Maxwell", schoolLevel: "Elementary School", schoolAddress: "2300 North Rock Blvd", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89431", location: {lat: 39.551921,  lng: -119.76078}},
    { schoolName: "McQueen", schoolLevel: "High School", schoolAddress: "6055 Lancer St", schoolCity: "Reno", schoolState: "NV", schoolZip: "89523", location: {lat: 39.53532,  lng: -119.884052}},
    { schoolName: "Melton", schoolLevel: "Elementary School", schoolAddress: "6575 Archimedes Ln", schoolCity: "Reno", schoolState: "NV", schoolZip: "89523", location: {lat: 39.545739,  lng: -119.893498}},
    { schoolName: "Mendive", schoolLevel: "Middle School", schoolAddress: "1900 Whitewood Dr", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89434", location: {lat: 39.551821,  lng: -119.707036}},
    { schoolName: "Mitchell", schoolLevel: "Elementary School", schoolAddress: "1216 Prater Way", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89431", location: {lat: 39.539696,  lng: -119.75884}},
    { schoolName: "Moss", schoolLevel: "Elementary School", schoolAddress: "2200 Primio Way", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89434", location: {lat: 39.55058,  lng: -119.697388}},
    { schoolName: "Mount Rose", schoolLevel: "Elementary School", schoolAddress: "915 Lander St", schoolCity: "Reno", schoolState: "NV", schoolZip: "89509", location: {lat: 39.515372,  lng: -119.816215}},
    { schoolName: "Natchez", schoolLevel: "Elementary School", schoolAddress: "POBox 130", schoolCity: "Wadsworth", schoolState: "NV", schoolZip: "89442", location: {lat: 39.633801,  lng: -119.285448}},
    { schoolName: "North Valleys", schoolLevel: "High School", schoolAddress: "1470 E Golden Valley Rd", schoolCity: "Reno", schoolState: "NV", schoolZip: "89506", location: {lat: 39.605844,  lng: -119.822957}},
    { schoolName: "O'Brien", schoolLevel: "Middle School", schoolAddress: "10500 Stead Blvd", schoolCity: "Reno", schoolState: "NV", schoolZip: "89506", location: {lat: 39.624114,  lng: -119.881218}},
    { schoolName: "Palmer", schoolLevel: "Elementary School", schoolAddress: "5890 Klondike", schoolCity: "Sun Valley", schoolState: "NV", schoolZip: "89434", location: {lat: 39.606398,  lng: -119.760267}},
    { schoolName: "Peavine", schoolLevel: "Elementary School", schoolAddress: "1601 Grandview Ave", schoolCity: "Reno", schoolState: "NV", schoolZip: "89503", location: {lat: 39.540676,  lng: -119.833472}},
    { schoolName: "Picollo", schoolLevel: "Middle School", schoolAddress: "900 Foothill Rd", schoolCity: "Reno", schoolState: "NV", schoolZip: "89511", location: {lat: 39.431816,  lng: -119.774529}},
    { schoolName: "Pine", schoolLevel: "Middle School", schoolAddress: "4800 Neil Rd", schoolCity: "Reno", schoolState: "NV", schoolZip: "89502", location: {lat: 39.479996,  lng: -119.781102}},
    { schoolName: "Pleasant Valley", schoolLevel: "Elementary School", schoolAddress: "405 Surrey Dr", schoolCity: "Reno", schoolState: "NV", schoolZip: "89511", location: {lat: 39.351788,  lng: -119.780963}},
    { schoolName: "Reed", schoolLevel: "High School", schoolAddress: "1350 Baring Blvd", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89434", location: {lat: 39.557807,  lng: -119.720116}},
    { schoolName: "Reno", schoolLevel: "High School", schoolAddress: "395 Booth St", schoolCity: "Reno", schoolState: "NV", schoolZip: "89509", location: {lat: 39.517529,  lng: -119.827923}},
    { schoolName: "RiSE Academy for Adult Achievement", schoolLevel: "High School", schoolAddress: "1301 Cordone Ave", schoolCity: "Reno", schoolState: "NV", schoolZip: "89502", location: {lat: 39.512721,  lng: -119.791098}},
    { schoolName: "Risley", schoolLevel: "Elementary School", schoolAddress: "1900 SullivanLn", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89431", location: {lat: 39.551097,  lng: -119.770371}},
    { schoolName: "Sepulveda", schoolLevel: "Elementary School", schoolAddress: "5075 Ion Dr", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89436", location: {lat: 39.583888,  lng: -119.732647}},
    { schoolName: "Shaw", schoolLevel: "Middle School", schoolAddress: "Eagle Canyon Dr", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89441", location: {lat: 39.692475,  lng: -119.749713}},
    { schoolName: "Silver Lake", schoolLevel: "Elementary School", schoolAddress: "8719 Red Baron Rd", schoolCity: "Reno", schoolState: "NV", schoolZip: "89506", location: {lat: 39.632952,  lng: -119.901941}},
    { schoolName: "Smith Alice", schoolLevel: "Elementary School", schoolAddress: "1070 Beckworth Dr", schoolCity: "Reno", schoolState: "NV", schoolZip: "89506", location: {lat: 39.606705,  lng: -119.837242}},
    { schoolName: "Smith Kate", schoolLevel: "Elementary School", schoolAddress: "1925 F St", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89431", location: {lat: 39.538621,  lng: -119.769891}},
    { schoolName: "Smithridge", schoolLevel: "Elementary School", schoolAddress: "4801 Neil Rd", schoolCity: "Reno", schoolState: "NV", schoolZip: "89502", location: {lat: 39.480277,  lng: -119.782687}},
    { schoolName: "Spanish Springs", schoolLevel: "Elementary School", schoolAddress: "100 Marilyn Mae Dr", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89441", location: {lat: 39.644116,  lng: -119.692771}},
    { schoolName: "Spanish Springs HS", schoolLevel: "High School", schoolAddress: "1065 Eagle Canyon Dr", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89441", location: {lat: 39.650136,  lng: -119.729637}},
    { schoolName: "Sparks HS", schoolLevel: "High School", schoolAddress: "820 15th St", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89431", location: {lat: 39.540837,  lng: -119.761563}},
    { schoolName: "Sparks MS", schoolLevel: "Middle School", schoolAddress: "2275 18th St", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89431", location: {lat: 39.552033,  lng: -119.768188}},
    { schoolName: "Stead", schoolLevel: "Elementary School", schoolAddress: "10580 Stead Blvd", schoolCity: "Reno", schoolState: "NV", schoolZip: "89506", location: {lat: 39.624267,  lng: -119.881722}},
    { schoolName: "Sun Valley", schoolLevel: "Elementary School", schoolAddress: "5490 Leon Dr", schoolCity: "Sun Valley", schoolState: "NV", schoolZip: "89433", location: {lat: 39.591825,  lng: -119.774551}},
    { schoolName: "Swope", schoolLevel: "Middle School", schoolAddress: "901 Keele Dr", schoolCity: "Reno", schoolState: "NV", schoolZip: "89509", location: {lat: 39.510486,  lng: -119.847613}},
    { schoolName: "Taylor", schoolLevel: "Elementary School", schoolAddress: "252 Egyptian Way", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89441", location: {lat: 39.6532,  lng: -119.710826}},
    { schoolName: "TMCC", schoolLevel: "High School", schoolAddress: "7000 Dandini Blvd RDMT 314", schoolCity: "Reno", schoolState: "NV", schoolZip: "89512", location: {lat: 39.570288,  lng: -119.797817}},
    { schoolName: "Towles", schoolLevel: "Elementary School", schoolAddress: "2800 Kings Row", schoolCity: "Reno", schoolState: "NV", schoolZip: "89503", location: {lat: 39.537612,  lng: -119.851395}},
    { schoolName: "Traner", schoolLevel: "Middle School", schoolAddress: "1700 Carville Dr", schoolCity: "Reno", schoolState: "NV", schoolZip: "89512", location: {lat: 39.540656,  lng: -119.792569}},
    { schoolName: "Van Gorder", schoolLevel: "Elementary School", schoolAddress: "7650 Campello Dr", schoolCity: "Sparks", schoolState: "NV", schoolZip: "89436", location: {lat: 39.625229,  lng: -119.682322}},
    { schoolName: "Vaughn", schoolLevel: "Middle School", schoolAddress: "1200 Bresson Ave", schoolCity: "Reno", schoolState: "NV", schoolZip: "89502", location: {lat: 39.513973,  lng: -119.792635}},
    { schoolName: "Verdi", schoolLevel: "Elementary School", schoolAddress: "250 Bridge St", schoolCity: "Verdi", schoolState: "NV", schoolZip: "89439", location: {lat: 39.521303,  lng: -119.989728}},
    { schoolName: "Veterans", schoolLevel: "Elementary School", schoolAddress: "1200 Locust St", schoolCity: "Reno", schoolState: "NV", schoolZip: "89502", location: {lat: 39.513403,  lng: -119.799888}},
    { schoolName: "Warner", schoolLevel: "Elementary School", schoolAddress: "3075 Heights Dr", schoolCity: "Reno", schoolState: "NV", schoolZip: "89503", location: {lat: 39.528788,  lng: -119.855316}},
    { schoolName: "Westergard", schoolLevel: "Elementary School", schoolAddress: "1785 Ambassador Dr", schoolCity: "Reno", schoolState: "NV", schoolZip: "89523", location: {lat: 39.526855,  lng: -119.89264}},
    { schoolName: "Whitehead", schoolLevel: "Elementary School", schoolAddress: "3570 Waterfall Dr", schoolCity: "Reno", schoolState: "NV", schoolZip: "89434", location: {lat: 39.564296,  lng: -119.710909}},
    { schoolName: "Winnemucca", schoolLevel: "Elementary School", schoolAddress: "1349 Backer Way", schoolCity: "Reno", schoolState: "NV", schoolZip: "89523", location: {lat: 39.523384,  lng: -119.879106}},
    { schoolName: "Wooster", schoolLevel: "High School", schoolAddress: "1331 E Plumb ln", schoolCity: "Reno", schoolState: "NV", schoolZip: "89502", location: {lat: 39.507705,  lng: -119.783336}}


  ],
  levels: ["High School", "Middle School", "Elementary School"],
  selectedLevel: ko.observableArray([]),
  cities: ["Gerlach", "Incline Village", "Reno", "Sparks", "Sun Valley", "Verdi", "Wadsworth"],
  selectedCity: ko.observableArray([])
};

viewModel.filteredSchools = ko.computed(function () {
  if (viewModel.selectedLevel().length > 0 && viewModel.selectedCity().length > 0) {
    return ko.utils.arrayFilter(viewModel.schools, function(school1) {
      return (-1 != ko.utils.arrayIndexOf(viewModel.selectedLevel(), school1.schoolLevel) && -1 != ko.utils.arrayIndexOf(viewModel.selectedCity(), school1.schoolCity));
    });
  } else if (viewModel.selectedLevel().length == 0 && viewModel.selectedCity().length > 0) {
      return ko.utils.arrayFilter(viewModel.schools, function(school1) {
        return (-1 != ko.utils.arrayIndexOf(viewModel.selectedCity(), school1.schoolCity));
      });
  } else if (viewModel.selectedLevel().length > 0 && viewModel.selectedCity().length == 0) {
    return ko.utils.arrayFilter(viewModel.schools, function(school1) {
      return (-1 != ko.utils.arrayIndexOf(viewModel.selectedLevel(), school1.schoolLevel));
    });
  } else {
      return viewModel.schools;
  }

});

viewModel.selectedLevel.subscribe(function() {
  showfMarkers();
});
viewModel.selectedCity.subscribe(function() {
  showfMarkers();
});

viewModel.showInfo = function(location) {
  google.maps.event.trigger(location.marker,'click');
};



ko.applyBindings(viewModel);
