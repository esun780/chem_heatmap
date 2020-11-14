A website to easily let users view heatmaps of the contamination levels of various hazardous chemicals across the state of Michigan. Try it out at https://esun780.github.io/chem_heatmap.github.io/!

![Image of Website](main/images/heatmap_demo_image.png)

We obtained the data for this website by gathering and analyzing 400,000+ publicly available unstructured EPA datapoints. You can check out the repo for that portion at https://github.com/UMEcoData/Michigan-Chemical-Contamination-Heatmaps! 

**Things we still have to do:**
* Get Descriptions for all chemicals that don't have one
    * 1-butanol
    * 2-methoxyethanol
    * chromium
    * germanium
    * HAA5
    * HAA6Br
    * HAA9
    * NDMA
    * oxyfluorfen
    * testosterone
* Possibly edit other chemical descriptions to remove/modify the numbers that indicate which source certain info was from, and update the demo image afterwards once done
* Look over and finalize the main project description - Note: Some of the technical details behind how the website and heatmap works are misleading, so fix if needed - Heatmap_Tech_Details.txt
* Add a link to the live website on the EcoData website, at the very top of the project description <--- VERY IMPORTANT
---
Stuff that can be done after meeting, but need an opinion on during meeting:
* : Update the README.md file to remove this todo section
* Add in the about page stuff (including header link!!!) and put everyone's faces and descriptions onto it
* : Figure out if there are units for the chemical contamination values, and add those in to heatmap and zipcode summary modal
* : Possibly limit the length of chemical contamination values (10.0633333333) -> (10.063) ?? - on both heatmap and zipcode modal
* : Delete more unneeded files to clean up repo (_config.yml and index.md and Heatmap_Tech_Details??)
* : have the main ecodata github fork this repo and launch their own github pages site, and update all links afterwards
