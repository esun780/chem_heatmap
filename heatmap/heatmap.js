// made using this article: https://blog.zingchart.com/how-to-make-a-choropleth-map/
// try making a year slider like this: https://www.zingchart.com/gallery/timeline-style-map-with-slider-input

// the chemicals_data_path should also be a variable, but import doesn't allow variables so it'll be hardcoded here
import { chemicals_data } from "./json_data_files/chemicals_data.js";
const CONSTANTS = {
<<<<<<< HEAD
  geojson_path: "./heatmap/json_data_files/simplified_michigan_zipcodes_3_pct.geo.json",
=======
  geojson_path: "./json_data_files/simplified_michigan_zipcodes_3_pct.geo.json",
>>>>>>> gh-pages
  colors: { // any css-compatible colors work here, but the chroma color scales can be found at https://colorbrewer2.org/
    lowest: chroma.brewer.PuRd[0], // used for default map background (0 contaminants found)
    highest: chroma.brewer.PuRd[chroma.brewer.PuRd.length - 1], // used for the highest contaminant amount across all zipcodes
    border: chroma.brewer.PuRd[1],
  },
};

// zingcharts does the heavy lifting, I just provide it with the data to display
// if you want to display data for a new chemical or year, modify the styles_json that is passed in
// the chemical_name and year are only passed in here to make the heatmap title, they won't change the heatmap's data
// you need to pass the new chemical_name and year into the get_heatmap_colors function to change the actual heatmap
<<<<<<< HEAD
// added an optional geojson_path parameter so html files not in the main global folder (which will thus have different paths for the geojson) can still use make_heatmap
export function make_heatmap(chemical_name, year, geojson_path = CONSTANTS.geojson_path) {
=======
export function make_heatmap(chemical_name, year) {
>>>>>>> gh-pages
  const styles_json = get_heatmap_colors(chemicals_data, chemical_name, year);

  zingchart.maps.loadGeoJSON({
    id: 'michigan_zipcodes', // Give the map an id
<<<<<<< HEAD
    url: geojson_path,
=======
    url: CONSTANTS.geojson_path,
>>>>>>> gh-pages
    mappings: { //Recommended. Allows you to property names from the GeoJSON file to ZingChart.
      id: 'ZCTA5CE10', // zip code property name in the geojson
      name: 'ZCTA5CE10',
    },
    width: "100%",
    height: "100%",
    style: { //Optional styling options
      poly: {
        label: {
          visible: false,
        }
      }
    },
    callback: function() { // Function called when GeoJSON is loaded
      zingchart.render({
        id: 'heatmap',
        data: {
          "title": {  
            "text": `${chemical_name} ${year}`,  
            "font-size": 16,
            "font-weight": "bold"
          }, 
          "shapes": [{
            "type": "zingchart.maps", // Set shape to map type
            "options": {
              "name": "michigan_zipcodes", // Reference to the id set in loadGeoJSON()
              //"scale": true, // turned this off since it makes it slower
              "style": {
                items: styles_json,
                backgroundColor: CONSTANTS.colors.lowest,
                borderColor: CONSTANTS.colors.border,
                "label": {
                  visible: false,
                }
              },
            }
          }],
        }
      })
    }
  });
}

// makes the json object that zingcharts needs to color the data into the choropleth map
// chroma.js is used to display the color of each data point on a scale between
// the lowest and highest color based on the ratio between each value
// and the highest data value for this specific chemical and year
export function get_heatmap_colors(chemicals_data, chemical_name, year) {
  const styles_json = {};

  const chemical_data_in_year = chemicals_data[chemical_name][year];
  // convert every data value to a float from a string
  // it'll still work if everything is a string, but I want to be sure that nothing gets screwed up
  for (const key in chemical_data_in_year) {
    chemical_data_in_year[key] = parseFloat(chemical_data_in_year[key]);
  }

  const highest_contamination_value = Math.max(...Object.values(chemical_data_in_year));
  const contamination_data_pairs = Object.entries(chemical_data_in_year);

  for (const [ zipcode, value ] of contamination_data_pairs) {
    const fraction_of_highest = (value / highest_contamination_value);
    const scale = chroma.scale([CONSTANTS.colors.lowest, CONSTANTS.colors.highest]);
    const bg_color = scale(fraction_of_highest).hex();

    styles_json[zipcode] = {
      "backgroundColor": bg_color,
      "hover-state": {
        "border-color": "#e0e0e0", // todo, change this to some variable
        "border-width": 2,
        "background-color": bg_color,
      },
      "tooltip": { // the thing that shows up on hover
        "text": `${zipcode}<br>${value}`,
      }
    }
  }
  return styles_json;
}
