1. Strapi(node.js) => CMS/
- => Came with api exposure
- => built-in admin panel
- => data modeling can be done in panel or coded solution
<br />
2. Model for event include
  
- [id (primary key), documentId, Live_Date, Performer, Type, lat, lng, Description, Media_Link, Name]
<br />
Model for ticket include:

- [id (primary key), documentId, Price, Amount, Description, Sales_Date, Sales]
<br />
This model only include the basic as no specific requirement or business logic is known.
<br />
The CMS exposes RESTful APIs by default for the cilent with bearer token which can be generated in admin panel.
<br />
<br />
3. Use of App Script in Google Sheets => https://docs.google.com/spreadsheets/d/1dnLjCGdtttJ-YfC1rZOBsUvVGkZUBgu34ekiPLjTjbI/edit?gid=358854339#gid=358854339
  <br />
Since the CMS will need to be exposed to WAN before App Script can fetch data via API calls, currently no workable connection between google sheet and CMS can be established due to the time constraint of the project
<br />
However, mock api can be used to provide some insights and demonstration for this part.
<br />
<br />
Potential Improvement:

- Better UI/ More intuitive UX
- Middleware in CMS to process the request for validation or logic
- Reset table and re-render after DELETE

4. Frontend/
A simple web page built with vite+react and tailwindcss. Events sorted by nearest date to furthest
<br />
<br />
Potential Improvement:

- Use of Flowbite plugin for component like: carousel, modal
- Time range filter for events
- Join same date event into one row rather than separated

Port - 1337 => Strapi
<br />
Port - 5174 => Frontend
