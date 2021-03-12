# Congress_Terms_Map

## Objectives
The main purpose of this project is to communicate the length of tenure of legislators in the United States Congress for each state.  It is often said that the incumbants need to be voted out to drive change.  My curiousity of where the career politicians with the longest stints in office are located drove me to "map it out."  

## Resources
* JavaScript
* html
* css
* Leaflet
* D3
* Mapbox

* data:  
  * GeoJSON for outlines of states:  [states](https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json)
  * JSON with current congressional data:  [congress](https://theunitedstates.io/congress-legislators/legislators-current.json)

## Recent Fixes 
* Able to get the senate data (names, terms, etc.) joined with the GeoJson data for the states to 
  * now included in popups.
* Had to research how to unstack rows in pandas dataframes to get a clean dataframe with a list of senators by state

## Challenges / Next Steps
* Current challenge is how to get the congress data (names, terms, etc.) joined with the GeoJson data for the states to include in popups.
* May consider separate layers for Senate & House of Representatives.
* Would like to color code states based on average tenure of legislators.
* **Currently working on cleaning up data with Pandas**
* **Currently working on Representative Data**
* Considering doing viz in Tableau
* code is still very raw and has a lot of junk commented out